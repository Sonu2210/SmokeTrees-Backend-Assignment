import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import User from './models/user.js';
import Address from './models/address.js';

const app = express();
// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/assignmentdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('MongoDB connection error:', error));

// POST route to handle form submission
app.post('/submit', async (req, res) => {
  try {
    const { name, address } = req.body;

    // Create and save the user
    const newUser = new User({ name });
    await newUser.save();

    // Create and save the address linked to the user
    const newAddress = new Address({ userId: newUser._id, address });
    await newAddress.save();

    res.status(200).json({ message: 'User and address saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Error saving data' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
