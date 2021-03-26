import * as React from "react";
function Contacts() {
  const [contacts, setContacts] = React.useState([]);

  function getContacts() {
    fetch("http://localhost:9000/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }
  console.log(contacts);
  React.useEffect(() => {
    getContacts();
  }, []);

  return (
    <section className="container-fluid data">
      <div className="container">
        <h2>Contacts</h2>
        <table className="table table-striped">
          <thead>
            <th>First Name:</th>
            <th>Last Name:</th>
            <th>Phone Number:</th>
            <th>Email:</th>
            <th>Edit:</th>
            <th>Delete:</th>
          </thead>
          <tbody>
            {contacts.map(
              ({
                id,
                fname,
                lname,
                phone_num,
                email,
              }) => (
                <tr key={id}>
                  <td>{fname}</td>
                  <td>{!lname? "Not Added" : lname}</td>
                  <td>{!phone_num? "Not Added" : `(${phone_num.slice(0,3)}) ${phone_num.slice(3,6)}-${phone_num.slice(-4)}`}</td>
                  <td>
                    {!email? "Not Added" : email}
                  </td>
                  <td><button className="warning" onClick="">Edit</button></td>
                  <td><button className="danger">Delete</button></td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Contacts;
