//import logo from './notebook.svg';
import headerImg from './friends.png';
import './App.css';
import AddContactForm from "./components/AddContact";
import Contacts from "./components/ShowContacts";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={headerImg} alt="headerImg" />
        <h1>Contact Book</h1>
        <p>Keep your contacts organized.</p>
      </header>
      <main>
        <AddContactForm />
        <Contacts />
      </main>
    </div>
  );
}

export default App;
