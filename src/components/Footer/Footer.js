import React from "react";
import "./Footer.css";

const Footer = () => {
   return (
      <div className="footer">
         <div className="container foo">
            <p>
               English - (UK) - বাংলা - অসমীয়া - हिन्दी नेपाली - Bahasa
               Indonesia العربية - 中文(简体) - Bahasa Melayu - Español
               Português - (Brasil)
            </p>
            <hr />
            <p>
               Sign - UpLog - InMessengerFacebook LiteWatchPlaces -
               GamesMarketplace - Facebook PayOculus - PortalInstagr -
               amBulletinLocal - FundraisersSer - vicesVoting Information -
               CentreGroupsAboutCreate - adCreate PageDevelopers - Careers -
               PrivacyCookiesAdChoices - TermsHelpContact uploading and -
               non-usersSettings
            </p>
            <p>Meta © 2022</p>
         </div>
         <div className="mobile">
            <div className="one">
               <span>English(UK)</span>
               <span>অসমীয়া</span>
               <span>Português - (Brasil)</span>
            </div>
            <div className="two">
               <span>বাংলা</span>
               <span>हिन्दी</span>
               <span>Español</span>
            </div>
         </div>
      </div>
   );
};

export default Footer;
