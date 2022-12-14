export default interface IUser {
  nome?: string;
  id?: number;
  email?: string;
  admin: boolean;
  token: string;
  iat: number;
}

export interface IContextAuth {
  setLoggedUser: () => object;
  loggedUser: () => object;
}
// {
//   "id": 7,
//   "name": "teste",
//   "email": "teste@unochapeco.edu.br",
//   "admin": false,
//   "iat": 1667157805,
//   "exp": 1667417005,
//   "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywibmFtZSI6InRlc3RlIiwiZW1haWwiOiJ0ZXN0ZUB1bm9jaGFwZWNvLmVkdS5iciIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjY3MTU3ODA1LCJleHAiOjE2Njc0MTcwMDV9.OFjnuYVK_vcO_81Wkkkxfk9alAZegGLEWcZnfGGXz_g"
// }
