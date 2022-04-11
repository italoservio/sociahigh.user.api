
import {Request, Response} from 'express';
import {USER_DB_URI} from '../../../config/constants';
import {Database} from '../../../config/database';
import {User} from '../collection/userModel';

export class CreateUserService {
  static async handler(req: Request, res: Response) {
    try {
      const db = new Database(USER_DB_URI!);
      db.connect();
      const doc = new User({
        firstName: 'Ítalo',
        lastName: 'Sérvio',
        email: 'servioitalo@gmail.com'
      })
      await doc.save();
      db.disconnect();
    } catch (err) {
      console.log(err);
    }
    res.send();
  }
}
