import { Box } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import "./sh.css";

// TypeScript declaration for the YT object
declare const YT: any;

interface ShortsData {
  id: string;
  src: string;
  iframe: string;
}

const Shorts: React.FC = () => {
  const [shorts, setShorts] = useState<ShortsData[]>([]);
  const playersRef = useRef<{ [key: string]: any }>({}); // Store YT.Player instances
  const currentPlayingIdRef = useRef<string | null>(null); // Store the currently playing video's ID

  useEffect(() => {
    const fetchShorts = async () => {
      try {
        const response = await fetch(
          "https://6d548820c3f18dbd.mokky.dev/Shorts"
        );
        const data = await response.json();
        setShorts(data);
      } catch (error) {
        console.error("Error fetching shorts data:", error);
      }
    };

    fetchShorts();
  }, []);

  useEffect(() => {
    // Ensure the YouTube IFrame API script is loaded
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLIFrameElement>,
    id: string
  ) => {
    const iframe = event.currentTarget;

    if (YT && YT.Player) {
      // Pause currently playing video
      if (
        currentPlayingIdRef.current &&
        playersRef.current[currentPlayingIdRef.current]
      ) {
        playersRef.current[currentPlayingIdRef.current].pauseVideo();
      }

      // Create a new player for the hovered iframe
      const player = new YT.Player(iframe, {
        events: {
          onReady: (event: any) => {
            // Play the video and restart it from the beginning
            event.target.seekTo(0);
            event.target.playVideo();
            currentPlayingIdRef.current = id;
            playersRef.current[id] = event.target;
          },
        },
      });
    }
  };

  const handleMouseLeave = (
    event: React.MouseEvent<HTMLIFrameElement>,
    id: string
  ) => {
    const iframe = event.currentTarget;

    if (YT && YT.Player && playersRef.current[id]) {
      playersRef.current[id].pauseVideo(); // Pause the video when hover ends
    }
  };

  return (
    <div className="shorts-page">
      <div className="flex justify-center">
        <div>
          {shorts.map((short) => (
            <Box key={short.id}>
              <iframe
                className="iframe"
                style={{
                  marginBottom: "20px",
                  borderRadius: "15px",
                  border: "none",
                }}
                width="300"
                height="500"
                src={`${short.iframe}?enablejsapi=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1`}
                allow="autoplay"
                onMouseEnter={(e) => handleMouseEnter(e, short.id)}
                onMouseLeave={(e) => handleMouseLeave(e, short.id)}
              ></iframe>
            </Box>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shorts;
