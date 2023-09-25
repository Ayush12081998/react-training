import { useState, useEffect } from "react";
import axios from "axios";

const UseStateDemo = () => {
  const [counter, setCounter] = useState(1);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [orders, setOrders] = useState([]);

  const updateDateTime = () => {
    setCurrentDateTime(new Date());
  };

  async function fetchOrders() {
    console.log("Rendered the dom");
    document.title = `Count ${counter}`;
    axios.get("orders.json").then((response) => {
      setOrders( response.data);
    });
    console.log(orders);
  }

  useEffect(() => {
    fetchOrders();
  }, [counter]);
  return (
    <>
      <p>Count of Order : {orders.length}</p>
      <p>Counter : {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment ++</button>
      <p>Date Time : {currentDateTime.toString()}</p>
      <button onClick={() => updateDateTime()}>Change Time </button>
    </>
  );
};
export default UseStateDemo;
