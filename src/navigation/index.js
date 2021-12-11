import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {createStackNavigator} from '@react-navigation/stack';
// import {Button} from 'react-native-elements/dist/buttons/Button';

function Home1(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home1!</Text>
      <Button
        title="go next"
        onPress={() => props.navigation.navigate('Home2')}
      />
    </View>
  );
}
function Home2(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home2</Text>
      <Button title="go back" onPress={() => props.navigation.goBack()} />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}
function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}
function Notification(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notification!</Text>
      <Button
        title="go next"
        onPress={() => props.navigation.navigate('PostNotification')}
      />
    </View>
  );
}
function PostNotification() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>PostNotification!</Text>
    </View>
  );
}

function NotificationStack() {
  return (
    <Stack.Navigator initialRouteName="Notification" headerMode="none">
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="PostNotification" component={PostNotification} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'red',
      }}>
      <Tab.Screen
        name="Home"
        component={Home1}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationStack}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <>
                <View
                  style={{
                    height: wp(15),
                    width: wp(15),
                    borderRadius: wp(30),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    backgroundColor: 'green',
                    position: 'absolute',
                    bottom: 0,
                  }}>
                  <MaterialCommunityIcons
                    name="bell"
                    color={color}
                    size={size}
                  />
                </View>
              </>
            ) : (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="circle" color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home2"
          component={Home2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NotificationStack"
          component={NotificationStack}
          options={{headerShown: false}}
        />

        {/* <MyTabs /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
