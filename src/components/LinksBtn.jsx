import React from "react";

export default function LinksBtn() {
  const links = [
    {
      text: "Twitter Link",
      id: "btn__twitter",
      href: "https://twitter.com/ibiminaaH",
    },
    {
      text: "Zuri Team",
      id: "btn__zuri",
      href: "https://training.zuri.team/",
    },
    {
      text: "Zuri Books",
      id: "books",
      href: "https://books.zuri.team",
      title: "A library of Design and Coding Books",
    },
    {
      text: "Python Books",
      id: "book__python",
      href: "https://books.zuri.team/python-for-beginners?ref_id=ibimina",
    },
    {
      text: "Background Check for Coders",
      id: "pitch",
      href: "https://background.zuri.team",
    },
    {
      text: "Design Books",
      id: "book__design",
      href: "https://books.zuri.team/design-rules",
    },
  ];
  return (
    <div className="link_div">
      {links.map((link) => (
        <a
          href={link.href}
          target="_blank"
          rel="noreferrer"
          id={link.id}
          className="btn"
          key={link.id}
          title={link.title}
        >
          {link.text}
        </a>
      ))}
      <div className="social_icon">
        <img src="/assets/slack.svg" alt="slack icon" />
        <img src="/assets/github.svg" alt="github icon" />
      </div>
    </div>
  );
}
