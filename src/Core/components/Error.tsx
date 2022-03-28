import React,{FC} from "react";
import fail from "../images/massages/error/fail.svg"
import red from "../images/massages/error/Red bubbles.png"
import {useAction} from "../hooks/usaAction";
import cross from '../images/cross.svg'
const Error: FC = () => {
    const {setIsError} = useAction()

    return (
        <div className="error">
            <img className='error__image' src={fail} alt=""/>
            <img className='error__bg-image' src={red} alt=""/>
            <div className="error__container">
                <div className="error__content">

                    <div className="error__title" >
                        <h3>Что-то не так...</h3>

                    </div>
                    <div className="error__massage">
                        <p>Не получилось отправить отзыв. Попробуйте еще раз!</p>

                    </div>

                </div>
                <button onClick={() => setIsError(false)}>
                    <img src={cross} alt=""/>
                </button>

            </div>

        </div>
    )
}
export default Error