import { useEffect, useState } from "react";
import CatSpinner from "../CatSpinner/CatSpinner";

function CatImage() {
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://catfacts-api.fly.dev/cat-image")
      .then((res) => res.json())
      .then((data) => {
        setImage(data.url)
        setIsLoading(false);
      });
  }, []);

  return (
    <>
 {isLoading ? (
        <div className="spinner-box">
          <CatSpinner />
        </div>
      ) : ( 
        <p className="cat-image"><img src={image} alt="icons" /></p>
      )}
    </>
  )
}

export default CatImage;