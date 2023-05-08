import { useEffect, useState } from "react";

export default function Sumaary(props) {
  const [sim, setSummary] = useState();
  useEffect(() => {
    setSummary(props.sums);
  }, [props.sums]);

  console.log(props.sums);
  return (
    <>
      <p className="summary-pos-bl">
        {sim
          ? sim
          : "The Silent Voice is a poignant and introspective anime film that tells the story of a young boy named Shoya, who seeks redemption for his past bullying of a deaf girl named Shoko. As they navigate the complexities of adolescence and their own personal struggles, they find a way to communicate and form a deep bond, ultimately learning to accept and love themselves for who they are."}
      </p>
    </>
  );
}
