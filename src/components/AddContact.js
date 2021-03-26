const AddContactForm = () => {
  return (
    <section className="container">
      <h2>Add Contact</h2>
      <form>
        <div class="form-row">
          <div class="col">
            <fieldset className="form-group mb-2">
              <label for="fname">First name:</label>
              <input className="form-control" type="text" name="fname" />
            </fieldset>
          </div>
          <div class="col">
            <fieldset className="form-group mb-2">
              <label for="lname">Last name:</label>
              <input className="form-control" type="text" name="lname" />
            </fieldset>
          </div>
        </div>
        <div class="form-row">
          <div class="col">
            <fieldset className="form-group mb-2">
              <label for="phone_num">Phone Number:</label>
              <input className="form-control" type="number" name="phone_num" />
            </fieldset>
          </div>
          <div class="col">
            <fieldset className="form-group mb-2">
              <label for="email">Email:</label>
              <input className="form-control" type="email" name="email" />
            </fieldset>
          </div>
        </div>
        <input type="submit" value="Add Contact" />
      </form>
    </section>
  );
}
export default AddContactForm;