import 'dotenv/config'
import express, {Express} from 'express';
import routes from './routes';

const app: Express = express();
const port = process.env.APP_PORT || 3000;

app.use('/', routes)
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});

export {app}
