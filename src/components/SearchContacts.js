import * as React from "react";
function SearchContacts() {
  const [contacts, setContacts] = React.useState([]);
  const [lname, setLname]  = React.useState("");
  function getContacts(lname) {
    fetch(`http://localhost:9000//queryContacts/${lname}`)
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }

  const submitForm = async (e) => {
    e.preventDefault();
    getContacts(lname);
  }

  return (
    <section className="container-fluid data">
      <div className="container table-responsive">
        <h2>Search:</h2>
        <form onSubmit={submitForm}>
          <label>Last Name:</label>
          <input type="text" name='lname' onChange={(e) => { setLname(e.target.value)}}/>
          <input type="submit" value="search" />
        </form>
        <h3>Search Results:</h3>
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
                  <td><button className="warning">Edit</button></td>
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

export default SearchContacts;