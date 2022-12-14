import IUser from './IUser';
export default interface IAuthProps {
  loggedUser?: IUser;
  setLoggedUser?: any;
  getUser: () => Object;
  setUserInStorage: any;
  deleteUserFromStorage: any;
}
