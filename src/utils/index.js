export class Responser {
  res;
  constructor(res) {
    this.res = res;
  }

  response(statusCode, data) {
    this.res.status(statusCode, data);
  }
}
