import {IUser} from "../models/IUser";

const Usercard = ({userName}: IUser) => {
    return (
        <div className="user-card">

            <img src="/images/header/user.jpg" alt="User"/>

            <div className="user-card__data">
                {userName}
            </div>
        </div>
    )
}
export default Usercard