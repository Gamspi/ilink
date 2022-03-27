import {FC, useContext} from "react";
import Usercard from "./Usercard";
import {newContext} from "../Core";
import Media from "react-media";

const Header: FC = () => {
    const {userName} = useContext(newContext)

    return (
        <div className="header">
            <div className="container">
                <div className="header__row">
                    <Usercard userName={userName}/>
                    <div className="Header__logo">
                        <img src="/images/header/logo.svg" alt=""/>
                    </div>
                    <div className="Header__btn">
                        <a href="/"><button style={{

                        }}>
                            <Media queries={{small:"(max-width: 790px)" }} >
                                {matches => matches.small?< img src = "/images/Profile.svg" alt=""/>:"Личный кабинет"}
                            </Media>
                        </button></a>
                    </div>

                </div>

            </div>
        </div>

    )
}
export default Header;