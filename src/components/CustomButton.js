import React from 'react';
import { TouchableOpacity,Text} from 'react-native';
import {wp, hp} from '../utils/index'
// import Text from '../components/CustomText'
function CustomButton({onPress, title, style}) {
  return (
    <>
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={{fontSize:wp(3), color:"#FFF", padding:10}}>{title}</Text>
    </TouchableOpacity>
      
    </>
  );
}

export default CustomButton;
