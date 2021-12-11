import {StyleSheet} from 'react-native';
import {wp, hp} from '../../../utils/index';

const styles = StyleSheet.create({
  header: {
    height: hp(8),
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },

  viewBtn: {
    backgroundColor: 'orange',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  goBtn: {
    backgroundColor: 'red',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 1,
  },
  input: {
    height: hp(7),
    borderWidth: 1.5,
    width: '90%',
    alignSelf: 'center',
    marginVertical: wp(5),
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
