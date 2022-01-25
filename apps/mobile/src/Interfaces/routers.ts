import { DrawerScreenProps } from '@react-navigation/drawer';

export type Router = {
  Home: undefined;
  Login: undefined;
};

export type propsHome = DrawerScreenProps<Router, 'Home'>;
export type propsLogin = DrawerScreenProps<Router, 'Login'>;
