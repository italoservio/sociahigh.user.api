import mongoose from 'mongoose';

export class Database {
  instance: mongoose.Mongoose;
  databaseUri: string;

  constructor(databaseUri: string) {
    this.databaseUri = databaseUri;
  }

  public async connect() {
    try {
      this.instance = await mongoose.connect(this.databaseUri);
    } catch (error) {
      throw new Error('Database connection failed');
    }
  }

  public async disconnect() {
    this.instance.connection.close();
  }
}
