const express = require("express");

const app = express();


const contactRoutes = require("./routes/Contact");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

//Connect database
database.connect();
//middlewares
app.use(express.json());
app.use(cookieParser());
// app.use(
//   cors({
//     origin:"http://localhost:3000",
//     credentials:true,
//   })
// )
// app.use(cors({
//   origin: ['http://localhost:5173'], // ✅ Correct frontend origin (Vite)
//   credentials: true,
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// }));

// app.options('*', cors()); // ✅ Handles preflight requests

app.use(cors())






//routes

app.use("/api/v1/reach", contactRoutes);

//route def

app.get("/",(req,res)=>{
  return res.json({
    success:true,
    message:"Server is connected and successfully running.",
  });
});

app.listen(PORT,()=>{
  console.log(`App is running at ${PORT}`)
})