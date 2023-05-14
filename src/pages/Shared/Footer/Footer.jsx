import { BsGoogle, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex justify-center bg-[#1E1E1E]">
      <footer className="footer text-base-100 py-28 lg:w-[1280px]">
        <div className="flex flex-col gap-5">
          <div>
            <img src="/assets/logo.svg" alt="" />
          </div>
          <p>
            Edwin Diaz is a software and web <br /> technologies engineer, a
            life coach <br /> trainer who is also a serial.
          </p>
          <div className="flex gap-2">
            <div className="rounded-full p-2 bg-[#2c2c2c] text-2xl">
              <BsGoogle />
            </div>
            <div className="rounded-full p-2 bg-[#2c2c2c] text-2xl">
              <BsTwitter />
            </div>
            <div className="rounded-full p-2 bg-[#2c2c2c] text-2xl">
              <BsInstagram />
            </div>
            <div className="rounded-full p-2 bg-[#2c2c2c] text-2xl">
              <BsLinkedin />
            </div>
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
