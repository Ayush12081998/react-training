function CustomerComponent(props) {
    const customer = props.customerData;

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

  export default CustomerComponent;