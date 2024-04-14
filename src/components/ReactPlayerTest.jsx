import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import "./ReactPlayer.css";

import CloseIcon from "@mui/icons-material/Close";

const ReactPlayerTest = ({
  url,
  closable = false,
  demoViewer,
  setDemoViewer,
}) => {
  return closable ? (
    demoViewer && (
      <div className="fixed inset-0 bg-black bg-opacity-80 w-screen h-screen z-20 flex items-center justify-center">
        <button
          className="fixed right-0 top-0 bg-white bg-opacity-30 hover:bg-red-500  w-10 text-2xl z-20"
          onClick={() => setDemoViewer(false)}
        >
          <CloseIcon fontSize="large" className="text-white" />
        </button>

        <ReactPlayer
          className=""
          width="100%"
          height="90%"
          url={url}
          controls={true}
          playing={false}
          playsinline={true}
        />
      </div>
    )
  ) : (
    <div className="w-full h-full flex items-center justify-center smallPlayer ">
      <ReactPlayer 
        width="90%"
        height="90%"
        url={url}
        controls={true}
        playing={false}
        playsinline={true}
      />
    </div>
  );
};

export default ReactPlayerTest;
