import * as React from 'react';
import {View, StyleSheet, Pressable, FlatList} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import CardComponent from '../../../components/CardComponent';
import Text from '../../../components/CustomText';
import {wp, hp} from '../../../utils/index';
import styles from './styles';
const CartView = props => {
  const myCart = useSelector(state => state?.entities?.user.cart);
  // console.log('....>', myCart);
  const total = myCart
    .map(item => item.price)
    .reduce((prev, curr) => prev + curr, 0);

  const myTotal = () => {
    let a = 0;
    let x = myCart.map(item => item.price * item.qty);
    console.log('x', ...x);
    return x.reduce((prev, curr) => prev + curr, 0);
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Pressable onPress={() => props.navigation.goBack()}>
          <Icons name="arrow-back-outline" size={30} />
        </Pressable>
        <Text style={{fontSize: wp(5)}}> Cart</Text>
      </View>

      <View style={styles.countText}>
        <Text style={{fontSize: wp(4)}}>
          Cart Items({myCart.length}) | Total payable {myTotal()}
        </Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Text>No Products yet</Text>
          </View>
        )}
        data={myCart}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <>
              <CardComponent data={item} index={index} />
            </>
          );
        }}
      />
    </View>
  );
};

export default CartView;
