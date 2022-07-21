import React, { useEffect, useState } from "react";

const UnmountTest = () => {

  useEffect( () => {
    console.log("Mount!");

    return () => {
      // Unmount 시점에 실행되게 됨
      console.log("Unmount!");
    }
  }, []);

  return (
    <div>Unmount Testing Component</div>
  );
}

const Lifecycle = () => {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect( () => {
    console.log("Mount!");
  }, []);

  useEffect( () => {
    console.log("Update!");
  }, []);

  // 변화 감지
  useEffect( () => {
    console.log(`count is update : ${count}`);
    if(count > 5){
      alert("count가 5를 넘었습니다. 따라서 1로 초기화됩니다.");
      setCount(1);
    }
  }, [count]);

  useEffect( () => {
    console.log(`text is update : ${text}`); 
  }, [text]);

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  // 단락회로평가 (컴포넌트 렌더할지 말지 여부)
  return (
    <div style={{padding:20}}>
      <button onClikc={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />} 
    </div>
  );
}

export default Lifecycle;