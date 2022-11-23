import Header from "./Components/Header";
import Todoform from "./Components/Todoform";

function App() {
  return (
    <>
      
      <div className="container h-100 my-5 d-flex justify-content-center align-content-center">
        <div>
        <Header />
        <Todoform />
        </div>
        
      </div>
    </>

  );
}

export default App;
