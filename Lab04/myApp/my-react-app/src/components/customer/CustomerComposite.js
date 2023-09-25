import React from "react";
import customersData from "../../data/customers-data";
import axios from "axios";
import { fetch } from "whatwg-fetch";
import CustomerList from "./CustomerList";

export default class CustomerComposite extends React.Component {
  //   state = { customers: [] };
  customerList = []
  state = { customers: [], isLoading: false, hasError: false };
  constructor(props){
    super(props);
    console.log("Hey I am called parent constructor");
  }
  //didMount intended to call async call
  fetchData(url) {
    this.setState({ isLoading: true });
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusTest);
        }
        this.setState({ isLoading: false });
        return response;
      })
      .then((response) => {
        return response.json();
      })
      .then((customers) => {
        
        this.setState({customers: customers});
      })
      .catch(() => this.setState({ hasError: true }));
  }

  componentDidMount() {
    console.log("Hey I am called from parent did mount");
    this.fetchData("customers.json");
    console.log(this.state);
  }
  render() {
    console.log("parent component rendered");
    if (this.state.hasError) {
      return <p>Something went wrong....</p>;
    } else if (this.state.isLoading) {
      return <p>Loading...</p>;
    } else if (this.state.customers === undefined) {
      return <p>Undefined Didn't received data...LOL</p>;
    }
    console.log(this.state.customers);
    return (
      <div>
        <h1>Started developing customer component</h1>
        <CustomerList data={this.state.customers} />
      </div>
    );
  }
}
