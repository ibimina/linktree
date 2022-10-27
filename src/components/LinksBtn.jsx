import React from 'react'

export default function LinksBtn() {
   const links = [
     {
       text: "Twitter Link",
       id: "btn_twitter",
       href: "https://twitter.com/ibiminaaH",
     },
     { text: "Zuri Team", id: "btn_zuri", href: "https://training.zuri.team/" },
     { text: "Zuri Books", id: "books", href: "https://books.zuri.team" },
     {
       text: "Python Books",
       id: "book_python",
       href: "https://books.zuri.team/python-for-beginners?ref_id=ibimina",
     },
     {
       text: "Background Check for Coders",
       id: "pitch",
       href: "https://background.zuri.team",
     },
     {
       text: "Design Books",
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
              aria-disabled
            >
              {link.text}
              {/* <img
                src="./assets/share-default.svg"
                alt=""
                className="link-share"
              /> */}
            </a>
          </li>
        ))}
      </ul>

      <div className="social_icon">
        <img src="/assets/slack.svg" alt="slack icon" />
        <img src="/assets/github.svg" alt="github icon" />
      </div>
    </div>
  );
}
