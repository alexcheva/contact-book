const express = require('express');
const app = express();
const pgp = require('pg-promise')({});
const cors = require('cors');
const db = pgp("postgres://localhost:5432/contacts");

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
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
app.post('/addContact', function (req, res) {
  //const today = new Date();
  const {fname, lname, email, number} = req.body;
  db.none('INSERT INTO contacts (fname, lname, email, number) values ($1,$2,$3,$4)',[fname, lname, email, number]).then(data => {
      console.log("SUCCESS: Individual is added to the contact book"); // print new Individual id;
  })
  .catch(error => {
      console.log('ERROR:', error); // print error;
  });
});

app.delete("/deleteContact/:id", async (req, res) => {
  db.result(`DELETE FROM Events WHERE id = ${id}`, [123], r => r.rowCount)
    .then(data => {
        // data = number of rows that were deleted
      console.log(`deleted ${data}`);

    });
})
const port = 9000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
});