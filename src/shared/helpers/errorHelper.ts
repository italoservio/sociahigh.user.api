import {Response} from 'express';

export class ErrorHelper {
  static badRequest(message: string, res?: Response) {
    const errorObj = {
      status: {
        code: 400,
        message: 'Bad request'
      },
      message
    };
    if (!!res) res.status(400).json(errorObj);
    else return errorObj;
  }

  static unauthorized(message: string, res?: Response) {
    const errorObj = {
      status: {
        code: 401,
        message: 'Unauthorized'
      },
      message
    };
    if (!!res) res.status(401).json(errorObj);
    else return errorObj;
  }

  static forbidden(message: string, res?: Response) {
    const errorObj = {
      status: {
        code: 403,
        message: 'Forbidden'
      },
      message
    };
    if (!!res) res.status(403).json(errorObj);
    else return errorObj;
  }

  static notFound(message: string, res?: Response) {
    const errorObj = {
      status: {
        code: 404,
        message: 'Not found'
      },
      message
    };
    if (!!res) res.status(404).json(errorObj);
    else return errorObj;
  }

  static badGateway(message: string, res?: Response) {
    const errorObj = {
      status: {
        code: 502,
        message: 'Bad gateway'
      },
      message
    };
    if (!!res) res.status(502).json(errorObj);
    else return errorObj;
  }
}
