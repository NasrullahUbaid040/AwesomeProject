import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';
import {hp, wp} from './utils';

// const createStyles = theme => {
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.white,
    height: hp(10),
    width: '100%',
    borderBottomRightRadius: wp(10),
    borderBottomLeftRadius: wp(10),
  },
  innerHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '50%',
    alignItems: 'center',
    marginHorizontal: wp(8),
  },
  titleText: {
    fontWeight: '700',
    fontSize: wp(7),
  },
});
//   return styles;
// };
export default createStyles;
