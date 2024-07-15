// src/pages/index.js
import React, { useState, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import WriterDisplayer from '@/components/Test/TestEventBus';
import { setInputValue } from '@/reducers/inputReducer';


const RemoteComponent = React.lazy(() => import('counterApp/counter')); 

const homeStyle = {
  display: 'flex',
  height: '100vh',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const CounterStyle = {
  width: '400px',
};

function Home() {
  const [inputValue, setInputValueState] = useState(''); 
  const dispatch = useDispatch(); 

  const handleInputChange = (value) => {
    setInputValueState(value);
  };

  const handleButtonClick = () => {
    console.log('Dispatch Action button clicked with this value:', inputValue);
    dispatch(setInputValue(inputValue));
  };

  return (
    <div style={homeStyle}>
      <div style={CounterStyle}>
        <Suspense fallback={<div>Loading RemoteComponent...</div>}>
          {/* <RemoteComponent 
            inputValue={inputValue} 
            onInputChange={handleInputChange} 
            onButtonClick={handleButtonClick} 
          /> */}
        </Suspense>
      </div>
      <div>
        <WriterDisplayer inputValue={inputValue} />
      </div>
    </div>
  );
}

export default Home;
