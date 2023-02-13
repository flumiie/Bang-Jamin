import React from 'react';
import { Dimensions, Pressable, StyleSheet, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

import { BoldText } from '../components';
import { Color } from './Color';

import BackIcon from '../../assets/images/back.svg';
import { useNavigation } from '@react-navigation/native';
import { MainNavigationProp } from '../../router/routerTypes';

export interface ToolbarProps {
  title?: string;
  onLeftComponentPress?: () => void;
  rightComponent?: React.ReactElement | any;
  leftComponent?: React.ReactElement | any;
}

const Toolbar = ({
  title,
  onLeftComponentPress,
  leftComponent,
  rightComponent,
}: ToolbarProps) => {
  const navigation = useNavigation<MainNavigationProp>();
  const insets = useSafeAreaInsets();

  const leftComponentRenderer = () => {
    if (leftComponent) {
      return leftComponent;
    }
    return <SvgXml xml={BackIcon} width={24} />;
  };

  return (
    <View style={styles.toolbar} accessibilityLabel="toolbar">
      <View
        style={{
          marginTop: insets.top,
          ...styles.toolbarSub,
        }}>
        <ScreenTitle>{title}</ScreenTitle>
        <Pressable
          onPress={() => {
            if (onLeftComponentPress) {
              onLeftComponentPress();
            } else {
              navigation.goBack();
            }
          }}
          style={styles.leftButton}>
          {leftComponentRenderer()}
        </Pressable>
        <View style={styles.flex} />
        <View>{rightComponent && rightComponent}</View>
      </View>
    </View>
  );
};

const ScreenTitle = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: object;
}) => {
  const { width } = Dimensions.get('window');

  return (
    <View
      style={{
        ...style,
        ...styles.screenTitleContainer,
      }}>
      <BoldText
        style={{
          maxWidth: width - (80 + 24),
          ...styles.title,
        }}
        numberOfLines={1}>
        {children}
      </BoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: Color.white,
    marginBottom: 1,
  },
  toolbarSub: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: Color.white,
    justifyContent: 'space-between',
    height: 56,
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  leftButton: {
    padding: 16,
    paddingRight: 12,
    left: -16,
  },
  screenTitleContainer: {
    justifyContent: 'center',
    position: 'absolute',
    left: 52,
    right: 0,
    bottom: 0,
    top: 0,
  },
  title: {
    fontSize: 18,
  },
});

export default Toolbar;
