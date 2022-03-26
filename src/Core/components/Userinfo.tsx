import {FC, useContext} from "react";
import {newContext} from "../Core";

const Userinfo: FC = () => {
    const {userName, birthday} = useContext(newContext)
    return (
        <div className='user-info'>
            <div className="user-info__image">
                <img src="/images/header/user.jpg" alt=""/>

            </div>
            <div className="user-info__body">
                <div className="user-info__title">
                    <h2 className="user-info__text">
                        {userName}
                    </h2>
                    <div className="user-info__birthday">
                        {birthday}
                    </div>
                </div>
                <div className="user-info__data">
                    <div className="user-info__city">
                        <span><b>Город: </b> Томск</span>
                    </div>
                    <div className="user-info__gender">
                        <span><b>Пол: </b> Мужской</span>
                        <img src="/images/maine/man.svg" alt=""/>
                    </div>
                    <div className="user-info__age">
                        <span><b>Возраст: </b> 29</span>
                    </div>
                </div>
                <div className="user-info__about">
                    <p><b>О себе:</b> Всем привет! Меня зовут Николай, мне 29 лет. Изучаю програмирование, хочу стать
                        мастером своего дела. Так же есть небольшое хобби. Рисую в технике азрографии! </p>
                </div>
                <div className="user-info__pet">
                    <img src="/images/maine/pet.svg" alt=""/>
                    <p><b>Домашнее животное: </b>нет</p>
                </div>
            </div>
        </div>
    )

}
export default Userinfo