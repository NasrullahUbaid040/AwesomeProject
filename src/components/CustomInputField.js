import React from 'react';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {hp, wp} from '../utils/index';

const CustomInputField = ({
  placeholder,
  onChangeText,
  onChange,
  value,
  LeftIconName,
  RightIconName,
  onBlur,
  secureTextEntry,
  keyboardType,
  editable,
  onFocus,
  multiline,
  maxLength,
  inputStyle,
  
}) => {
  return (
    <Input
      leftIcon={<Icon name={LeftIconName} size={hp(3)} color="black" />}
      rightIcon={<Icon name={RightIconName} size={hp(3)} color="black" />}
      secureTextEntry={secureTextEntry}
      editable={editable}
      multiline={multiline}
      placeholder={placeholder}
      style={[inputStyle, {color: 'black'}]}
      maxLength={maxLength}
      onChangeText={onChangeText}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      keyboardType={keyboardType}
    />
  );
};

export default CustomInputField;
