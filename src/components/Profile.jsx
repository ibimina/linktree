import React from "react";

export default function Profile() {
  return (
    <section className="profile_section">
      <div>
        <div id="profile_img">
           <img src="./assets/cam.svg" alt="" className="cam" />
        </div>
        <p id="twitter">IbiminaaH</p>
        <p id="ibimina" hidden>
          ibimina
        </p>
      </div>
      <div className="share-wrap">
        <div className="tool-tip">
          <span>Share link</span>
          <img src="./assets/bottom-center.svg" alt="" className="arrow" />
        </div>
        <picture className="share">
          <source
            srcset="./assets/share-default.svg"
            media="(min-width:40rem)"
          />
          <img src="./assets/default-dot.svg" alt="" />
        </picture>
      </div>
    </section>
  );
}
