import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/104716546?v=4"}
          alt="Founder"
        />

        <h2>Shashank Rai</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/@-g-an3800" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.linkedin.com/in/shashankrai-8729b1184" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/shashank562000" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;