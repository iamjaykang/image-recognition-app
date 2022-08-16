import { useState } from "react";
import { useEffect } from "react";
import { PickerOverlay } from "filestack-react-18";

export default function ImageUploader() {
  const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleVisible = () => {
    setIsPickerOverlayVisible(!isPickerOverlayVisible);
  };

  return (
    <div>
      <div>
        <button onClick={handleVisible} className="sendPhotoBtn">
          {" "}
          <p>Send Photo</p>
        </button>
        <div>
          {isPickerOverlayVisible && (
            <PickerOverlay
              apikey="AveurFedWTneZdLJ9481Bz"
              onSuccess={(result) => {
                setImageUrl(result.filesUploaded[0].url);
                console.log(result.filesUploaded[0].url);
                fetch("http://localhost:3001/api/upload", {
                  method: "POST",
                  headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                  },
                  // We convert the React state to JSON and send it as the POST body
                  file: JSON.stringify({Submission: result.filesUploaded[0].url}),
                }).then(function (response) {
                  console.log(response);
                  return response.json();
                });
                setIsPickerOverlayVisible(false);
              }}
            />
          )}
        </div>
        {/* you need to store this url to your database */}
        <img src={imageUrl}></img>
      </div>
    </div>
  );
}
