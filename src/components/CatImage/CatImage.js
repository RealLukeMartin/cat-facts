import { useEffect, useState } from "react";
import CatSpinner from "../CatSpinner/CatSpinner";

function CatImage() {
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchImage = async () => {
    const res = await fetch("https://cataas.com/cat");
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    return imageObjectURL;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const imageURL = await fetchImage();
      setImage(imageURL);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // return <p class="image"><img src={image} alt="icons" /></p>;
  return (
    <>
 {isLoading ? (
        <div class="spinner-box">
          <CatSpinner />
        </div>
      ) : ( 
        <p class="image"><img src={image} alt="icons" /></p>
      )}
    </>
  )
}

export default CatImage;