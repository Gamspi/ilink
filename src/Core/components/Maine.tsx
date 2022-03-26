import {FC} from "react";
import UserInfo from "./Userinfo";
import Reviews from "./Reviews";

const Maine: FC = () => {
    return (
        <div className='maine'>
            <div className="container">
                <div className="maine__title">
                    <h1>Добро пожаловать в академию!</h1>
                </div>
                <UserInfo/>
                <Reviews/>
            </div>
        </div>
    )
}
export default Maine;