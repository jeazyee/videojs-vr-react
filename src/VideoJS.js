import React, { useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./assets/videojs.vr.min.css";
import "./assets/videojs.vr";

export default function VideoJS({ playerId, source, isAppleDevice }) {
  var videojs_player = null;
  useEffect(() => {
    videojs_player = videojs(playerId);
    videojs_player.vr({
      projection: 360,
      nav: false
    });

    return () => {
      videojs_player.dispose();
      videojs_player = null;
    };
  }, []);

  return (
    <div className="media-parent">
      <div className="media-child">
        <video
          id={playerId}
          className="video-js vjs-fluid vjs-default-skin"
          controls
          preload
          playsInline
          webkit-playsinline="true"
          webkit-playsinline
          crossOrigin="anonymous"
        >
          <source src={source} type="video/mp4" />
        </video>
      </div>
    </div>
  );

  return (
    <div className="media-parent">
      <div
        className="media-child"
        dangerouslySetInnerHTML={{
          __html: `
                <video id="${playerId}" class="video-js vjs-fluid vjs-default-skin" controls preload playsinline="true" webkit-playsinline="true" webkit-inline="true" playsinline webkit-playsinline webkit-inline crossorigin="anonymous">
                    <source src="${source}" type="application/x-mpegurl" />
                </video>
                `
        }}
      />
    </div>
  );
}
