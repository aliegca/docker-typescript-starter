import express from "express";

const app = express();
const port = 3000;

const one: number = 1;
const two: number = 2;
let amr: string = "Amr";
let total: number = one + two;
// console.log(total)
app.get("/", (_req, res) => res.send(`1 + 2 = ${ total + amr}`)); // typescript is jocking  here 
app.listen(port);

console.log(`[app] : http://localhost:${port}`);


// ts-node src/amr.ts