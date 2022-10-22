import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="flex  flex-col justify-center h-12 p-1 bg-white shadow-lg-costume !bottom-0 text-gray-500">
      <div>
        <a className="fa-brands fa-github" href="https://github.com/khorshidhoseiny">
          <FontAwesomeIcon icon="fa-brands fa-github" />
        </a>
        <a href="">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </a>
        <a className="fa-solid fa-envelope" href="">
        <FontAwesomeIcon icon="fa-solid fa-envelope" />
        </a>
      </div>
      <div className="flex justify-center items-center">
        <h6 className="text-xs text-slate-300">developed by sun</h6>
      </div>
    </div>
  );
};

export default Footer;
