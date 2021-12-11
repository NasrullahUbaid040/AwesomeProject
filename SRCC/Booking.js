import React from 'react';
import {StyleSheet, Image, Text, View, ScrollView} from 'react-native';

const Booking = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View>
          <Image
            style={{height: 300, width: '100%'}}
            source={{
              uri: 'https://carspiritpk.com/wp-content/uploads/BYD-F3DM-e1638590453285-850x478.jpg',
            }}
          />

          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: 'orange',
              marginTop: 50,
              position: 'absolute',
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: 'red',
            //   position: 'absolute',
            marginTop: -50,
            height: 1000,
            width: '100%',
            //   marginTop: 250,
            borderRadius: 50,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({});
