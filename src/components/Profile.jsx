import React from "react";

export default function Profile() {
  return (
    <section className="profile_section">
      <div>
        <div id="profile_img"></div>
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

        <button className="share"></button>
      </div>
    </section>
  );
}
