import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import connectDB from './configs/database.js';
import routerUserapi from './router/userRouter.js';
import authMiddleware from './middleware/authMiddleware.js'
import routerAuthapi from './router/authRouter.js';
import routerArticleapi from './router/articleRouter.js';
import routerCommentapi from './router/commentRouter.js';
import routerCategoryApi from './router/categoryRouter.js';
const app = express();
// Connect to database
connectDB();
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
//middleware
app.use(authMiddleware)
// Route
app.use('/api/v1/users', routerUserapi);
app.use("/api/v1", routerAuthapi)
app.use("/api/v1/article", routerArticleapi)
app.use("/api/v1/comment", routerCommentapi)
app.use("/api/v1/category", routerCategoryApi)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app