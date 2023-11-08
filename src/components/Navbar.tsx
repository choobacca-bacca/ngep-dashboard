import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
 
                <NavMenu>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                    <NavLink to="/goals">
                        Goals
                    </NavLink>
                    <NavLink to="/metrics">
                        Metrics
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/feedback">
                        Feedback
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};
 
export default Navbar;