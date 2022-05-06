import {AES, enc} from 'crypto-js';

export class CryptoHelper {
  static encryptString(str: string, secret: string) {
    return AES.encrypt(str, secret).toString();
  }

  static decryptString(str: string, secret: string) {
    const bytes = AES.decrypt(str, secret);
    return bytes.toString(enc.Utf8);
  }
}
