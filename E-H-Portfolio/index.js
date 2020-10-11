const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");

const projects = require("./projects.json");
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.use(express.static("./projects"));
app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render("home", {
        title: "Home Page",
        style: "home.css",
        projects,
        helpers: {
            shouting(text) {
                return text.toUpperCase() + "!!!!";
            },
        },
    });
});
app.get("./projects/:project", (req, res) => {
    const { project } = req.params;
    const selectedProject = data.find((item) => item.directory === project);
    console.log(project, selectedProject);
    if (!selectedProject) {
        res.send("Error 404, page not found");
    } else {
        res.render("project", {
            data,
            selectedProject,
        });
    }
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About my Projects",
        style: "about.css",
        projects,
        layout: null,
    });
});

app.listen(8080, () => console.log("Server is Listening"));
