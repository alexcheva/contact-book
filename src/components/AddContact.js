import React from "react";

const AddContactForm = () => {
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [phone_num, setPhone_num] = React.useState(null);
  const [email, setEmail] = React.useState("");

  const [msg, setMsg] = React.useState("");
  const [alertClass, setAlertClass] = React.useState("");
  const submitForm = async (e) => {
   e.preventDefault();
    const body = {
      fname,
      lname,
      phone_num,
      email
    };

    fetch(
      "http://localhost:9000/addContact",

      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          debugger
          const successMsg = `Success! ${data.fname} ${data.lname} has been added to your Contacts!`;
          setMsg(successMsg);
          setAlertClass("alert alert-success")
        } else {
          //debugger
          // if(data.error.constrain = contacts_email_key)
          setMsg(`Error! ${data.message}`)
          setAlertClass("alert alert-danger")
        }
        
      })
      .catch((e) => console.error(e.stack));
  };

  return (
    <section className="container">
      <h2>Add Contact</h2>
      <form onSubmit={submitForm}>
        <div class="form-row">
          <div class="col">
            <fieldset className="form-group mb-2">
              <label for="fname">First name:</label>
              <input className="form-control" type="text" name="fname" 
                onChange={(e) => setFname(e.target.value)}
              />
            </fieldset>
          </div>
          <div class="col">
            <fieldset className="form-group mb-2">
              <label for="lname">Last name:</label>
              <input className="form-control" type="text" name="lname"
                onChange={(e) => setLname(e.target.value)}
              />
            </fieldset>
          </div>
        </div>
        <div class="form-row">
          <div class="col">
            <fieldset className="form-group mb-2">
              <label for="phone_num">Phone Number:</label>
                <input className="form-control" type="number" name="phone_num" onChange={(e) => setPhone_num(e.target.value)} />
            </fieldset>
          </div>
          <div class="col">
            <fieldset className="form-group mb-2">
              <label for="email">Email:</label>
              <input className="form-control" type="email" name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
          </div>
        </div>
        <div class="form-row" className={alertClass} role="alert">
        {msg}</div>
        <button className="btn btn-primary" type="submit">Add Contact</button>
      </form>
    </section>
  );
}
export default AddContactForm;