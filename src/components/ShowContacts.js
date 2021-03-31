import * as React from "react";
function Contacts() {
  const [contacts, setContacts] = React.useState([]);
  const [search, setSearch] = React.useState("");

  function getContacts() {
    fetch("http://localhost:9000/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }

  const deleteContact = async ({ id }) => {
    try {
      debugger
      const deleteContact = await fetch(`http://localhost:9000/deleteContact/${id}`, {
        method: "DELETE"
      });
    } catch (err) {
      console.error(err.message)
    }
  }
  console.log(contacts);

  React.useEffect(() => {
    getContacts();
  }, []);

  function searchData(e) {
    e.preventDefault();
    //take the string
    const tempContacts = contacts.filter(contact => contact.lname === search);
    setContacts(tempContacts);
  }

  return (
    <section className="container-fluid data">
      <div className="container table-responsive">
        <h2>Search:</h2>
        <form onSubmit={searchData}>
          <label>Last Name:</label>
          <input type="text" name='search' onChange={(e) => { setSearch(e.target.value)}}/>
          <input type="submit" value="search" />
        </form>
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
                  <td><button className="btn btn-warning">Edit</button></td>
                  <td><button className="btn btn-danger" onClick={()=>deleteContact({id})} >Delete</button></td>
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
