import "./Images.css";

export default function Image2(props) {
  console.log(props.production);

  return (
    <div
      className="container-image"
      style={{ color: `${props.color}` }}
      ref={props.reference}
    >
      <img src={props.images} className="image_front"></img>
      <br></br>
      <p className="anime-name">{props.name}</p>

      <p className="about-the-director">
        production : {props.production ? props.production : "Kyoto Animation"}
        <br></br>
        director: {props.director ? props.director : "Naoko Yamada"}
        <br></br>
        writer: {props.writer ? props.writer : "Reiko Yoshida"}
        <br></br>management:
        {props.management ? props.management : "Pony Canyon"}
      </p>
      <a
        href={
          props.url ? props.url : "https://zoro.to/a-silent-voice-11?ref=search"
        }
        className="link"
      >
        Watch
      </a>
    </div>
  );
}
