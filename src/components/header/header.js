import React from "react";
import "./header.module.css";
import s from "./header.module.css"
import {NavLink, Route} from "react-router-dom";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.items_center}>
                <img src="https://instagram.fppk1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/69513615_2356087021270625_4423425107783843840_n.jpg?tp=1&_nc_ht=instagram.fppk1-1.fna.fbcdn.net&_nc_ohc=EKLI_c2vidgAX9-IenI&tn=LAA7FV1She_6NKux&edm=ABfd0MgBAAAA&ccb=7-4&oh=47e1554eb8b4e5d5ea84cba014a57569&oe=60D46B4B&_nc_sid=7bff83" alt="logo"/>
                <div className={s.navbar}>
                    <ul>
                        <li>Menu</li>
                        <li>Coffee</li>
                        <li>About us</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;