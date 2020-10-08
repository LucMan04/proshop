const { createStore, combineReducers, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const { composeWithDevTools } = require("redux-devtools-extension");

const reducer = combineReducers({});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
