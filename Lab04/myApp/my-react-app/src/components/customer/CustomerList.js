import React from "react";
import CustomerComponent from "./CustomerComponent";

export default class CustomerList extends React.Component {
  customerList = [];


  constructor(props) {
    super(props);
    console.log("Hey I am called child constructor");
    this.state = {
      customers: [],
      orderTotal: 0,
    };
    // this.customerList = props.data;
    // console.log(this.props.data);
  }


  caculateOrderTotal() {
    let sum;
    if (this.props.data.length > 0) {
      sum = this.props.data
        .map((cust) => cust.orderTotal)
        .reduce(function (acc, value) {
          return (acc += value);
        }, 0);
      
    }
    return sum;
  }

  componentDidMount() {
    console.log("Hey I am called child did mount");
    console.log(this.state)
    this.setState({ customers: this.props.data });
    this.setState({ orderTotal: this.caculateOrderTotal() });
   
  }

  render() {
    console.log("child component rendered");
    console.log(this.state);
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
          {this.props.data.map((customer) => {
            return (
              <>
                <CustomerComponent customerData={customer} key={customer.id} />
              </>
            );
          })}
          <tr>
            <td>Total</td>
            <td>{this.caculateOrderTotal()}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
