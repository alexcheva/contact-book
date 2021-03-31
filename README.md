# Contact Book
## PERN App
![screen shot](screen-shot.png)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Client setup:

To install dependencies in the project directory, you can run:

`npm install`

To start the client server in the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Server setup:

To install dependencies in the server directory, you can run:

`npm install`

To start the express server in the server directory, you can run:

`npm start`

Runs the server on the PORT 9000.\
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The server will reload if you make edits.\

## Postgres:

[Installing Postgres](https://github.com/Techtonica/curriculum/blob/main/databases/installing-postgresql.md)

[Postgres Cheatsheet](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546)

[Postico for PostgreSQL](https://eggerapps.at/postico/)

### To open Postgres in terminal, after installation:

`psql`

### Creating database in Postgres:

`create database contacts;`

### Connecting to the database we created:

`\c contacts`

## Database instructions:


## Create Tables:

### Contact table:

#### Contacts
id - (primary) integer unique,<br />
fname - varchar required,<br />
lname - varchar optional unique,<br />
phone_num - char (10) optional unique,<br />
email - varchar optional unique<br />


``` sql
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  fname VARCHAR (50) NOT NULL,
  lname VARCHAR (100) NULL UNIQUE,
  phone_num CHAR (10) NULL UNIQUE,
  email VARCHAR NULL UNIQUE
);
```

## Sample Data:

``` sql
INSERT INTO contacts (fname,lname,phone_num,email)
 VALUES 
  ('Camryn','Rodgers','4322259337','pspoole@optonline.net'),
  ('Leon','Oliver','2634027693','sscorpio@aol.com'),
  ('Cassie','Schneider','9364952735','presoff@yahoo.com'),
  ('Jamya','Simpson','7068541331','claypool@yahoo.ca'),
  ('Brennen','Oconnor','7806391530','ahmad@yahoo.ca'),
  ('Lauren','Lynn','4669940578','yangyan@sbcglobal.net'),
  ('Lucy','Barker','9129003587','esbeck@verizon.net');
 ```

### Extra Data to add:

Roman  
Spencer  
5097888118  
fraterk@sbcglobal.net

### To test adding existing value:
Lucy  
Barker  
9129003587  
esbeck@verizon.net

## Functionality
- Add a new contact  
  - If contact already exists, display a message to the user  
- Search for contacts by last name  
- View all contacts  
- BONUS: remove a contact



