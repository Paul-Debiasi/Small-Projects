const { urlencoded } = require("express");
// is a function that return an obj full of method
const express = require("express");

const app = express();

const cookieParser = require("cookie-parser");

// We are adding a piece of middle-ware in order to receive info from our form
app.use(express.urlencoded({ extended: false }));

// Creating my own middle-ware
// app.use((req, res, next) => {
//     console.log("MIDDLEWARE running!!");
//     console.log(`a ${req.method} request was made to the ${req.url} route`);
//     next();
// });

app.use((req, res, next) => {
    console.log(`A ${req.method} request was made to the ${req.url} route`);
    next();
});
app.use(cookieParser());

app.use(express.static("./projects"));

app.get("/", (req, res) => {
    res.send(
        `<input type="checkbox" name="accept"><span>This Website use Cookies. Please accept to continue.</span>`,
    );
    res.cookie("authentication", true);
    // if (req.cookie.authenticated) {
    res.redirect("/pimento");
    // }
});

app.get("/pimento", (req, res) => {
    // res.cookie("first-cookie", "This is Fantastic!!");
    console.log("a GET req was made to the root route");
    // send my req wrapped into Html
    res.send("<h1>Hello Pimento!!</h1>");
    // redirect the user
    // res.redirect('/about');
});

// Here we are redirecting the user to the about page
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/user/:username/:postId", (req, res) => {
    // Is a method that take pair and wait for a key value. ex Username: Paul
    // req.params();
    // destructuring info
    const { username, postId } = req.params;
    res.send(`
	<h1>This is the page of ${username}</h1>
	<h2>This is the post of ${postId}</h2>`);
});
app.get("/register", (req, res) => {
    res.send(`

<h2>Please tell us about yourself</h2>
        <form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 50%;">
            <input type='text' name='firstname' placeholder='First Name' autocomplete='off'>
            <input type='text' name='lastname' placeholder='Last Name' autocomplete='off'>
            <div>
                <span>How old are you? </span><input type="number" name="age">
            </div>
            <div>
                <input type="checkbox" name="subscribe"><span>Would you like to receive our newsletter?</span>
            </div>
            <button> submit </submit>
        </form>

`);
});
// This gonna lister for the submit of our post on line 28
app.post("/register", (req, res) => {
    // let's check if it's working
    console.log("A post request was made");
    // Requering our body from the form
    console.log("req.body", req.body);
    // Destructuring
    const { firstname, lastname, age, subscribe } = req.body;
    res.cookie("first-cookie", "this is sooo exciting!!!");
    res.cookie("authenticated", true);
    if (subscribe) {
        res.send(`<h1>Thank you ${firstname} ${lastname} for subscribing</h1>`);
    } else {
        res.send(`<h1>Too bad!!</h1>`);
    }
});
app.get("/private", (req, res) => {
    console.log("req.cookies: ", req.cookies);
    if (req.cookies.authenticated) {
        res.send(`
            <h1>TOP SECRET INFORMATION ✋ ⛔️ 🔞 🙅‍♂️</h1>
            <h3>this is sooooo secret</h3>
        `);
    } else {
        res.redirect("/");
    }
});

app.listen(8080, () => console.log("Server Listening!"));
// Is a method that take 2 values for our server to listen
// Middle ware is a code that run before my route
