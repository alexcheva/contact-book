const AddContactForm = () => {
  return (
    <div>
      <h2>Add Contact</h2>
      <form>
        <fieldset>
          <label for="fname">First name:</label>
          <input type="text" name="fname" />
        </fieldset>
        <fieldset>
          <label for="lname">Last name:</label>
          <input type="text" name="lname" />
        </fieldset>
        <fieldset>
          <label for="phone_num">Phone Number:</label>
          <input type="number" name="phone_num" />
        </fieldset>
        <fieldset>
          <label for="email">Email:</label>
          <input type="email" name="email" />
        </fieldset>
        <input type="submit" value="Add Contact" />
      </form>
    </div>
  );
}
export default AddContactForm;