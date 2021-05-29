import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import OtpLogin from './src/screens/OtpScreen'
import Header from './src/components/Header';
import { colors } from './src/common/colors';
import { SCREENS } from './src/constants';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
          },
          headerLeft: null,
          headerTitle: (props) => <Header {...props} />,
          cardStyle: { backgroundColor: colors.WHITE },
        }}>
        <Stack.Screen
          name={SCREENS.LOGIN}
          component={Login}
          options={{ title: SCREENS.LOGIN, header: () => null }}
        />
        <Stack.Screen
          name={SCREENS.OTP}
          component={OtpLogin}
          options={{ title: SCREENS.OTP, header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}