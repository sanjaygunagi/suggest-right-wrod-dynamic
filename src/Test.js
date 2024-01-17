import { memo, useEffect, useMemo, useState } from "react";

const Test1 = ({ handleSetCount }) => {
//   const [count, setCount] = useState(0);

//  const value = useMemo(() => ({id: 100}), [])

//   useEffect(() => {
//     console.log("useEffect Test", value);
//   }, [value]);

  console.log('Test');

  return (
    <>
      <button onClick={() => {
        // setCount(count + 1);
        handleSetCount();
        console.log('Test button click')
      }}>Test</button>

      <h1>Test</h1>
    </>
  );
};


export const Test =  memo(Test1)