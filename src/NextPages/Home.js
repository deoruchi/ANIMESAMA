import Sumaary from "../Components/Sumaary";
import { Link, Navigate } from "react-router-dom";
import "./Home.css";
import Items from "../Components/Items";
import { useEffect, useState } from "react";
import Image2 from "../Components/Image2";

export default function Home(props) {
  const d = props.references;

  const [summaries, setSummaries] = useState(null);
  const [color, setColor] = useState("");
  const [imgset, setImg] = useState({});
  const handleEvent2 = (ref) => {
    console.log(ref.current);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  function changeSummary(e, c, img) {
    console.log(e);
    setSummaries(e);
    setColor(c);
    setImg(img);
  }
  console.log(imgset);

  const f = d.map((c) => {
    return (
      <Image2
        images={c.imagefront}
        key={c.key}
        name={c.name}
        reference={c.reference}
        color={c.color}
        production={c.production}
        director={c.director}
        writer={c.writer}
        management={c.management}
        url={c.url}
      />
    );
  });
  return (
    <article className="section-body" style={{ color: `${color}` }}>
      <h1>ANIMEsama</h1>
      <Link to="/facts" className="fact-btn" title="Read anime quotes (●'◡'●)">
        Quotes
      </Link>

      <Sumaary sums={summaries}></Sumaary>
      <div className="scroll-image">{f}</div>
      <Items
        refs={d}
        funcc={props.funcc}
        funcsum={changeSummary}
        funcc2={handleEvent2}
        classChange={props.classChange}
        title="click to see the anime data"
      />
      <br></br>

      <div>Made with 💖 by Ruchi</div>
    </article>
  );
}
