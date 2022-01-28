import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  useMe,
  useMenu,
  extractorInformationNavegation,
  User,
  ItemMenuCollapsible,
} from 'components-app-histrix';
import {
  VStack,
  Box,
  HStack,
  Icon,
  Divider,
  Text,
  Pressable,
} from 'native-base';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export const ComponentDrawer: React.FC<DrawerContentComponentProps> = (
  props,
): JSX.Element => {
  const { Me } = useMe();
  const { Menu } = useMenu();

  const list = React.useMemo(
    () => extractorInformationNavegation(Menu),
    [Menu],
  );

  return (
    <DrawerContentScrollView {...props}>
      <VStack space="6" my="2" mx="1">
        <Box px="4">
          <User />
        </Box>
        <VStack space="4">
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
          {Me && list
            ? list.map((data, index) => (
                <React.Fragment key={`fragmento-${index}`}>
                  <Divider key={`divisor-${index}`} />
                  <ItemMenuCollapsible array={data} level={0} key={index} />
                </React.Fragment>
              ))
            : null}
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
};

export const CustomDrawerContent = React.memo(ComponentDrawer);
