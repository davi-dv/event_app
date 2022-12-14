import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IEventInfo from '../../interfaces/EventInfo';
import {Store} from '../Store/Store';
import {EventDetails} from '../EventDetails';
import { Purchase } from '../Purchase';
const Stack = createNativeStackNavigator();

export const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Store"
        component={Store}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="EventDetails"
        component={EventDetails}
        options={({route}) => ({title: (route?.params as IEventInfo)?.nome})}
      />

      <Stack.Screen
        name="purchase"
        component={Purchase}
        options={({route}) => ({title: (route?.params as IEventInfo)?.nome})}
      />
    </Stack.Navigator>
  );
};
