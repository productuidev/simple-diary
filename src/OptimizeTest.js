import React, { useState, useEffect } from "react";

const Textview = React.memo(({text}) => {
    useEffect( ()=>{
      console.log(`Update :: Text : ${text}`);
    });
  
    return <div>{text}</div>
  }); 

const Countview = React.memo(({count}) => {
  useEffect( ()=>{
    console.log(`Update :: Count : ${count}`);
  });

  return <div>{count}</div>
});

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  return (
    <div style={{padding:50}}>
      <div>
        <h2>count</h2>
        <Countview count={count} />
        <button onClick={()=>setCount(count+1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <Textview text={text} />
        <input value={text} onChange={(e)=>setText(e.target.value)} />
      </div>
    </div>
  );
};

export default OptimizeTest;