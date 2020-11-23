require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require("./middleware/requireAuth");

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = "mongodb+srv://admin:Password@123@track-server.rdylm.mongodb.net/track-server?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on("connected", () => {
    console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
    console.log('Error connecting to mongo', err);
});

app.get("/", requireAuth, (req, res) => {
    res.send(`You email: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log("Listen on port 3000");
});