import { combineReducers, createStore } from "redux";

//ACTIONS

export function setLoading(opened) {
  return {
    type: "SET_LOADING",
    payload: opened,
  };
}

//REDUCERS

function loadingReducer(state = false, action) {
  switch (action.type) {
    case "SET_LOADING":
      state = action.payload;
    default:
      return state;
  }
}

//STORE

const reducers = combineReducers({
  loadingReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "CLEAR_STORE") {
    return reducers(undefined, action);
  }
  return reducers(state, action);
};

const store = createStore(rootReducer);

export default store;
