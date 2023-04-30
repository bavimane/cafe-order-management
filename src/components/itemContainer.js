import Items from "./items";
import SearchForm from "./searchForm";
import SearchListResult from "./searchListResult";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  asyncGetSearchItems,
  asyncGetItemsByType,
  asyncGetItems,
} from "../actions/itemAction";

const ItemContainer = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetItems());
  }, [dispatch]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length % 3 === 0) {
      dispatch(asyncGetSearchItems(value));
    }
  };

  const items = useSelector((state) => {
    return state.items.itemsData;
  });

  const itemsSearchData = useSelector((state) => {
    return state.items.itemsSearchData;
  });

  const handleTypeChange = (type) => {
    dispatch(asyncGetItemsByType(type));
  };

  return (
    <center>
      <div>
        <input
          type="radio"
          name="type"
          onChange={() => {
            handleTypeChange("drink");
          }}
        />
        Drink
        <input
          type="radio"
          name="type"
          onChange={() => {
            handleTypeChange("food");
          }}
        />
        Food
        <input
          type="radio"
          name="type"
          onChange={() => {
            handleTypeChange("");
          }}
        />
        All
        <Items items={items} />
        <br />
        <SearchForm handleChange={handleChange} search={search} />
        <SearchListResult itemsSearchData={itemsSearchData} />
      </div>
    </center>
  );
};

export default ItemContainer;
