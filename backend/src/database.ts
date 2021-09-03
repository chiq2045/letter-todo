import { MongoClient } from 'mongodb';

const { DB_PREFIX: prefix, DB_USER: user, DB_PASS: password, DB_NAME: name, DB_OPTIONS: options } = process.env;

const db = async () => {
  const client = new MongoClient(`${prefix}${user}:${encodeURIComponent(password)}@${name}${options}`);
  await client.connect();
  return client.db();
};

export { db };
