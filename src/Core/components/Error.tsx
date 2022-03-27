import {FC} from "react";
import {useAction} from "../hooks/usaAction";

const Error: FC = () => {
    const {setIsError} = useAction()

    return (
        <div className="error">
            <img className='error__image' src="/images/massages/error/fail.svg" alt=""/>
            <img className='error__bg-image' src="/images/massages/error/Red bubbles.png" alt=""/>
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
                    <img src="/images/cross.svg" alt=""/>
                </button>

            </div>

        </div>
    )
}
export default Error