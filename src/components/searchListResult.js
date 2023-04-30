import { useState } from "react";
const SearchListResult = (props) => {
  const { itemsSearchData } = props;

  const [addedItems, setAddedItems] = useState([]);

  const itemClick = (item) => {
    setAddedItems([...addedItems, item]);
  };

  const getTotalAmount = () => {
    const total = addedItems.reduce((sum, item) => (sum += item.price), 0);
    return total;
  };

  const handleReadyItem = (id, name) => {
    const filteredItems = addedItems.filter((item) => {
      return item._id !== id;
    });
    setAddedItems(filteredItems);
    alert(`order ${name} is ready`);
  };

  return (
    <div>
      {itemsSearchData.map((item) => {
        return (
          <li key={item._id}>
            {item.name}{" "}
            <button
              onClick={() => {
                itemClick(item);
              }}
            >
              Add
            </button>
          </li>
        );
      })}

      <p>Total due: {getTotalAmount()}</p>

      {addedItems.map((item, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid",
            height: "30px",
            display: "inline-block",
            padding: "10px",
            marginLeft: "10px",
          }}
        >
          #{idx + 1} {item.name}{" "}
          {idx === 0 && (
            <button
              onClick={() => {
                handleReadyItem(item._id, item.name);
              }}
            >
              &#10003;
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchListResult;
