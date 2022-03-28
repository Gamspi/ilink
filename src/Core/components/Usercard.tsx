import {IUser} from "../models/IUser";
import Media from 'react-media';
import user from "../images/header/user.jpg"

const Usercard = ({userName}: IUser) => {
    return (
        <div className="user-card">
            <img src={user} alt="User"/>
            <div className="user-card__data">
                <Media queries={{small:"(max-width: 790px)" }} >
                    {matches => matches.small?userName.split(' ')[0]:userName}
                </Media>

            </div>
        </div>
    )
}
export default Usercard