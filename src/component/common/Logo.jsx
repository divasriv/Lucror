import React from "react";
import { Link } from 'react-router-dom' 
import logoforweb from "../images/logo/Logo-for-web_jan29-2.png";

export const Logo = () => (
    <div className="logo">
        <Link to="/">
            <img src={logoforweb} alt="Lucror"/>
        </Link>
    </div>
)

