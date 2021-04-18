import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterColumn from '../FooterColumn/FooterColumn';
import brandLogo from '../../../images/brandLogo.png';

const Footer = () => {
    const painter = [
        {name: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here." , link: "/description"}
    ]
    
    const links = [
        {name: "About" , link: "/about"},
        {name: "Services" , link: "/services"},
        {name: "Our Team" , link: "/ourTeam"},
        {name: "Our Gallery" , link: "/ourGallery"},
        {name: "Contact" , link: "/contact"}
    ]
    const services = [
        {name: "Room Wallpaper" , link: "/roomWallpaper"},
        {name: "Wall Painting" , link: "/wallPainting"},
        {name: "Wall Sheets" , link: "/wallSheets"},
        {name: "Outdoor Designs" , link: "/outdoorDesigns"},
        {name: "PVC Panels" , link: "/pvcPanels"},
        {name: "Interior Designs" , link: "/interiorDesigns"}
    ]
    const contact = [
        {name: "666 888 0000"},
        {name: "needhelp@painter.com" , link: "needhelp@painter.com"},
        {name: "77 Broklyn Street, USA" , link: "//google.com/map"}
       
    ]
    return (
        <footer className="footer-area  container mt-5 mb-4">
            <div className="container pt-3">
                <div className="row py-3">
                    <FooterColumn key={1} menuTitle={<img style={{width: "130px"}} src={brandLogo}/>} menuItems={painter}></FooterColumn>
                    <FooterColumn key={3} menuTitle="Link" menuItems={links}></FooterColumn>
                    <FooterColumn key={2} menuTitle="Services" menuItems={services}></FooterColumn>
                    <FooterColumn key={4} menuTitle="Contact" menuItems={contact}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        </FooterColumn>
                </div>
                <div className="copyRight text-center py-3">
                    <p> <small> Copyright {(new Date()).getFullYear()} All Rights Reserved </small></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;