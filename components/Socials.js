import Link from "next/link";
import {
  RiYoutubeLine,
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
  RiInstagramLine,
} from "react-icons/ri";

import { TbBookDownload } from "react-icons/tb";

import { IoMailOutline } from "react-icons/io5";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
    <div className="flex items-center"> {/* Wrap icon and text in a div */}
    <Link
    href={"https://drive.google.com/drive/folders/1GS9nS6_XqZxYiOgrSFf148_aTWywo9Iu?usp=sharing"}
    target="blank"
    className="flex items-center hover:text-accent transition-all duration-300"
    >
          <span style={{ marginRight: '5px' }}>Download CV</span> {/* Text beside the icon */}
        <TbBookDownload />
    </Link>
  </div>


      <Link
        href={"https://www.facebook.com/54k1N"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://github.com/saberSakin"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.instagram.com/saber.sakin/"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/saber-sakin-287a70218/"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"mailto:md.shakin18@gmail.com"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <IoMailOutline />
      </Link>
    </div>
  );
};

export default Socials;
