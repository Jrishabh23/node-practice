const express = require("express");
const { nextTick } = require("process");
const app = express();
const port = 7000;
/**
 * @desc create middleware
 *  if we have not use next(), so page is loading continuously
 */
const middleware = (req, res, next) => {
    console.log("middleware run");
    next();
};
/**
 * @desc set middleware run every call
 */
app.use(middleware);

app.get("/home", (req, res) => {
    res.send("This is home page");
});

app.get("/profile/:name", (req, res) => {
    const { name } = req.params;
    res.send(`This is home page ${name}`);
});

app.get("/", (req, res) => {
    res.send("This is my first page");
});

app.listen(port, () => {
    console.log(`port run 7000`);
});
