import Link from "next/link";
import {
  RiYoutubeLine,
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
  RiInstagramLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
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
    </div>
  );
};

export default Socials;
