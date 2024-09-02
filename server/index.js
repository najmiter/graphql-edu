import dotenv from 'dotenv';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import schema from './schema/schema.js';
import connectDB from './config/db.js';

dotenv.config();
const port = process.env.PORT || 8000;
const app = express();
connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV == 'development',
  })
);

app.listen(port, () => console.log('Server running on port', port));
