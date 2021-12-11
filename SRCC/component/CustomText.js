import React from 'react';
import {StyleSheet, Text} from 'react-native';
// import {useThemeAwareObject} from './theme';

const TextField = ({children, style}) => {
  //   const createStyles = theme => {
  const styles = StyleSheet.create({
    textStyle: {
      //   color: theme.color.textBlue,
      color: '000',
    },
  });
  // return themeStyles;
  //   };
  //   const styles = useThemeAwareObject(createStyles);
  return (
    <Text style={[styles.textStyle, style]} allowFontScaling={false}>
      {children}
    </Text>
  );
};

export default TextField;
