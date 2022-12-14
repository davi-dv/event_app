import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../pages/Home/index';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {SignUp} from '../pages/SignUp';
import {SignIn} from '../pages/SignIn';
import {useAuth} from '../contexts/auth';
import {Participant} from '../pages/Participant';
import {Ingressos} from '../pages/Ingressos';
const Tab = createBottomTabNavigator();
const AppRoutes: React.FC = () => {
  const {loggedUser} = useAuth();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'home';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Favoritos') {
            iconName = 'heart';
          } else if (route.name === 'Ingressos') {
            iconName = 'ticket';
          } else if (route.name === 'Participando') {
            iconName = 'trophy';
          } else {
            iconName = 'user';
          }

          return (
            <FontAwesomeIcon
              icon={iconName as IconProp}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: '#9A6AFF',
        tabBarInactiveTintColor: 'gray'
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Ingressos" component={Ingressos} />
      <Tab.Screen
        name={loggedUser ? 'Perfil' : 'Login'}
        component={loggedUser ? SignUp : SignIn}
      />
      <Tab.Screen name={'Cadastro'} component={SignUp} />
      <Tab.Screen name="Participando" component={Participant} />
    </Tab.Navigator>
  );
};

export default AppRoutes;
