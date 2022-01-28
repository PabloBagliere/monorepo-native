import { DrawerScreenProps } from '@react-navigation/drawer';

export type Router = {
  Home: undefined;
  Login: undefined;
  Auth: {
    query: string;
    title: string;
  };
};

export type propsHome = DrawerScreenProps<Router, 'Home'>;
export type propsLogin = DrawerScreenProps<Router, 'Login'>;
export type propsAuth = DrawerScreenProps<Router, 'Auth'>;
