const { createStore, combineReducers, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const { composeWithDevTools } = require("redux-devtools-extension");
const {
  productListReducer,
  productDetailsReducer,
} = require("./reducers/productReducers.js");

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
