import React, { useState } from "react";

import AudioPlayer from "../components/AudioPlayer";


const options = [
{
    key: 'Please Select Your Key',
    value: 'null',
},
  {
    key: "C",
    value: "C",
  },
  {
    key: "C#/Db",
    value: "C#",
  },
  {
    key: "D",
    value: "D",
  },
  {
    key: "D#/Eb",
    value: "D#",
  },
  {
    key: "E",
    value: "E",
  },
  {
    key: "F",
    value: "F",
  },
  {
    key: "F#/Gb",
    value: "F#",
  },
  {
    key: "G",
    value: "G",
  },
  {
    key: "G#/Ab",
    value: "G#",
  },
  {
    key: "A",
    value: "A",
  },
  {
    key: "A#/Bb",
    value: "A#",
  },
  {
    key: "B",
    value: "B",
  },
];

const Home = () => {
  const [value, setValue] = useState("");
  const [Majmin, setMajmin] = useState("");
  const [choice, setChoice] = useState("");
  const [view, setView] = useState(false);

  const handleChange = (event) => {
    
    setValue(event.target.value);
  };

  const handleMajMin = (event) => {

    setMajmin(event.target.value);
  };

  const handleView = () => {
    if (view === false){
      setView(true)
    } else{
      setView(false)
    }
};



  const handleSubmit = (event) => {
    event.preventDefault();

        if(value.length !== 0 && Majmin.length !== 0 && (value !== 'null' && Majmin !== 'null')){

        setChoice(value + ' ' + Majmin);
        handleView();
        } else{
          console.log("error")
        }   
  };

 


  return (
    <div>
      <div style={{visibility: view ? 'hidden' : 'visible'}}>
      <h1>ambi</h1>
      <p>
        ambi is your ambient generating friend. Select your desired key and scale, and then press the
        generate button. ambi will take it from there!
      </p>
      <form>
        <select value={value} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.key} value={option.value}>{option.key}</option>
          ))}
        </select>
        <select value={Majmin} onChange={handleMajMin}>
        <option value='null'>Please Select Your Scale</option>
          <option value="Major">Major</option>
          <option value="minor">minor</option>
        </select>
        <button type="submit" onClick={handleSubmit}>GENERATE</button>
      </form>
      </div>
          <div style={{visibility: view ? 'visible' : 'hidden'}}>
            <h2>Key: {choice}</h2>
            <AudioPlayer choice={choice} />
            <button onClick={handleView}>Go Back</button>
            
          </div>
     
    </div>
  );
};

export default Home;
