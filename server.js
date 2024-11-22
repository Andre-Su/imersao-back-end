import express from 'express'

const app = express();

app.listen(3000, ()=>{
    console.log("Server is running on port http://localhost:3000");
});

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});
