
import headerImg from './friends.png';
import './App.css';
import AddContact from "./components/AddContact";
import ShowContacts from "./components/ShowContacts";
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
        <AddContact />
        {/*<SearchContacts />*/}
        <ShowContacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
