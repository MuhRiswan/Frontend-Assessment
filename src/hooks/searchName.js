// Tugas Two
const data = [
  "Danawi Liam",
  "Tarjaya",
  "Daruna",
  "Warsoni",
  "John Wick",
  "Hadi PS",
  "Derian Lekso",
];

function searchName(arr, query) {
  const result = arr.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return result.length > 0 ? result : "Nama tidak ditemukan";
}

const query = "war"; // Jika di input war untuk mencari data yang mimikili kata "war"
const result = searchName(data, query);

console.log(result); // Output: ['Warsoni']
