import { useEffect, useState } from "react";

function CatFact() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  }, []);

  return <p class="fact">{fact}</p>;
}

export default CatFact;