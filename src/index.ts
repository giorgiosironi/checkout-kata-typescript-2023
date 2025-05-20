import { price } from "./price";
import express from "express";

console.log(`Hello world! The price is ${price('something')}`);


const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log(`Hello world app listening on port 3000`)
})
