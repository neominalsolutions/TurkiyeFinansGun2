import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as helpers from "./variables";
import ListConditions from "./samples/ListConditions";
import Todos from "./hooks/Todos";

type AppProps = {
  title?: string;
};

function App({ title }: AppProps) {
  // utils, helper
  let todayString: string = helpers.getPrettyDate(new Date());

  let a: string | undefined;
  const b: string = "ali"; // const ifadelerde default bir değer ataması olması
  let number: number = 5;
  // b = 'ahmet'; // const değerlere ilk değerleri dışında tanımlama yapılmaz

  // functionları const tanımlamak da bir sakınca yok. bir fuction başka bir fuctiona atama yapmayız.
  const showMessage = (message: string): string => {
    // number.toLowerCase();

    return "";
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       {a}
    //     </a>
    //   </header>
    // </div>
    <>
      {/* <ListConditions title="deneme1" /> */}
      {/* <ListConditions /> */}
      <Todos />
    </>
  );
}

export default App;
