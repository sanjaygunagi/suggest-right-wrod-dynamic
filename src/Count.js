import { useEffect, useMemo, useState } from "react";

export const Count = ({ value }) => {
  console.log("Count", value);

  return (
    <>
      {/* <button onClick={() => {
          setT1({id: 200});
        setCount(count + 1);
      }}>Click {count}</button> */}

      <h1>Count {value}</h1>
    </>
  );
};
