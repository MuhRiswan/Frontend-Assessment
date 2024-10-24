"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Tugas Three & Four
export default function Dashboard() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newGender, setNewGender] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editGender, setEditGender] = useState("");
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // Fetch data from API (simulating)
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://gorest.co.in/public/v2/users", {
        method: "GET",
      });
      const data = await response.json();
      setData(data);
    };
    getData();
  }, []);

  // Add new data
  const handleAdd = () => {
    const newData = {
      id: data.length + 1,
      name: newName,
      email: newEmail,
      gender: newGender,
    };
    setData([...data, newData]);
    setNewName("");
    setNewEmail("");
    setNewGender("");
    setOpenAddDialog(false);
  };

  // Delete data
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // Open edit dialog with selected item's data
  const handleEdit = (id) => {
    const item = data.find((item) => item.id === id);
    setEditId(id);
    setEditName(item.name);
    setEditEmail(item.email);
    console.log(item.gender);
    setEditGender(item.gender);
    setOpenEditDialog(true);
  };

  // Save edited data
  const handleSaveEdit = () => {
    setData(
      data.map((item) =>
        item.id === editId
          ? { ...item, name: editName, email: editEmail, gender: editGender }
          : item
      )
    );
    setEditId(null);
    setEditName("");
    setEditEmail("");
    setEditGender("");
    setOpenEditDialog(false);
  };

  // Filter data by search term
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-12 min-h-[120vh] px-8 ">
      <h1 className="text-2xl font-bold mb-4">Data Table</h1>

      {/* Search */}
      <div className="flex w-64 gap-4 mb-6 items-center">
        <Input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-64"
        />
        <Dialog open={openAddDialog} onOpenChange={setOpenAddDialog}>
          <DialogTrigger asChild>
            <Button>Add Data</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Data</DialogTitle>
            </DialogHeader>
            <div className="grid grid-rows-2 gap-2">
              <div className="w-full">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>
              <div className="w-full">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </div>
              <div className="w-full">
                <Label htmlFor="gender">Gender</Label>
                <Select
                  id="gender"
                  onValueChange={(value) => setNewGender(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAdd}>Add</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.gender}</TableCell>
              <TableCell className="space-x-2">
                <Button size="sm" onClick={() => handleEdit(item.id)}>
                  Edit
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => setDeleteId(item.id)}
                    >
                      Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to delete this?
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDelete(deleteId)}>
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No data available
              </TableCell>
            </TableRow>
          ) : (
            filteredData.length === 0 &&
            searchTerm !== "" && (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  Data not found
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>

      {/* Edit Dialog */}
      <Dialog open={openEditDialog} onOpenChange={setOpenEditDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Data</DialogTitle>
          </DialogHeader>
          <div className="grid grid-rows-2 gap-2">
            <div className="w-full">
              <Label htmlFor="editName">Name</Label>
              <Input
                type="text"
                id="editName"
                placeholder="Name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
            <div className="w-full">
              <Label htmlFor="editEmail">Email</Label>
              <Input
                type="email"
                id="editEmail"
                placeholder="Email"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
            </div>
            <div className="w-full">
              <Label htmlFor="editGender">Gender</Label>
              <Select
                defaultValue={editGender}
                id="editGender"
                onValueChange={(e) => setEditGender(e)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSaveEdit}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
