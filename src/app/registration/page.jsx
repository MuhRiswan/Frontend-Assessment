"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

// Tugas Five
const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    gender: false,
    status: false,
  });

  const [successMessage, setSuccessMessage] = useState("");

  const accessToken = "YOUR_ACCESS_TOKEN_HERE"; // Token aksesnya

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    setErrors({
      ...errors,
      [id]: false,
    });
    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi form
    let isValid = true;
    const newErrors = {
      name: !formData.name,
      email:
        !formData.email ||
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          formData.email
        ),
      gender: !formData.gender,
      status: !formData.status,
    };

    setErrors(newErrors);
    isValid = Object.values(newErrors).every((error) => error === false);

    if (isValid) {
      try {
        const response = await fetch("https://gorest.co.in/public/v2/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${accessToken}`,
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            gender: formData.gender,
            status: formData.status,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          setSuccessMessage("User registered successfully!");
          setFormData({ name: "", email: "", gender: "", status: "" }); // Reset form
        } else {
          const errorData = await response.json();
          console.error("Error registering user:", errorData);
          alert("Error registering user. Please try again.");
        }
      } catch (error) {
        console.error("Error registering user:", error);
        alert("Error registering user. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register User</h2>
        <form onSubmit={handleSubmit} noValidate>
          {/* Name Field */}
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">Name is required.</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                Please enter a valid email.
              </p>
            )}
          </div>

          {/* Gender Select Field */}
          <div className="mb-4">
            <Label htmlFor="gender">Gender</Label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, gender: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-2">Gender is required.</p>
            )}
          </div>

          {/* Status Select Field */}
          <div className="mb-4">
            <Label htmlFor="status">Status</Label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, status: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            {errors.status && (
              <p className="text-red-500 text-sm mt-2">Status is required.</p>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
        {successMessage && (
          <p className="text-green-500 text-center mt-4">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Registration;
