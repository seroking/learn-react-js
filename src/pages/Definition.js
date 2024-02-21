import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NotFound from "../components/NotFound";
import DefinitionSearch from "../components/DefinitionSearch";

export default function Definition() {

  const [word, setWord] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  let {search} = useParams();
  const navigate = useNavigate();

  useEffect(
    () => {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`).
      then((response) => {
        if (response.status === 404){
          setNotFound(true);
        } else if (response.status === 500){
          navigate('/login');
        } else if (response.status === 501){
          setError(true)
        }

        if (!response.ok){
          setError(true);
        }


        else {return response.json()}
      
      })
      
      .then((data) => {
        setWord(data[0].meanings);
      })
    }
    ,[]
  );

  if (notFound === true) {
    return (
        <>
            <NotFound />
            <Link to="/dictionary">Search another</Link>
        </>
    );
}
  if (error === true){
    return (
      <>
        <p>Something went wrong</p>
        <Link to="/dictionary">Search another</Link>
      </>
    )
  }

  return (
    <>
        {word ? (
          <>
            <h1>Here is a definition:</h1>
            {word.map((meaning) => {
              return (
                <p key={uuidv4()}>
                  {meaning.partOfSpeech + ': '}
                  {meaning.definitions[0].definition}
                </p>
            );
            })}
            <p>Search again :</p>
            <DefinitionSearch/>
          </>
            ) : null}
    </>
  );
}
