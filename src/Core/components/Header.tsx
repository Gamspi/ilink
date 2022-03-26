import {FC, useContext} from "react";
import Usercard from "./Usercard";
import {newContext} from "../Core";

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
                        <button>Личный кабинет</button>
                    </div>

                </div>

            </div>
        </div>

    )
}
export default Header;