import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  const socialMediaLinks = [

    {
      platform: 'Github',
      link: 'https://github.com/eternal-elegance',
      icon: <GithubIcon />
    },
    {
      platform: 'Facebook',
      link: '',
      icon: <FacebookIcon />
    },
    {
      platform: 'Linkdin',
      link: '',
      icon: <LinkedInIcon />
    },
    {
      platform: 'Instagram',
      link: 'https://www.instagram.com/',
      icon: <InstagramIcon />
    },
    {
      platform: 'Twitter',
      link: '',
      icon: <TwitterIcon />
    }
  ]




  return (
    <div className="footer">
      <h2>Find me on</h2>
      <div className="socialMedia">
        {
          socialMediaLinks.map((social) => (
            <a href={social.link} target={"_blank"}>
              {social.icon}
            </a>
          ))
        }
      </div>
      <p> &copy; 2023 designed and developed by Anurag Banerjee</p>
    </div>
  );
}

export default Footer;
