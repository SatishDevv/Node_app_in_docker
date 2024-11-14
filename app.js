import "dotenv/config";
import express from "express";
export const app = express();
// import cors from "cors";
// import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error.js";
import userRouter from "./routes/user.route.js";

// body parser
app.use(express.json({ limit: "50mb" }));

// cookie parser
// app.use(cookieParser());

// cors (cross origin resource sharing)
// app.use(
//   cors({
//     origin: process.env.ORIGIN,
//   })
// );

// Routers
app.use("/api/v1", userRouter);

// test api
app.use("/test", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "API is Working",
  });
});

app.use("*", (req, res, next) => {
  const err = new Error(`Route ${req.originalUrl} Not Found`);
  err.statusCode = 404;
  next(err);
});

app.use(ErrorMiddleware);
