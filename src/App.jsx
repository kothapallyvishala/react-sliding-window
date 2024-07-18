import { useState } from "react";

function App() {
  const [arr, setArr] = useState([]);
  const [newele, setNewEle] = useState("");
  const [k, setK] = useState();
  const [newk, setNewK] = useState("");

  // Find result (Max SubArray Sum of arr)
  const [result, setResult] = useState();

  function findMaxSubArrSum() {
    // write code here
    let n = arr.length;
    if (n < k) {
      setResult("Array length is less than k");
      return;
    }

    // Compute the sum of the first window
    let window_sum = 0;
    for (let i = 0; i < k; i++) {
      window_sum += arr[i];
    }

    let max_sum = window_sum;

    // Slide the window over the array
    for (let i = 0; i < n - k; i++) {
      window_sum = window_sum - arr[i] + arr[i + k];
      max_sum = Math.max(max_sum, window_sum);
    }

    setResult(max_sum);
  }

  return (
    <>
      <div>
        <span>
          <bold>Arr:</bold>
          {"\t"}
        </span>
        <span>
          [{arr.map((val, i) => `${val}${i !== arr.length - 1 ? ", " : ""}`)}]
        </span>
      </div>

      <div>
        <span>
          <bold>K:</bold>
          {"\t"}
        </span>
        <span>{k}</span>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={newele}
          onChange={(e) => setNewEle(e.target.value)}
          type="number"
        />
        <button
          onClick={() => {
            if (newele !== "") setArr([...arr, parseInt(newele)]);

            setNewEle("");
          }}
        >
          push to list
        </button>
      </form>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={newk}
          onChange={(e) => setNewK(e.target.value)}
          type="number"
        />
        <button
          onClick={() => {
            setK(newk);
            setNewK("");
          }}
        >
          Set K Value
        </button>
      </form>

      <button onClick={findMaxSubArrSum}>Find Max SubArray Sum of arr</button>

      <h1>{result}</h1>
    </>
  );
}

export default App;
