import Home from "./Home";
import Images from "../Components/Images";
import Image1 from "../images_folder/font_silent.png";
import Image2 from "../images_folder/front_bluep.png";
import Image3 from "../images_folder/front_garden.png";
import Image4 from "../images_folder/front_gojo.png";
import "./Home.css";

import { useEffect, useState, useRef } from "react";
export default function Home2() {
  const sec1 = useRef();
  const sec2 = useRef();
  const sec3 = useRef();
  const sec4 = useRef();

  const handleEvent = (ref) => {
    console.log(ref.current);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const image = [
    {
      class: "image1",
      name: "Silent Voice",
      imagefront: Image1,
      reference: sec1,
      production: "Kyoto Animation",
      director: "Naoko Yamada",
      writer: "Reiko Yoshida",
      management: "Pony Canyon",
      sum: "The Silent Voice is a poignant and introspective anime film that tells the story of a young boy named Shoya, who seeks redemption for his past bullying of a deaf girl named Shoko. As they navigate the complexities of adolescence and their own personal struggles, they find a way to communicate and form a deep bond, ultimately learning to accept and love themselves for who they are.",
      color: "white",
      url: "https://zoro.to/a-silent-voice-11?ref=search",
      key: 1,
    },
    {
      class: "image2",
      name: "Blue Period",
      imagefront: Image2,
      reference: sec2,
      production: "Seven Arcs",
      director: "Koji Masunari",
      writer: "Reiko Yoshida",
      management: "Netflix",
      sum: "Blue Period follows Yatora, a talented but aimless high school student who discovers his passion for art after being inspired by a painting in a museum. He decides to attend an elite art school and works tirelessly to hone his skills and find his own artistic voice, all while navigating complex relationships and the pressures of the competitive art world.",
      color: "white",
      url: "https://zoro.to/blue-period-17427?ref=search",
      key: 2,
    },
    {
      class: "image3",
      name: "Garden of Words",
      imagefront: Image3,
      reference: sec3,
      production: "CoMix Wave Films",
      director: "Makoto Shinkai",
      writer: "Makoto Shinkai",
      management: "Toho",
      sum: "The Garden of Words is a stunningly beautiful anime film that tells the story of a high school student named Takao who dreams of becoming a shoemaker. He meets a mysterious woman named Yukari in a garden on a rainy day, and they form a bond that transcends age and circumstance. As they struggle with their own personal challenges, they find solace in each other's company and the simple beauty of nature.",
      color: "white",
      url: "https://zoro.to/the-garden-of-words-414?ref=search",
      key: 3,
    },
    {
      class: "image4",
      imagefront: Image4,
      name: "JiJutsu Kaisen",
      reference: sec4,
      production: "MAPPA",
      director: "Sunghoo Park",
      writer: "Hiroshi Seko",
      management: "Crunchyroll",
      sum: "In Jujutsu Kaisen high school student Yuji Itadori becomes a Jujutsu Sorcerer after ingesting a powerful cursed object to save his friends. He enrolls in a special school for sorcerers and teams up with his classmates to exorcise cursed spirits and protect humanity from supernatural threats. As they uncover dark secrets and face powerful foes, they learn the true meaning of friendship and sacrifice.",
      color: "white",
      url: "https://zoro.to/jujutsu-kaisen-tv-534?ref=search",
      key: 4,
    },
  ];

  const [classImag, setClassImg] = useState();
  const changeClass = (e) => {
    setClassImg(e);
  };

  return (
    <article className="have-images">
      <Images classImage={classImag}></Images>
      <Home
        references={image}
        funcc={handleEvent}
        imgh={image}
        classChange={changeClass}
      />
    </article>
  );
}
