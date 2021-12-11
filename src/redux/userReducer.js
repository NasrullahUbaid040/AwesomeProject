import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    age: '',
    cart: [],
  },
  reducers: {
    userDataReq: (user, action) => {
      console.log('user.. ..>>', action.payload.email);
      user.email = action.payload.email;
    },
    addCart: (user, action) => {
      let tempArr = user.cart;
      tempArr.push(action.payload);
      user.cart = tempArr;
    },
    incrementCart: (user, action) => {
      console.log('action...>', action.payload);
      let index = user.cart.findIndex(obj => obj.id === action.payload);
      console.log('index..>', index);

      let tempArr = user.cart;
      tempArr[index].qty = tempArr[index].qty + 1;
      user.cart = tempArr;
    },
    decrementCart: (user, action) => {
      let index = user.cart.findIndex(obj => obj.id === action.payload);
      console.log('myIndex...>', index);
      let tempArr = user.cart;
      tempArr[index].qty = tempArr[index].qty - 1;
      user.cart = tempArr;
    },
    deleteCart: (user, action) => {
      console.log('action...>', action.payload);
      let index = user.cart.findIndex(obj => obj.id === action.payload);
      console.log(index);
      let tempArr = user.cart;
      tempArr = tempArr.filter(item => item != tempArr[index]);
      user.cart = tempArr;
    },
  },
});

export const {userDataReq, addCart, incrementCart, decrementCart, deleteCart} =
  slice.actions;
export default slice.reducer;
