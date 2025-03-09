// Importing express
import express from 'express';

// Create an instanse of express    
const app = express();

// Tells express to use the public folder to serve static files
app.use(express.static("public"));  

// Importing path module
import path from 'path';

// Setting up the route for the frontpage of the website
app.get("/", (req, res) => {
    res.sendFile(path.resolve('public/frontpage/frontpage.html'));
});

// setting up routes for the different weeks
app.get("/weekone", (req, res) => {
    res.sendFile(path.resolve('public/week/weekone.html'));
});

app.get("/weektwo", (req, res) => {
    res.sendFile(path.resolve('public/week/weektwo.html'));
});

app.get("/weekthree", (req, res) => {
    res.sendFile(path.resolve('public/week/weekthree.html'));
});

app.get("/weekfour", (req, res) => {
    res.sendFile(path.resolve('public/week/weekfour.html'));
});

app.get("/weekfive", (req, res) => {
    res.sendFile(path.resolve('public/week/weekfive.html'));
});

app.get("/weeksix", (req, res) => {
    res.sendFile(path.resolve('public/week/weeksix.html'));
});

const PORT = Number(process.env.PORT) || 8080;
// app.listen() takes two arguments, the port number and a callback function
const server = app.listen(PORT, () => console.log("Server is running on port", server.address().port));
