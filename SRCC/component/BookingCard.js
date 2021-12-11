import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {color} from 'react-native-elements/dist/helpers';
import {colors} from '../constants';
import {wp, hp} from '../utils';
import Text from '../component/CustomText';
// import Text from '../components/CustomText';
// import Calendar from '../../assets/icons/Calendar.svg';
// import Clock from '../../assets/icons/Clock.svg';
const dummyTag = ['Hair Styles', 'Beard'];
const BookingCard = props => {
  const {service, shopName, time, date, username, status} = props.data;

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          //   source={require('../../assets/images/BarberShop.png')}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={styles.img}
          resizeMode="cover"
        />
        <View
          style={{
            width: '70%',
            marginLeft: 10,
            justifyContent: 'space-evenly',
          }}>
          <Text style={{color: 'green', fontWeight: '600'}}>{shopName}</Text>
          <Text>{service}</Text>

          <View style={{flexDirection: 'row'}}>
            {dummyTag.map(item => (
              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  padding: 5,
                  borderColor: colors.gray,
                  marginRight: 5,
                }}>
                <Text>{item}</Text>
              </View>
            ))}
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <Calendar /> */}
            <Text> {date}</Text>
            {/* <Clock /> */}
            <Text> {time}</Text>
          </View>
        </View>
      </View>
      <View style={styles.seprator} />
      <View style={styles.bottomView}>
        <View
          style={{
            height: wp(10),
            width: '60%',
            // backgroundColor: 'red',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
          }}>
          <Image
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            style={{height: wp(8), width: wp(8), borderRadius: 100}}
            resizeMode="cover"
          />
          <Text> {username}</Text>
        </View>
        <View
          style={{
            height: wp(10),
            width: '40%',
            justifyContent: 'center',
            // backgroundColor: 'grey',
          }}>
          <View
            style={[
              styles.statusBtn,
              {
                backgroundColor:
                  status === 'Active'
                    ? 'gray'
                    : status === 'Upcoming'
                    ? 'yellow'
                    : status == 'Completed'
                    ? 'green'
                    : '#FFF',
              },
            ]}>
            <Text>{status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  mainContainer: {
    width: wp(90),
    backgroundColor: colors.white,
    // backgroundColor: colors.gray,

    alignSelf: 'center',
    marginVertical: wp(2),
    borderRadius: 20,
  },
  img: {
    height: wp(30),
    width: wp(30),
    borderRadius: 10,
  },
  shop: {},
  seprator: {
    borderBottomColor: colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '95%',
    alignSelf: 'center',
  },
  bottomView: {
    marginVertical: 10,
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: '95%',
    alignSelf: 'center',
  },
  statusBtn: {
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
  },
});
