import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"

import handledbconnections from "./DBconnections/dbconnection.js";
import { app, server } from "./socket/Socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000

app.use(cookieParser())
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }))

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/user", userRoutes)

server.listen(PORT, () => {
    handledbconnections();
    console.log(`server is running at ${PORT}`)
})

