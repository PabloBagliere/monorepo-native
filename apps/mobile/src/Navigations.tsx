import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Box } from 'native-base';

import { HomeScreen } from './Screen/Home';
import { LoginScreen } from './Screen/Login';
import { AuthScreen } from './Screen/Auth';
import { CustomDrawerContent } from './component/Drawer';

const Drawer = createDrawerNavigator();
const MyDrawer: React.FC = (): JSX.Element => {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Auth" component={AuthScreen} />
      </Drawer.Navigator>
    </Box>
  );
};
export const Navigations: React.FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};
