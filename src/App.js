import { useState } from "react";
import { SuModal } from "./lib/SuModal";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="App">
        {isOpen && (
          <SuModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            styleOptions={{ content: { width: "25vw", height: "25vh" } }}
          >
            Sample text
          </SuModal>
        )}
        <button onClick={() => setIsOpen(true)}>launch modal</button>
      </div>
      ;
    </>
  );
}

export default App;
