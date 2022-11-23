import Header from "./Components/Header";
import Todoform from "./Components/Todoform";
import './App.css';

function App() {
  return (
    <>
      
      <div className="container h-100 my-5 d-flex justify-content-center align-items-center">
        <div>
        <Header />
        <Todoform />
        </div>
        
      </div>
    </>

  );
}

export default App;
