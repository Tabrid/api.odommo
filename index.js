
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./server/routes/auth.routes.js";
import blogRoutes from "./server/routes/blog.routes.js";
import connectDB from "./server/DB/databaseConfigs.js";
import serviceRoutes from "./server/routes/service.routes.js";
import projectRoutes from "./server/routes/project.routes.js";
const PORT = process.env.PORT || 5000;


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use('/api', blogRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api', projectRoutes);
app.get("/", (req, res) => {
	res.send("Server Running...");
});

app.listen(PORT, () => {
	connectDB();
	console.log(`Server Running on port ${PORT}`);
});