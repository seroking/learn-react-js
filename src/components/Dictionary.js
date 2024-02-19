import { useState, useEffect } from "react";

export default function Dictionary() {
  const[word, setWord] = useState('');
  const [word2, setWord2] = useState('');

/*  useEffect(
    () => {
      console.log("Updated Word: ",word)
    }
  )
*/



  useEffect(
    () => {
      console.log("Updated State : ", word, ' ', word2);
    }, [word]
  )




  return (
    <>
      <input className="border-solid border-2 border-indigo-500" onChange={(e) =>{
        setWord(e.target.value);
      }}
      />
      <h1 className="font-mono text-xl">Let's get the definition for : {word}</h1>

      <h2 className="font-mono text xl"> Get def for word 2 {word2}</h2>
      <input className="border-solid border-2 border-indigo-500" onChange={(e) =>{
        setWord2(e.target.value);
      }}
      />
    </>

  )
}