import React from "react";
import customersData from "../../data/customers-data";
import axios from "axios";
import {fetch} from "whatwg-fetch";

export default class CustomerComposite extends React.Component {
  //   state = { customers: [] };
  state = { customers: [], isLoading: false, hasError: false };
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
        const respData = response.json();
        console.log(respData);
        return respData;
      })
      .then((customers) => this.setState({ customers }))
      .catch(() => this.setState({ hasError: true }));
  }
  componentDidMount() {
    this.setState({customers : customersData})
    // axios.get("customers.json").then((response) => {
    //   this.setState({ customers: response.data });
    // });
    this.fetchData("customers.json");
    console.log(this.state)
  }
  render() {
    if (this.state.hasError) {
      return <p>Something went wrong....</p>;
    }
    else if (this.state.isLoading) {
      return <p>Loading...</p>;
    }else if(this.state.customers === undefined){
      return <p>Undefined Didn't received data...LOL</p>;
    }
    return (
      <div>
        <h1>Started developing customer component</h1>
        <CustomerList data={this.state.customers} />
      </div>
    );
  }
}

function CustomerList(props) {
  const customers = props.data;
  let lstCustomersComponents = [];

  //   customers.forEach((customer) => {
  //     //   console.log(customer);
  //     lstCustomersComponents.push(<CustomerComponent customerData={customer} />);
  //   });

  console.log(customers);
  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Location</th>
          <th>Customer Since</th>
          <th>Order Total</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => {
          return <CustomerComponent customerData={customer} />;
        })}
      </tbody>
    </table>
  );
}

function CustomerComponent(props) {
  const customer = props.customerData;
  console.log(props.customerData);
  return (
    <tr>
      <td>{customer.id}</td>
      <td>{customer.name}</td>
      <td>{customer.location}</td>
      <td>{customer.customerSince}</td>
      <td>{customer.orderTotal}</td>
    </tr>
  );
}
