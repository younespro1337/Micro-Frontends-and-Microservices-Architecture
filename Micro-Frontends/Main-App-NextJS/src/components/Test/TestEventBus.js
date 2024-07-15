// main-app/src/pages/components/Test/TestEventBus.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const TestEventBus = ({inputValue}) => {
  const inputValueRT = useSelector((state) => state.input.inputValue);

  return ( 
    <div>
<p>Input Value from Remote1 App: <strong>{inputValueRT || inputValue}</strong></p>
    </div>
  );
};

export default TestEventBus;
