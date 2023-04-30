const itemInitialState = {
  itemsData: [],
  itemsSearchData: [],
};

const itemReducer = (state = itemInitialState, action) => {
  switch (action.type) {
    case "SAVE_ITEMS": {
      return {
        ...state,
        itemsData: action.payload,
      };
    }

    case "SEARCH_SAVE_ITEMS": {
      return {
        ...state,
        itemsSearchData: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
export default itemReducer;
