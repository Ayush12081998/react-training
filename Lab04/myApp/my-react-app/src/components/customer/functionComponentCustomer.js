// import customersData from '../../data/customers-data'

// function CustomerComposite() {
// //   const arrayInts = [1, 2, 3, 4, 5];
// //   const customers = [];
// //   arrayInts.forEach((element) => {
// //     customers.push({
// //       id: element,
// //       name: "Customer:" + element,
// //       location: "Patna Bihar",
// //       customerSince: "2023-11-11",
// //       orderTotal: element + 10,
// //     });
// //   });
//   return (
//     <div>
//       <h1>Started developing customer component</h1>
//       <CustomerList data={customersData} />
//     </div>
//   );
// }

// function CustomerList(props) {
//   const customers = props.data;
//   let lstCustomersComponents = [];

//   customers.forEach((customer) => {
//     //   console.log(customer);
//     lstCustomersComponents.push(<CustomerComponent customerData={customer} />);
//   });

//   console.log(customers);
//   return (
//     <table border="1" width="100%">
//       <thead>
//         <tr>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Location</th>
//           <th>Customer Since</th>
//           <th>Order Total</th>
//         </tr>
//       </thead>
//       <tbody>{lstCustomersComponents}</tbody>
//     </table>
//   );
// }

// function CustomerComponent(props) {
//   const customer = props.customerData;
//   console.log(props.customerData);
//   return (
//     <tr>
//       <td>{customer.id}</td>
//       <td>{customer.name}</td>
//       <td>{customer.location}</td>
//       <td>{customer.customerSince}</td>
//       <td>{customer.orderTotal}</td>
//     </tr>
//   );
// }

// export default CustomerComposite;
