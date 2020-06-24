import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState([{}]);

  useEffect(() => {

    async function getRepose () {
    const response = await fetch("https//api.github.com/users/huzefagul92")
    const data = await response.json();
    console.log(data);
    setData(data)
    }

    getRepose();
  
  },[])
//   return (
//     <div className="App">
//       Hellow world ddasfsdgfa laucggbhxhchszxf
//     </div>
//   );
// }

// export default App