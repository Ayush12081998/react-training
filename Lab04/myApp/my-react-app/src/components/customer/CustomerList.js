import React from "react";
import CustomerComponent from "./CustomerComponent";
import moment from "moment";

export default class CustomerList extends React.Component {
  customerList = [];

  state = {
    customers: [],
    orderTotal: 0,
    filteredCustomer: [],
  };

  constructor(props) {
    super(props);
    console.log("Hey I am called child constructor");

    // this.customerList = props.data;
    // console.log(this.props.data);
  }

  caculateOrderTotal() {
    let sum;
    if (this.state.filteredCustomer.length > 0) {
      sum = this.state.filteredCustomer
        .map((cust) => cust.orderTotal)
        .reduce(function (acc, value) {
          return (acc += value);
        }, 0);
    }
    return sum;
  }

  componentDidMount() {
    console.log("Hey I am called child did mount");
    console.log(this.state);
    this.setState({ filteredCustomer: this.props.data });
    this.setState({ customers: this.props.data });
    this.setState({ orderTotal: this.caculateOrderTotal() });
  }

  sortByAttribute(prop) {
    console.log("Sorting by Id");
    Array.prototype.sortBy = function (p) {
      return this.slice(0).sort(function (a, b) {
        return a[p] > b[p] ? 1 : a[p] < b[p] ? -1 : 0;
      });
    };
    if (this.state.filteredCustomer.length > 0) {
      let sortedArray = [];
      if (prop == "id") {
        console.log("Sorting by Id");
        //sortedArray = this.state.filteredCustomers.sort(function(a,b) {return (a.id-b.id)})
        // sortedArray = this.state.filteredCustomer;
        // sortedArray.sort((a1,a2)=>{return a1-a2})
        sortedArray = this.state.filteredCustomer.sortBy("name");
      } else if (prop == "name") {
        sortedArray = this.state.filteredCustomer.sortBy("name");
      } else if (prop == "location") {
        sortedArray = this.state.filteredCustomer.sortBy("location");
      } else if (prop == "customerSince") {
        sortedArray = this.state.filteredCustomer.sort(function (a, b) {
          return (
            moment(a.customerSince, "DD-MMM-YYYY") -
            moment(b.customerSince, "DD-MMM-YYYY")
          );
        });
      } else if (prop == "orderTotal") {
        sortedArray = this.state.filteredCustomer.sortBy("orderTotal");
      }
      this.setState({ filteredCustomer: sortedArray });
    }
  }

  filterCustomers(event) {
    console.log("search text :" + event.target.value);
    if (event.target.value.length > 0) {
      let filterdCustomers = this.state.customers.filter((cust) => {
        return (
          cust.name.includes(event.target.value) ||
          cust.id.toString().includes(event.target.value) ||
          cust.location.includes(event.target.value)
        );
      });

      console.log(filterdCustomers);
      this.setState({ filteredCustomer: filterdCustomers });
      this.setState({ orderTotal: this.caculateOrderTotal() });
    } else {
      this.setState({ filteredCustomer: this.state.customers });
      this.setState({ orderTotal: this.state.orderTotal });
    }
  }

  render() {
    console.log("child component rendered");
    console.log(this.state);
    return (
      <>
        Search by Name :{" "}
        <input type="text" onChange={(event) => this.filterCustomers(event)} />
        <table border="1" width="100%">
          <thead>
            <tr>
              <th>
                <a href="#" onClick={() => this.sortByAttribute("id")}>
                  Id
                </a>
              </th>
              <th>
                <a href="#" onClick={() => this.sortByAttribute("name")}>
                  Name
                </a>
              </th>
              <th>
                <a href="#" onClick={() => this.sortByAttribute("location")}>
                  Location
                </a>
              </th>
              <th>
                <a
                  href="#"
                  onClick={() => this.sortByAttribute("customerSince")}
                >
                  Customer Since
                </a>
              </th>
              <th>
                <a href="#" onClick={() => this.sortByAttribute("orderTotal")}>
                  Name
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredCustomer.map((customer) => {
              return (
                <>
                  <CustomerComponent
                    customerData={customer}
                    key={customer.id}
                  />
                </>
              );
            })}
            <tr key={"Total"}>
              <td>Total</td>
              <td>{this.caculateOrderTotal()}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
