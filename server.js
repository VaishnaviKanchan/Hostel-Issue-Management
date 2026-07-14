const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const issueRoutes = require('./routes/issueRoutes');


const app = express();
app.use(cors());
app.use(express.json()); // parse JSON body


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch(err => console.log("MongoDB Connection Error:", err));

app.use('/api/issues', issueRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));