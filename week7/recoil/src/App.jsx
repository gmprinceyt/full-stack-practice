import "./App.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CountAtom } from "./atoms";

function App() {
  console.log("App render ");

  return (
    <div className="">
      <Count />
      <Button />
    </div>
  );
}

const Count = () => {
  console.log("Count render ");

  const count = useRecoilValue(CountAtom);



return (<div className="">
    {
      count % 2 == 0 ? <p>it is Even</p>: <p>It is ODD</p>
     }
    <b>{count}</b>
  </div>)
};

const Button = () => {
  // const [count, setCount] = useRecoilState(CountAtom); // render Button unnessessry
  const setCount = useSetRecoilState(CountAtom)

  console.log("button Render");
  return (
    <div className="">
      <button onClick={() => setCount(count => count + 1)}>increase</button>
      <button onClick={() => setCount(count => count - 1)}>decrease</button>
    </div>
  );
};

export default App;
