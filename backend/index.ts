import { config } from 'dotenv';
config();

import { app } from './src/app'; // eslint-disable-line

const { PORT: port = 3000 } = process.env;

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
