import React, { useState } from 'react';
import NameAgeInput from './NameAgeInput/NameAgeInput';
import NameAgeList from './NameAge/NameAgeList';


function App() {
  const [list, setList] = useState([]);

  const addToList = (listEle) => {
    setList((prevList) => {
      return [listEle, ...prevList]
    })
  }

  return (
    <div>
      <NameAgeInput onSubmit={addToList}/>
      <NameAgeList list={list}/>
    </div>
  );
}

export default App;
