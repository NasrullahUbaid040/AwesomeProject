import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {wp} from '../utils';
import CustomButton from './CustomButton';
import {useSelector, useDispatch} from 'react-redux';
import {
  addCart,
  incrementCart,
  decrementCart,
  deleteCart,
} from '../redux/userReducer';

const CardComponent = props => {
  const {img, name, price, id, qty} = props.data;

  const dispatch = useDispatch();
  const myCart = useSelector(state => state?.entities?.user.cart);
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          width: '70%',
          flexDirection: 'row',
        }}>
        <Image source={{uri: img}} style={styles.img} resizeMode="cover" />
        <View style={{padding: 10}}>
          <Text>{name}</Text>
          <Text>{!props.cart ? price * qty : price}</Text>
        </View>
      </View>

      <View style={styles.cardRight}>
        {props.cart ? (
          <CustomButton
            onPress={() => {
              let myData = {
                id: props.data.id,
                name: props.data.name,
                price: props.data.price,
                img: props.data.img,
                qty: 1,
              };
              {
                myCart.some(item => item.id === id)
                  ? console.log('Added in cart')
                  : dispatch(addCart(myData));
              }
            }}
            title={'Add to cart'}
            style={styles.adBtn}
          />
        ) : (
          <View style={styles.cartQty}>
            <CustomButton
              onPress={() => {
                qty > 1
                  ? dispatch(decrementCart(id))
                  : dispatch(deleteCart(id));
              }}
              title="-"
              style={styles.minusBtn}
            />
            <Text>{qty}</Text>
            <CustomButton
              onPress={() => dispatch(incrementCart(id))}
              title="+"
              style={styles.plusBtn}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  mainContainer: {
    width: wp(90),
    alignSelf: 'center',
    flexDirection: 'row',
    borderWidth: 0.1,
    height: wp(30),
    marginBottom: 10,
  },
  adBtn: {
    backgroundColor: 'red',
    alignItems: 'center',
  },
  minusBtn: {
    backgroundColor: 'orange',
  },
  plusBtn: {
    backgroundColor: 'green',
  },
  img: {
    width: wp(25),
    height: wp(25),
  },
  cartQty: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cardRight: {
    width: '30%',
    height: wp(25),
    justifyContent: 'center',
  },
});
