import React, {useState, createContext, useContext} from 'react';
import IAuthProps from '../interfaces/IAuthProps';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext = createContext<IAuthProps>({} as IAuthProps);

const AuthProvider: React.FC = ({children}: any) => {
  const [loggedUser, setLoggedUser] = useState<any>();
  const getUser = async () => {
    const user = await AsyncStorage.getItem('@api-data');
    if (user) {
      setLoggedUser(JSON.parse(user));
    }
  };
  const setUserInStorage = async (res: any) => {
    console.log(res);
    await AsyncStorage.setItem('@api-data', JSON.stringify(res));
    setLoggedUser(res);
  };
  const deleteUserFromStorage = async () => {
    await AsyncStorage.removeItem('@api-data');
    setLoggedUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        getUser,
        loggedUser,
        setLoggedUser,
        setUserInStorage,
        deleteUserFromStorage
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('useAuth deve ser usado dentro de um AuthProvider.');
  }

  return context;
}

export default AuthProvider;
