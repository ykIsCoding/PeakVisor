import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();

import homeRouter from '@routes/pages/home';
import trailsRouter from '@routes/pages/trails';
import aboutRouter from '@routes/pages/about';
import loginRouter from '@routes/pages/login';
import rootRouter from '@routes/pages/root';
import signupRouter from '@routes/pages/signup';
import stravaRouter from '@routes/api/stravaRouter'
 
app.use(cors());
app.use(express.json())
app.use(express.urlencoded( { extended: true } ))
app.use("/", rootRouter);
app.use("/home", homeRouter);
app.use("/trails", trailsRouter);
app.use("/about", aboutRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/strava", stravaRouter);

app.use((req, res) => {
    console.error(`Cannot find ${req.originalUrl}`);
    res.status(404).send('Page not found');
  });

export default app;