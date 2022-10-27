import React from "react";

export default function Profile() {
  return (
    <section className="profile_section">
      <img
        src="/assets/device=Mobile, state=Default.png"
        alt="Annette Black"
        id="profile_img"
      />
      <button className="share"></button>
      <p id="twitter">IbiminaaH</p>
      <p id="ibimina" hidden>
        ibimina
      </p>
    </section>
  );
}
