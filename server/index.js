import express from "express";
import cors from "cors";
const app = express();
const PORT =9000;
import connectToMongo from "./config/db.js";
import authRoutes from "./routes/blog.js";

connectToMongo();
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("API is running....");
});

//API Routes
app.use(express.static("public/upload"))
app.use("/api/v1",authRoutes);
app.listen(PORT,()=>{
    console.log(`API is running on http://localhost:${PORT}`);
})