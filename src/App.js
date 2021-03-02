import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const generateRandomArray = (len) => {
    setCompleted(false);
    setSorting(false);
    setSortedIndex([]);

    const randomArray = Array.from(Array(len + 1).keys()).slice(1);

    for (let i = randomArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i - 1));
      const temp = randomArray[i];

      randomArray[i] = randomArray[randomIndex];
      randomArray[randomIndex] = temp;
    }

    setBlocks(randomArray);

    // for (let i = 0; i < randomArray.length; i++) {
    //   console.log(randomArray[i]);
    // }
  };

  useEffect(() => {
    generateRandomArray(10);
  }, []);

  const [algo, setAlgo] = useState("bubbleSort");
  const [len, setLength] = useState(30);
  const [blocks, setBlocks] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [completed, setCompleted] = useState(true);
  const [speed, setSpeed] = useState(250);
  const [compare, setCompare] = useState([]);
  const [swap, setSwap] = useState([]);
  const [sortedIndex, setSortedIndex] = useState([]);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default App;
