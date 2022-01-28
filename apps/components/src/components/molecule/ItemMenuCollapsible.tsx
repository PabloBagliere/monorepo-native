import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Box, Collapse, HStack, Icon, Pressable, Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';

import { infoParse } from '../../Interfaces/navigation/infoParse';
import { ParamsUse } from '../../Interfaces/navigation/ParamsUse';

interface props {
  array: infoParse;
  level: number;
  Wrap: FC<ParamsUse>;
}

export const ItemMenuCollapsible: FC<props> = ({
  array,
  Wrap,
  level,
}): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <Box>
      {array.chils ? (
        <>
          <Pressable onPress={() => setIsCollapsed(!isCollapsed)}>
            <HStack
              justifyContent="space-between"
              alignItems="center"
              pl="8"
              px="4"
              py="2.5"
            >
              <Box
                flexShrink="1"
                _text={{
                  fontWeight: '300',
                  fontSize: 'sm',
                }}
              >
                {array.title}
              </Box>
              <RotatingView isCollapsed={isCollapsed}>
                <Icon
                  as={MaterialIcons}
                  name="expand-more"
                  color="coolGray.400"
                />
              </RotatingView>
            </HStack>
          </Pressable>
          <Collapse isOpen={!isCollapsed}>
            {array.chils.map((data, index) => (
              <ItemMenuCollapsible
                array={data}
                level={level + 1}
                key={index}
                Wrap={Wrap}
              />
            ))}
          </Collapse>
        </>
      ) : (
        <Wrap title={array.title} query={array.uri}>
          <Box pl="8" px="4" py="2">
            <Text fontWeight="300" fontSize="sm">
              {array.title}
            </Text>
          </Box>
        </Wrap>
      )}
    </Box>
  );
};

interface propsRotating {
  isCollapsed: boolean;
}

const RotatingView: FC<propsRotating> = ({
  isCollapsed,
  children,
}): JSX.Element => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const rotateRight = useCallback(() => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [rotateAnim]);

  const rotateLeft = useCallback(() => {
    Animated.timing(rotateAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [rotateAnim]);

  useEffect(() => {
    if (isCollapsed === true) {
      rotateLeft();
    } else {
      rotateRight();
    }
  }, [isCollapsed, rotateLeft, rotateRight]);

  return (
    <Animated.View
      style={[
        {
          transform: [
            {
              rotate: rotateAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '180deg'],
              }),
            },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

// export const ItemMenuCollapsible = memo(Component);
