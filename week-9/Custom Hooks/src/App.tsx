import { Component, useEffect, useState, type ReactNode } from "react";
import "./App.css";

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    console.log("app");
    setInterval(() => {
      setRender((p) => !p);
    }, 4000);
  }, []);
  return <>{render ? <Mycomponent /> : <>App Component</>}</>;
}

class Mycomponent extends Component {
  componentDidMount(): void {
    console.log("Component mounted");
  }
  componentWillUnmount(): void {
    console.log("Component unmounted");
  }
  render(): ReactNode {
    return (
      <>
        <div>MY Component</div>
      </>
    );
  }
}

// function Mycomponent() {
//   useEffect(() => {
//     console.log("component Mounted");
//     return () => {
//       console.log("component unmount");
//     };
//   }, []);

//   return <>My Components </>;
// }

export default App;
