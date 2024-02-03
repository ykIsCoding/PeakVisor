import express from 'express';

const app = express();

import homeRouter from '@routes/pages/home';
import trailsRouter from '@routes/pages/trails';
import aboutRouter from '@routes/pages/about';
import loginRouter from '@routes/pages/login';
import rootRouter from '@routes/pages/root';
import signupRouter from '@routes/pages/signup';

app.use(express.json())
app.use(express.urlencoded( { extended: true } ))
app.use("/", rootRouter);
app.use("/home", homeRouter);
app.use("/trails", trailsRouter);
app.use("/about", aboutRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);

app.use((req, res) => {
    console.error(`Cannot find ${req.originalUrl}`);
    res.status(404).send('Page not found');
  });

export default app;