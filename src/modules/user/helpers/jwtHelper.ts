import * as jwt from 'jsonwebtoken';

export class JwtHelper {
  static generateJwt(
    payload: string,
    options: jwt.SignOptions
  ) {
    return jwt.sign(payload, process.env.JWT_SECRET!, {...options});
  }

  static decodeJwt(
    token: string
  ) {
    return jwt.verify(token, process.env.JWT_SECRET!);
  }
}