import React, { useState, useEffect } from "react";

const CounterA = React.memo(({count}) => {
  useEffect(()=>{
    console.log(`CounterA Update - count: ${count}`);
  });

  return <div>{count}</div>
}); 

const CounterB = ({obj}) => {
  useEffect(()=>{
    console.log(`CounterB Update - count: ${obj.count}`);
  });
  return <div>{obj.count}</div>
}; 

const areEqual = (prevProps, nextProps) => {
  // return true // 이전 Props와 현재 Props가 같다 > 리렌더링을 일으키지 않음
  // return false // 이전과 현재가 다르다 > 리렌더링을 일으킴

  if(prevProps.obj.count === nextProps.obj.count){ return true; }
  return false;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest2 = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1
  });

  return (
    <div style={{padding:50}}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={()=>setCount(count)}>A Button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={()=>setObj({count: obj.count})}>B Button</button>
      </div>
    </div>
  );
};

export default OptimizeTest2;