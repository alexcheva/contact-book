//import logo from './notebook.svg';
import headerImg from './friends.png';
import './App.css';
import AddContactForm from "./components/AddContact";
import Contacts from "./components/ShowContacts";
//import SearchContacts from "./components/SearchContacts";
import Footer from "./components/Footer";
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
        {/*<SearchContacts />*/}
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
