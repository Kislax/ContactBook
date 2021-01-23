import './App.scss';
import {ContactPage} from "./Containers/ContactPage/ContactPage";
import {Navbar} from "./Components/Navbar/Navbar";


export  const App= ()=> {
  return (
    <div className="App">
        <Navbar/>
      <ContactPage/>
    </div>
  );
}

export default App