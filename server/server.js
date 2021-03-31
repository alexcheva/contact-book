const express = require('express');
const app = express();
const pgp = require('pg-promise')({});
const cors = require('cors');
const db = pgp("postgres://localhost:5432/contacts");

app.use(cors());
app.use(express.json()); //res.body
app.use(express.urlencoded({ extended: true }));
app.get("/contacts", async (req, res) => {
  try {
    const contacts = await db.any("SELECT * FROM contacts;", [true]);
    res.json(contacts);
  } catch (e) {
    console.log(e);
  }
});
app.get("/queryContacts/:lname", async (req, res) => {
  try {
    const individual = await db.any(
      `SELECT * FROM contacts WHERE lname=${lname}`, [true]);
    console.log({ individual });
    res.json(individual);
  } catch (e) {
    console.log(e);
  }
});
app.post('/addContact', async (req, res) => {
  try {
    const {fname, lname, phone_num, email} = req.body;
    await db.none('INSERT INTO contacts (fname, lname, phone_num, email ) values ($1,$2,$3,$4)', [fname, lname, phone_num, email]).then(data => {
      res.json({
        message: "Success!",
        body: "The contact for ",
        fname: fname,
        lname: lname,
        end: " has been added!"
      });
      console.log("SUCCESS: Individual is added to the contact book.");
  })
  } catch (err) {
    console.log("fooo");
    console.error(err.message);
    res.json({
      message: "Error!",
      error: err
    });
  }

});

app.delete("/deleteContact/:id", async (req, res) => {
  const id = req.body.id;
  db.result(`DELETE FROM contacts WHERE id = ${id};`, [true])
    .then(data => {
        // data = number of rows that were deleted
      console.log(`deleted ${data}`);

    });
})
const port = 9000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
});