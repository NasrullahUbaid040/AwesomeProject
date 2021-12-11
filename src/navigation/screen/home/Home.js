import React, {useState} from 'react';
import {View, FlatList, TextInput} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import CardComponent from '../../../components/CardComponent';
import {useSelector} from 'react-redux';
import styles from './styles';
import Text from '../../../components/CustomText';
import {wp} from '../../../utils';
const DummyData = [
  {
    img: 'https://chandnichowk.pk/wp-content/uploads/2020/09/Buffet-Landscape.jpg',
    name: 'abc Data 1',
    price: 32,
    id: 1,
  },
  {
    img: 'https://chandnichowk.pk/wp-content/uploads/2020/09/Buffet-Landscape.jpg',
    name: 'abc Data 2',
    price: 132,
    id: 2,
  },
  {
    img: 'https://chandnichowk.pk/wp-content/uploads/2020/09/Buffet-Landscape.jpg',
    name: 'cc Data 3',
    price: 32,
    id: 3,
  },
  {
    img: 'https://chandnichowk.pk/wp-content/uploads/2020/09/Buffet-Landscape.jpg',
    name: 'qwertt Data 4',
    price: 92,
    id: 4,
  },
  {
    img: 'https://chandnichowk.pk/wp-content/uploads/2020/09/Buffet-Landscape.jpg',
    name: 'opo Data 5',
    price: 92,
    id: 5,
  },
  {
    img: 'https://chandnichowk.pk/wp-content/uploads/2020/09/Buffet-Landscape.jpg',
    name: 'lah Data 6',
    price: 332,
    id: 6,
  },
  {
    img: 'https://chandnichowk.pk/wp-content/uploads/2020/09/Buffet-Landscape.jpg',
    name: 'Simple Data 7',
    price: 82,
    id: 7,
  },
  {
    img: 'https://chandnichowk.pk/wp-content/uploads/2020/09/Buffet-Landscape.jpg',
    name: 'Sajle Data 1',
    price: 92,
    id: 8,
  },
];
const home = props => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(DummyData);
  const myCart = useSelector(state => state?.entities?.user.cart);

  const searchFilterFunction = text => {
    if (text) {
      const newData = data.filter(function (item) {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);
      setSearch(text);
    } else {
      setData(DummyData);
      setSearch(text);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={{fontSize: wp(5)}}>Hungry?</Text>
        <CustomButton
          onPress={() => props.navigation.navigate('CartView')}
          title="VIEW BASKET"
          style={styles.viewBtn}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          value={search}
          onChangeText={e => {
            setSearch(e);
            searchFilterFunction(e);
          }}
          placeholder="What are you craving for?"
        />
        <CustomButton
          onPress={() =>
            console.log(DummyData.filter(obj => obj.name === 'abc Data'))
          }
          title="GO"
          style={styles.goBtn}
        />
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <>
              <CardComponent data={item} cart={true} />
            </>
          );
        }}
      />
    </View>
  );
};
export default home;

// const styles = StyleSheet.create({
//   header: {
//     height: hp(8),
//     backgroundColor: '#FFF',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: wp(5),
//   },

//   viewBtn: {
//     backgroundColor: 'orange',
//     height: '75%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 10,
//   },
//   goBtn: {
//     backgroundColor: 'red',
//     borderTopRightRadius: 10,
//     borderBottomRightRadius: 10,
//     width: '15%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     height: hp(7),
//     borderWidth: 1.5,
//     width: '90%',
//     alignSelf: 'center',
//     marginVertical: wp(5),
//     borderRadius: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
// });
