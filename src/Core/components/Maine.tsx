import {FC} from "react";
import UserInfo from "./Userinfo";
import Reviews from "./Reviews";
import {useTypeSelector} from "../hooks/useTypeSelector";
import Error from "./Error";
import Success from "./Success";

const Maine: FC = () => {
    const {isError, isSuccess} = useTypeSelector(state => state.reducer)
    return (
        <div className='maine'>
            <img className='maine__background' src="/images/maine/Vector.svg" alt=""/>
            <img className='maine__background' src="/images/maine/Vector.svg" alt=""/>
            <div className="container">
                <div className="maine__title">
                    <h1>Добро пожаловать в академию!</h1>
                </div>
                <UserInfo/>
                <Reviews/>
                {isError&&<Error/>}
                {isSuccess&&<Success/>}
            </div>
        </div>
    )
}
export default Maine;