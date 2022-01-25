import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Box,
  Pressable,
  VStack,
  Text,
  HStack,
  Divider,
  Icon,
} from 'native-base';
import { useMe, User } from 'components-app-histrix';

import { HomeScreen } from './Screen/Home';
import { LoginScreen } from './Screen/Login';
const Drawer = createDrawerNavigator();

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (
  props,
): JSX.Element => {
  const { Me } = useMe();
  return (
    <DrawerContentScrollView {...props}>
      <VStack space="6" my="2" mx="1">
        <Box px="4">
          <User />
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name, index) => (
              <Pressable
                px="5"
                py="3"
                rounded="md"
                key={index}
                bg={
                  index === props.state.index
                    ? 'rgba(6, 182, 212, 0.1)'
                    : 'transparent'
                }
                onPress={() => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    color={
                      index === props.state.index ? 'primary.500' : 'gray.500'
                    }
                    size="5"
                    as={<MaterialIcons name="home" />}
                  />
                  <Text
                    fontWeight="500"
                    color={
                      index === props.state.index ? 'primary.500' : 'gray.700'
                    }
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
          {Me ? (
            <VStack space="5">
              <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
                Labels
              </Text>
              <VStack space="3">
                <Pressable px="5" py="3">
                  <HStack space="7" alignItems="center">
                    <Icon
                      color="gray.500"
                      size="5"
                      as={<MaterialIcons name="bookmark" />}
                    />
                    <Text color="gray.700" fontWeight="500">
                      Family
                    </Text>
                  </HStack>
                </Pressable>
                <Pressable px="5" py="2">
                  <HStack space="7" alignItems="center">
                    <Icon
                      color="gray.500"
                      size="5"
                      as={<MaterialIcons name="bookmark" />}
                    />
                    <Text color="gray.700" fontWeight="500">
                      Friends
                    </Text>
                  </HStack>
                </Pressable>
                <Pressable px="5" py="3">
                  <HStack space="7" alignItems="center">
                    <Icon
                      color="gray.500"
                      size="5"
                      as={<MaterialIcons name="bookmark" />}
                    />
                    <Text fontWeight="500" color="gray.700">
                      Work
                    </Text>
                  </HStack>
                </Pressable>
              </VStack>
            </VStack>
          ) : null}
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
};
const MyDrawer: React.FC = (): JSX.Element => {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    </Box>
  );
};
export const Navigations: React.FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MyDrawer />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};
