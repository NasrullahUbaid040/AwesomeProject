import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TextField = ({children, style}) => {
  return (
    <Text style={style} allowFontScaling={false} >
      {children}
    </Text>
  );
};



 
export default TextField;
