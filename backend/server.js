import express from "express"
import dotenv from "dotenv"
import mongoose, { connect } from "mongoose";
import bookRoute from "./route/book.route.js"
import cors from "cors"

const app = express()
app.use(cors());
const port = process.env.PORT || 4000;
dotenv.config();
const pass=process.env.password;
try {
    mongoose.connect(`mongodb+srv://royalavik07:${pass}@users.ok1bw.mongodb.net/?retryWrites=true&w=majority&appName=Users`);
    console.log("connected");
} catch (error){
    console.log("Error : ",error)

}
app.use("/book",bookRoute)
app.get('/', (req, res) => {
  res.send('Yes')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})