import React from 'react';

import {library} from '@fortawesome/fontawesome-svg-core';
// import Input from './src/components/Input/index';
import {View} from 'react-native';
// route
import {NavigationContainer} from '@react-navigation/native';
import AuthProvider from './src/contexts/auth';
import {QueryClient, QueryClientProvider} from 'react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// pages

import {
  faEnvelope,
  faLock,
  faExclamationCircle,
  faHome,
  faGamepad,
  faHeart,
  faSearch,
  faInfoCircle,
  faKey,
  faUser,
  faTicket,
  faChevronDown,
  faCreditCard,
  faTimesCircle,
  faCalendar,
  faCircleDollarToSlot,
  faMoneyBill,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faEnvelope,
  faLock,
  faExclamationCircle,
  faHome,
  faGamepad,
  faHeart,
  faSearch,
  faInfoCircle,
  faKey,
  faUser,
  faTicket,
  faChevronDown,
  faCreditCard,
  faCalendar,
  faMoneyBill,
  faTrophy
);
import Routes from './src/routes/index';
import {NativeBaseProvider} from 'native-base';

const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6'
  }
};
const defaultOptions = {
  queries: {
    refetchOnWindowFocus: false
  }
};
const queryClient = new QueryClient({defaultOptions});

// const theme = extendTheme({colors: newColorTheme});

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <NativeBaseProvider>
            <AuthProvider>
              <View style={{flex: 1, backgroundColor: '#10163a'}}>
                <Routes />
              </View>
            </AuthProvider>
          </NativeBaseProvider>
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
