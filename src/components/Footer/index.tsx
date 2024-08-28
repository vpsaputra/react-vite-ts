import applabLogo from "@assets/applab.png";
import SocialGroup from "../SocialGroup";
function Footer() {
  return (
    <>
      <div className="footer">
        <img src={applabLogo} alt="" />
        <div className="nav-group gap2">
          <a href="">Home</a>
          <a href="">Key Features</a>
          <a href="">Pricing</a>
          <a href="">Testimonial</a>
          <a href="">FAQ</a>
        </div>
        <SocialGroup></SocialGroup>
        <span>
          Copyright© design by Arifur Rahman Tushar 2019 from{" "}
          <a href="www.freebiesbug.com/psd/web-template">FreeBiesBug</a>. <br />
          Live web page implemented by{" "}
          <a href="www.vpsaputra.my.id">Piki Saputra</a>. <br /> All rights
          reserved
        </span>
      </div>
    </>
  );
}

export default Footer;
