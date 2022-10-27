import React from 'react'

export default function LinksBtn() {
   const links = [
     {
       text: "twitter link",
       id: "btn_twitter",
       href: "https://twitter.com/ibiminaaH",
     },
     { text: "zuri team", id: "btn_zuri", href: "https://training.zuri.team/" },
     { text: "zuri books", id: "books", href: "https://books.zuri.team" },
     {
       text: "python books",
       id: "book_python",
       href: "https://books.zuri.team/python-for-beginners?ref_id=ibimina",
     },
     {
       text: "background check for coders",
       id: "pitch",
       href: "https://background.zuri.team",
     },
     {
       text: "design books",
       id: "book_design",
       href: "https://books.zuri.team/design-rules",
     },
   ];
  return (
    <div className="link_div">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              id={link.id}
              className="btn"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      <div className="social_icon">
        <img src="/assets/slack.svg" alt="slack icon" />
        <img src="/assets/icon.svg" alt="github icon" />
      </div>
    </div>
  );
}
