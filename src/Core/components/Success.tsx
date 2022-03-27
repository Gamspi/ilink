import {FC} from "react";
import {useAction} from "../hooks/usaAction";

const Success: FC = () => {
    const {setIsSuccess} = useAction()
    return (
        <div className="success">
            <img className='success__image' src="/images/massages/success/success.svg" alt=""/>
            <img className='success__bg-image' src="/images/massages/success/green bubbles.png" alt=""/>
            <div className="success__container">

                <div className="success__content">
                    <div className="success__title">
                        <h3>Успешно!</h3>

                    </div>
                    <div className="success__massage">
                        <p>Спасибо за отзыв о нашей компании :)</p>
                    </div>
                </div>
                <button onClick={() => setIsSuccess(false)}>
                    <img src="/images/dcross.svg" alt=""/>
                </button>

            </div>
        </div>
    )
}
export default Success