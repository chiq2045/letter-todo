import { Db } from 'mongodb';

export const resolvers = {
  letters: async (_: any, context: any) => {
    const db: Db = await context();
    return db.collection('letters').find().toArray();
  },
  letter: async ({ id }: { id: number }, context: any) => {
    const db: Db = await context();
    return db.collection('letters').findOne({ id });
  },
  editLetter: async (
    {
      id,
      title,
      content,
      date,
      open = false
    }: {
      id: number;
      title: string;
      content: string;
      date: string;
      open: boolean;
    },
    context: any
  ) => {
    const db: Db = await context();
    return db
      .collection('letters')
      .findOneAndUpdate(
        { id },
        { $set: { title, content, date, open } },
        { returnDocument: 'after' }
      )
      .then((v) => v.value);
  },
  addLetter: async (
    {
      title,
      content,
      date,
      open = false
    }: { title: string; content: string; date: string; open?: boolean },
    context: any
  ) => {
    const db: Db = await context();
    let id: number;
    await db
      .collection('letters')
      .find()
      .toArray()
      .then((v) => (id = v.length + 1));
    return db.collection('letters').insertOne({
      id,
      title,
      content,
      date,
      open
    });
  },
  openLetter: async (
    { id, open = true }: { id: number; open?: boolean },
    context: any
  ) => {
    const db: Db = await context();
    return db
      .collection('letters')
      .findOneAndUpdate({ id }, { $set: { open } }, { returnDocument: 'after' })
      .then((v) => v.value);
  }
};
