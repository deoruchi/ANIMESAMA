import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Naruto from "./Naruto.png";
import Home from "./Home.png";
import "./Fact.css";
export default function Facts() {
  const [p, setP] = useState([]);
  // const [term, setTerm] = useState();
  // const val = useRef();
  async function getData() {
    await fetch("https://animechan.vercel.app/api/quotes")
      .then((response) => response.json())
      .then((quotes) => {
        setP(quotes);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  // async function searchfunction() {
  //   const url = "https://animechan.vercel.app/api/random/character";
  //   if (term) {
  //     url += `?name=${term}`;
  //   }
  //   await fetch(url)
  //     .then((response) => response.json())
  //     .then((quote) => {
  //       console.log(quote);
  //       setP(quote);
  //     });
  // }

  return (
    <section className="quote-section">
      <Link to="/" className="fact-btn" title="home">
        <img
          src={Home}
          alt="return to the home page"
          className="imag-icon"
        ></img>
      </Link>
      <h1>Quotes from All Animes</h1>
      <br></br>
      {/* <div>
        <input
          value={term}
          ref={val}
          onChange={() => setTerm(val.current.value)}
        ></input>
        <button onClick={searchfunction}>Seach</button>
      </div> */}
      <div className="box-of-quotes">
        <ol>
          {p.map((items) => {
            return (
              <div>
                <h5 className="shine">{items.anime}</h5>
                <p>{items.quote}</p>
                <br></br>
              </div>
            );
          })}
        </ol>
      </div>
      <br></br>
      <button
        onClick={getData}
        className="button-style"
        title="click for more quotes"
      >
        <img src={Naruto} alt="narutokun"></img> Datebayo!!!
      </button>
    </section>
  );
}
