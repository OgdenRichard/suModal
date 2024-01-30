# SuModal

_A simple and reusable react modal component._

## Install

```
npm install sumodal
```

or

```
yarn add sumodal
```

>  **This project uses prop-types as a peer dependency**


## Usage

### Example setup

```jsx
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
```

### Closing options

By default, modal can be closed

- by clicking outside its content
- by clicking on the top right corner close button
- by pressing esc key

Each of those features can be disabled by setting closeButton, closeOnClickOut, closeOnEscKey props to false.

```jsx
<>
  <SuModal
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    closeButton={false}
    closeOnClickOut={false}
    closeOnEscKey={false}
  >
    Et voilà!
    <button onClick={() => setIsOpen(false)}>Close modal</button>
  </SuModal>
</>
```

### Transition

Transition on modal opening can be disabled by setting suModalTransition prop to false.

```jsx
<>
  <SuModal isOpen={isOpen} setIsOpen={setIsOpen} suModalTransition={false}>
    Et voilà!
  </SuModal>
</>
```

### Content

Modal content is passed through the Children prop.
Therefore, it can be plain text, html or React components.

```jsx
<>
  <SuModal isOpen={isOpen} setIsOpen={setIsOpen}>
    <MyComponent>
      Et Voilà !<button onClick={() => setIsOpen(false)}>Close modal</button>
    </MyComponent>
  </SuModal>
</>
```

### Style Options

Modal can be styled using any React inline style through the styleOptions prop and the following object keys :

- background
- container
- content

```jsx
<>
  <SuModal
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    styleOptions={{
      background: { background: "red" },
      container: { border: "none" },
      content: { width: "200px", height: "100px" },
    }}
  >
    Et voilà!
  </SuModal>
</>
```
