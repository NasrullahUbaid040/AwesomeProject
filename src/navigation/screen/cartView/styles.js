import {StyleSheet} from 'react-native';
import {wp,hp} from '../../../utils/index'

const styles = StyleSheet.create({
    header: {
      height: hp(8),
      backgroundColor: '#FFF',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp(5),
    },
  
    countText: {
      backgroundColor: 'orange',
      width: '90%',
      height: hp(6),
      borderRadius: 10,
      alignSelf: 'center',
      marginVertical: wp(5),
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    empty:{
      alignItems:"center"
    }
  });
  export default styles