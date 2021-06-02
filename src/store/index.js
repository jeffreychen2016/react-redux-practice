import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// --------------------------
// METHOD 2: use redux toolkit
// --------------------------
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      // *** IMPORTANT ***
      // here, we can mutate the state directly while using the toolkit
      // since the toolkit behind the scence returns the brand new copy of the object
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// configureStore allows you to pass in multiple reducers
const store = configureStore({ reducer: counterSlice.reducer });

// `counterActions` will hold all functions we defined in the slice
// instead of calling `dispatch({type: ''})` with specific identifier,
// now we can call `dispatch(counterActions.decrement())`
// with this, we do not need IF checks anymore, since to method we are calling are tied
// to the method defined in the slice
export const counterActions = counterSlice.actions;
export default store;

// --------------------------
// METHOD 1: use redux only
// --------------------------
// import { createStore } from "redux";

// const initialState = { counter: 0, showCounter: true };

// // -> create reducer
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     // *** SUPER IMPORTANT ***
//     // never ever mutate state while using redux
//     // we always want to return brand new state
//     // state.counter++;

//     // again, we must return all states
//     // React overrides the state instead merge
//     // so, make sure the new state you return have all key/value pairs
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }

//   if (action.type === "INCREASE") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "DECREMENT") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === "TOGGLE") {
//     return { showCounter: !state.showCounter, counter: state.counter };
//   }

//   return state;
// };

// // -> create data store
// const store = createStore(counterReducer);

// // -> create subscribers
// // here...the components are the subscribers
// // so, we do not need to create subscriber functions here

// // -> dispatch actions
// // here...the dispatch functions will be called by the events in the components
// // such as button click
// // so, we do not need to dispatch actions here

// export default store;
