import {FC, useContext} from "react";
import Usercard from "./Usercard";
import {newContext} from "../Core";
import Media from "react-media";
import logo from '../images/header/logo.svg'
import profile from '../images/Profile.svg'

const Header: FC = () => {
    const {userName} = useContext(newContext)

    return (
        <div className="header">
            <div className="container">
                <div className="header__row">
                    <Usercard userName={userName}/>
                    <div className="Header__logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="Header__btn">
                        <a href="/"><button style={{

                        }}>
                            <Media queries={{small:"(max-width: 790px)" }} >
                                {matches => matches.small?< img src = {profile} alt=""/>:"Личный кабинет"}
                            </Media>
                        </button></a>
                    </div>

                </div>

            </div>
        </div>

    )
}
export default Header;