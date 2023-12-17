import React from "react";
import { NavLink, Outlet } from 'react-router-dom';
import { SidebarData } from "./SidebarData";
import MainContent from './MainContent';


function Navbar() {
    return (
        <>
            <nav className="nav-sidebar">
                <h2 className="nav-title">SexEd+</h2>
                <hr className="nav-hr"></hr>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className="nav-item">
                            <NavLink to={item.path} className={({isActive}) => isActive? 'nav-link nav-link-active': 'nav-link'}>
                                <span className="nav-icon">{item.icon}</span> <span>{item.title}</span>
                            </NavLink>
                        </li>
                    );
                })}
            </nav>
            <main className="main-content">
                <Outlet />
            
            </main>
        </>
    );
}

export default Navbar;