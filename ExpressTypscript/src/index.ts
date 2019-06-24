import express from 'express';
import BodyParser from 'body-parser';
import { router } from './routes/loginRoutes';
import bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
