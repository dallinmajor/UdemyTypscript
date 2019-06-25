import express from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import './controllers/loginController';
import { AppRouter } from './appRouter';

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['laskdjf']}));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
