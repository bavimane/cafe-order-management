import axios from "axios";

export const saveSearchItems = (items) => {
  return {
    type: "SEARCH_SAVE_ITEMS",
    payload: items,
  };
};

export const saveItems = (items) => {
  return {
    type: "SAVE_ITEMS",
    payload: items,
  };
};

export const asyncGetItems = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3060/api/items")
      .then((response) => {
        dispatch(saveItems(response.data));
      })
      .catch((error) => {
        alert(error);
      });
  };
};

export const asyncGetItemsByType = (type) => {
  const body = { type: type };
  return (dispatch) => {
    axios
      .post("http://localhost:3060/api/getItemsByType", body)
      .then((response) => {
        dispatch(saveItems(response.data));
      })
      .catch((error) => {
        alert(error);
      });
  };
};

// Searching for items based on searck key word
export const asyncGetSearchItems = (value) => {
  return (dispatch) => {
    const body = { name: value };
    axios
      .post("http://localhost:3060/api/getItem", body)
      .then((response) => {
        dispatch(saveSearchItems(response.data));
      })
      .catch((error) => {
        alert(error);
      });
  };
};
