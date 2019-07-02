import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import './controllers/RootController';
import { AppRouter } from './appRouter';

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['laskdjf']}));
app.use(AppRouter.getInstance());

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
