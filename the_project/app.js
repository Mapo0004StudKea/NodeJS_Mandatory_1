// Importing express
import express from 'express';
import { url } from 'inspector';

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

// setting up urls for the different weeks
const weekOneRoutes = [
    { url: "/", file: "index.html" },
    { url: "/git-terminal", file: "git-terminal.html" },
    { url: "/javascript-datatypes", file: "javascript-datatypes.html" },
    { url: "/node-js", file: "node-js.html" },
    { url: "/javascript-datatypes-2", file: "javascript-datatypes-2.html" },
    { url: "/type-coercion", file: "type-coercion.html" },
    { url: "/rest-api", file: "rest-api.html" },
    { url: "/rest-convention", file: "rest-convention.html" },
];

const weekTwoRoutes = [
    { url: "/", file: "index.html" },
    { url: "/javascript-scoping", file: "javascript-scoping.html" },
    { url: "/advanced-functions", file: "advanced-functions.html" },
    { url: "/callback-syntax", file: "callback-syntax.html" },
    { url: "/npm-vs-other-managers", file: "npm-vs-other-managers.html" },
    { url: "/package-json", file: "package-json.html" },
    { url: "/express-server", file: "express-server.html" },
    { url: "/http-get-with-express", file: "http-get-with-express.html" },
    { url: "/node-modules", file: "node-modules.html" },
];

const weekThreeRoutes = [
    { url: "/", file: "index.html" },
    { url: "/nodemon-usage", file: "nodemon-usage.html" },
    { url: "/loop-methods", file: "loop-methods.html" },
    { url: "/functional-loops", file: "functional-loops.html" },
    { url: "/for-loop-usage", file: "for-loop-usage.html" },
    { url: "/why-functional-loops", file: "why-functional-loops.html" },
    { url: "/url-terminology", file: "url-terminology.html" },
    { url: "/post-request-express", file: "post-request-express.html" },
    { url: "/body-parsing-express", file: "body-parsing-express.html" },
];

const weekFourRoutes = [
    { url: "/", file: "index.html" },
    { url: "/crud-rest-api", file: "crud-rest-api.html" },
    { url: "/get-date-js", file: "get-date-js.html" },
    { url: "/fetch-request", file: "fetch-request.html" },
];

const weekFiveRoutes = [
    { url: "/", file: "index.html" },
    { url: "/html-import-export", file: "html-import-export.html" },
    { url: "/node-import-export", file: "node-import-export.html" },
    { url: "/serve-static-files", file: "serve-static-files.html" },
    { url: "/frontend-structure", file: "frontend-structure.html" },
    { url: "/redirection-methods", file: "redirection-methods.html" },
    { url: "/client-vs-server-redirection", file: "client-vs-server-redirection.html" }
];

const weekSixRoutes = [
    { url: "/", file: "index.html" },
    { url: "/client-vs-backend-fetch", file: "client-vs-backend-fetch.html" },
    { url: "/environment-variables", file: "environment-variables.html" },
    { url: "/npm-scripts", file: "npm-scripts.html" },
    { url: "/semantic-html", file: "semantic-html.html" },
    { url: "/client-vs-server-files", file: "client-vs-server-files.html" },
    { url: "/sticky-footer", file: "sticky-footer.html" }
];

// Dynamisk routing for week 1
weekOneRoutes.forEach(route => {
    app.get(`/week/1${route.url}`, (req, res) => {
        res.sendFile(path.resolve(`public/weeks/week1/${route.file}`));
    });
});

// Dynamisk routing for week 2
weekTwoRoutes.forEach(route => {
    app.get(`/week/2${route.url}`, (req, res) => {
        res.sendFile(path.resolve(`public/weeks/week2/${route.file}`));
    });
});

// Dynamisk routing for week 3
weekThreeRoutes.forEach(route => {
    app.get(`/week/3${route.url}`, (req, res) => {
        res.sendFile(path.resolve(`public/weeks/week3/${route.file}`));
    });
});

// Dynamisk routing for week 4
weekFourRoutes.forEach(route => {
    app.get(`/week/4${route.url}`, (req, res) => {
        res.sendFile(path.resolve(`public/weeks/week4/${route.file}`));
    });
});

// Dynamisk routing for week 5
weekFiveRoutes.forEach(route => {
    app.get(`/week/5${route.url}`, (req, res) => {
        res.sendFile(path.resolve(`public/weeks/week5/${route.file}`));
    });
});

// Dynamisk routing for week 6
weekSixRoutes.forEach(route => {
    app.get(`/week/6${route.url}`, (req, res) => {
        res.sendFile(path.resolve(`public/weeks/week6/${route.file}`));
    });
});

const PORT = Number(process.env.PORT) || 8080;
// app.listen() takes two arguments, the port number and a callback function
const server = app.listen(PORT, () => console.log("Server is running on port", server.address().port));
