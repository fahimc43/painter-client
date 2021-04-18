import React from 'react';
import { Link } from 'react-router-dom';

const FooterColumn = (props) => {
    return (
        <div className="col-md-3">
            <h4 style={{color: "white"}}>{props.menuTitle ? props.menuTitle : " "}</h4>
            <ul className="list-unstyled mt-4">
                 {
                     props.menuItems.map((item, index) => <li key={index}> <small> <Link style={{ textDecoration: 'none', color: "#F6F2EB" }} to={item.link}>{item.name}</Link> </small></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterColumn;