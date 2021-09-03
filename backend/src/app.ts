import Koa from 'koa';
import logger from 'koa-logger';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import cors from '@koa/cors';
import { schema } from './schema';
import { resolvers as rootValue } from './resolvers';
import { db } from './database';

const app = new Koa();
const context = async () => await db();

app.use(logger());
app.use(cors());
app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue,
      graphiql: true,
      context
    })
  )
);

export { app };
