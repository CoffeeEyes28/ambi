import React, { useState, useEffect } from 'react'

// Notes
import C3 from '../Assets/Audio/C3.wav';
import CSharp3 from '../Assets/Audio/CSharp3.wav';
import D3 from '../Assets/Audio/D3.wav';
import DSharp3 from '../Assets/Audio/DSharp3.wav';
import E3 from '../Assets/Audio/E3.wav';
import F3 from '../Assets/Audio/F3.wav';
import FSharp3 from '../Assets/Audio/FSharp3.wav';
import G3 from '../Assets/Audio/G3.wav';
import GSharp3 from '../Assets/Audio/GSharp3.wav';
import A3 from '../Assets/Audio/A3.wav';
import ASharp3 from '../Assets/Audio/ASharp3.wav';
import B3 from '../Assets/Audio/B3.wav';

import C4 from '../Assets/Audio/C4.wav';
import CSharp4 from '../Assets/Audio/CSharp4.wav';
import D4 from '../Assets/Audio/D4.wav';
import Dsharp4 from '../Assets/Audio/DSharp4.wav';
import E4 from '../Assets/Audio/E4.wav';
import F4 from '../Assets/Audio/F4.wav';
import FSharp4 from '../Assets/Audio/FSharp4.wav';
import G4 from '../Assets/Audio/G4.wav';
import GSharp4 from '../Assets/Audio/GSharp4.wav';
import A4 from '../Assets/Audio/A4.wav';
import ASharp4 from '../Assets/Audio/ASharp4.wav';
import B4 from '../Assets/Audio/B4.wav';

import C5 from '../Assets/Audio/C5.wav';

// Chords
import cChord from '../Assets/Audio/Chords/CMaj.wav'

// Major Scales
const cMaj = [C3, D3, E3, F3, G3, A3, B3, C4 ]

const cSharpMaj = [CSharp3, DSharp3, F3, FSharp3, GSharp3, ASharp3, C4, CSharp4];

const dMaj = [D3, E3, FSharp3, G3, A3, B3, CSharp4, D4];

const dSharpMaj = [DSharp3, F3, G3, GSharp3, ASharp3, C4, D4, Dsharp4];

const eMaj = [E3, FSharp3, GSharp3, A3, B3, CSharp4, Dsharp4, E4];

const fMaj = [F3, G3, A3, ASharp3, C4, D4, E4, F4];

const fSharpMaj = [FSharp3, GSharp3, ASharp3, B3, CSharp4, Dsharp4, F4, FSharp4];

const gMaj = [G3, A3, B3, C4, D4, E4, FSharp4, G4];

const gSharpMaj = [GSharp3, ASharp3, C4, CSharp4, Dsharp4, F4, G4, GSharp4];

const aMaj = [A3, B4, CSharp4, D4, E4, FSharp4, GSharp4, A4];

const aSharpMaj = [ASharp3, C4, D4, Dsharp4, F4, G4, A4, ASharp4];

const bMaj = [B3, CSharp4, Dsharp4, E4, FSharp4, GSharp4, ASharp4, B4];

// Minor Scales
const cMin = [C3, D3, DSharp3, F3, G3, GSharp3, ASharp3, C4];

const cSharpMin = [CSharp3, DSharp3, E3, FSharp3, GSharp3, A3, B3, CSharp4];

const dMin = [D3, E3, F3, G3, A3, ASharp3, C4, D4];

const dSharpMin = [DSharp3, F3, FSharp3, GSharp3, ASharp3, B3, CSharp4, Dsharp4];

const eMin = [E3, FSharp3, G3, A3, B3, C4, D4, E4];

const fMin = [F3, G3, GSharp3, ASharp3, C4, CSharp4, Dsharp4, F4];

const fSharpMin = [FSharp3, GSharp3, A3, B3, CSharp4, D4, E4, FSharp4];

const gMin = [G3, A3, ASharp3, C4, D4, Dsharp4, F4, G4];

const gSharpMin = [GSharp3, ASharp3, B3, CSharp4, Dsharp4, E4, FSharp4, GSharp4];

const aMin = [A3, B3, C4, D4, E4, F4, G4, A4];

const aSharpMin = [ASharp3, C4, CSharp4, Dsharp4, F4, FSharp4, GSharp4, ASharp4];

const bMin = [B3, CSharp4, D4, E4, FSharp4, G4, A4, B4];


const majorScales = [cMaj, cSharpMaj, dMaj, dSharpMaj, eMaj, fMaj, fSharpMaj, gMaj, gSharpMaj, aMaj, aSharpMaj, bMaj];

const minorScales = [cMin, cSharpMin, dMin, dSharpMin, eMin, fMin, fSharpMin, gMin, gSharpMin, aMin, aSharpMin, bMin];

// Major Chords

const cMajChord = cChord;





const AudioPlayer = (choice) => {


const [audioSource, setAudioSource] = useState([])

const[chordSource, setChordSource] = useState("")

const [currentNote, setCurrentNote] = useState(0)

const shuffle = (arr) => {
  let currentIndex = arr.length, t, i;

  while (currentIndex){
    i = Math.floor(Math.random() * currentIndex--);

    t = arr[currentIndex];
    arr[currentIndex] = arr[i];
    arr[i] = t;
  }
  return arr;
}



useEffect(()=> {

  switch(choice.choice) {
    
    case "C Major": 
    setAudioSource(shuffle(cMaj));
    setChordSource(cChord);
    setCurrentNote(0);
    break;

    case "C# Major": 
    setAudioSource(shuffle(cSharpMaj));
    setCurrentNote(0);
    break;

    case "D Major": 
    setAudioSource(shuffle(dMaj));
    setCurrentNote(0);

    break;

    case "D# Major": 
    setAudioSource(shuffle(dSharpMaj));
    setCurrentNote(0);
    break;

    case "E Major": 
    setAudioSource(shuffle(eMaj));
    setCurrentNote(0);
    break;

    case "F Major": 
    setAudioSource(shuffle(fMaj));
    setCurrentNote(0);
    break;

    case "F# Major": 
    setAudioSource(shuffle(fSharpMaj));
    setCurrentNote(0);
    break;

    case "G Major": 
    setAudioSource(shuffle(gMaj));
    setCurrentNote(0);
    break;

    case "G# Major": 
    setAudioSource(shuffle(gSharpMaj));
    setCurrentNote(0);
    break;

    case "A Major": 
    setAudioSource(shuffle(aMaj));
    setCurrentNote(0);
    break;

    case "A# Major": 
    setAudioSource(shuffle(aSharpMaj));
    setCurrentNote(0);
    break;

    case "B Major": 
    setAudioSource(shuffle(bMaj));
    setCurrentNote(0);
    break;

    case "C minor": 
    setAudioSource(shuffle(cMin));
    setCurrentNote(0);
    break;

    case "C# minor": 
    setAudioSource(shuffle(cSharpMin));
    setCurrentNote(0);
    break;

    case "D minor": 
    setAudioSource(shuffle(dMin));
    setCurrentNote(0);
    break;

    case "D# minor": 
    setAudioSource(shuffle(dSharpMin));
    setCurrentNote(0);
    break;

    case "E minor": 
    setAudioSource(shuffle(eMin));
    setCurrentNote(0);
    break;

    case "F minor": 
    setAudioSource(shuffle(fMin));
    setCurrentNote(0);
    break;

    case "F# minor": 
    setAudioSource(shuffle(fSharpMin));
    setCurrentNote(0);
    break;

    case "G minor": 
    setAudioSource(shuffle(gMin));
    setCurrentNote(0);
    break;

    case "G# minor": 
    setAudioSource(shuffle(gSharpMin));
    setCurrentNote(0);
    break;

    case "A minor": 
    setAudioSource(shuffle(aMin));
    setCurrentNote(0);
    break;

    case "A# minor": 
    setAudioSource(shuffle(aSharpMin));
    setCurrentNote(0);
    break;

    case "B minor": 
    setAudioSource(shuffle(bMin));
    setCurrentNote(0);
    break;



    default: 
    break;

   };

},[choice]);





  return (
    <div>
        <h2>Chord</h2>
        <audio controls autoPlay src={chordSource} loop></audio>
        <br></br>
        <h3>Lead</h3>
        <audio controls autoPlay  src={audioSource[currentNote]}  onEnded={() => setCurrentNote(i => i + 1)}></audio>
        
        
        </div>
  )
}

export default AudioPlayer