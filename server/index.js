import express from 'express';
import cors from 'cors';
import xlsx from 'xlsx';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Path to the database folder and excel file
const dbFolder = path.join(__dirname, '..', 'admin_database');
const excelFilePath = path.join(dbFolder, 'callbacks.xlsx');

// Ensure database folder exists
if (!fs.existsSync(dbFolder)) {
  fs.mkdirSync(dbFolder, { recursive: true });
}

app.post('/api/contact', (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Name, email, and phone are required' });
    }

    const newEntry = {
      Date: new Date().toLocaleString(),
      Name: name,
      Email: email,
      Phone: phone,
    };

    let workbook;
    let worksheet;

    if (fs.existsSync(excelFilePath)) {
      // File exists, read it
      workbook = xlsx.readFile(excelFilePath);
      worksheet = workbook.Sheets[workbook.SheetNames[0]];
      
      // Convert existing sheet to json
      const existingData = xlsx.utils.sheet_to_json(worksheet);
      
      // Add new entry
      existingData.push(newEntry);
      
      // Create a new sheet with updated data
      const newWorksheet = xlsx.utils.json_to_sheet(existingData);
      
      // Replace old sheet
      workbook.Sheets[workbook.SheetNames[0]] = newWorksheet;
    } else {
      // File doesn't exist, create a new workbook and sheet
      workbook = xlsx.utils.book_new();
      worksheet = xlsx.utils.json_to_sheet([newEntry]);
      xlsx.utils.book_append_sheet(workbook, worksheet, 'Callbacks');
    }

    // Write back to file
    xlsx.writeFile(workbook, excelFilePath);

    console.log('New callback requested saved to Excel:', newEntry);
    res.status(200).json({ message: 'Callback request saved successfully' });
  } catch (error) {
    console.error('Error saving callback to Excel:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
