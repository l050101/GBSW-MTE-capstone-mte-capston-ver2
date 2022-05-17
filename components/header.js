import React from "react";
// import "../styles/header.css"
import { WbSunny, Menu, Search } from '@mui/icons-material';
export const Header = () => {
    return(
        <div className="header">
            <div className="left">
                <ul>
                    <li className="localName">Useong</li>
                    <li className="nowTab">news</li>
                    <li className="nowDate">화요일</li>
                    <li className="nowTime">12:11:52</li>
                    <li> <WbSunny className="icon" /> </li>
                    {/* test router link */}
                    <li><Link to="/"> go home </Link></li>
                    <li><Link to="/board"> go board </Link></li>
                </ul>
            </div>
            <div>
                <Menu className="lightIcon icon" onClick={()=>{console.log("click Menu!")}} />
                <Search className="lightIcon icon" onClick={()=>{console.log("click Search")}}/>
            </div>
        </div>
    )
}
export default Header;