import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <District name="Noakhali" special="Bibhag"></District>
      <District name="BrammanBaria" special="fighter"></District>
      <District name="Kumilla" special="Moynamoti"></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: `lightblue`,
  margin: `20px`,
  borderRadius: `20px`,
  padding: `20px`,
};

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower)
  };
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h2>Power: {power}</h2>
      <button onClick={boostPower}>Boost The Power: </button>
    </div>
  );
}
export default App;
