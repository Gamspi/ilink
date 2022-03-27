import {IUser} from "../models/IUser";
import Media from 'react-media';

const Usercard = ({userName}: IUser) => {
    return (
        <div className="user-card">
            <img src="/images/header/user.jpg" alt="User"/>
            <div className="user-card__data">
                <Media queries={{small:"(max-width: 790px)" }} >
                    {matches => matches.small?userName.split(' ')[0]:userName}
                </Media>

            </div>
        </div>
    )
}
export default Usercard