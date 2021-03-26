import logo from './logo.svg';
import './App.css';
import AddContactForm from "./components/AddContact";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Contact Book</h1>
        <p>Keep your contacts organized.</p>
      </header>
      <main>
        <AddContactForm />
      </main>
    </div>
  );
}

export default App;
