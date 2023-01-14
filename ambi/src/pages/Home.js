import React, { useState } from "react";

const options = [
{
    key: 'Please Select Your Key',
    value: null,
},
  {
    key: "C",
    value: "C",
  },
  {
    key: "C#",
    value: "C#",
  },
  {
    key: "D",
    value: "D",
  },
  {
    key: "D#",
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
    key: "F#",
    value: "F#",
  },
  {
    key: "G",
    value: "G",
  },
  {
    key: "G#",
    value: "G#",
  },
  {
    key: "A",
    value: "A",
  },
  {
    key: "A#",
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

  const handleChange = (event) => {

    setValue(event.target.value);
  };

  const handleMajMin = (event) => {

    setMajmin(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setChoice(value + ' ' + Majmin);
    
  };

 console.log(choice)
  return (
    <div>
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
  );
};

export default Home;
