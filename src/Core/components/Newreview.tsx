import {useState} from "react";

const Newreview = () => {
    const [textLength, setTextLength] = useState(0)
    return (
        <div className='newReview'>
            <div className="newReview__body">
                <div className="newReview__title">
                    <h2>Отзыв</h2>
                    <button>X</button>
                </div>
                <form className='newReview__inputs'>
                    <h3>Как вас зовут?</h3>
                    <div className='newReview__input-name'>
                        <input type="text" placeholder='Имя Фамилия'/>
                        <button>+ Загрузить фото</button>
                    </div>
                    <h3>Все ли вам понравилось?</h3>
                    <div className='newReview__inputReview'>
                        <textarea
                            maxLength={200}
                            placeholder='Напишите пару слов о вашем опыте...'
                            onChange={event => setTextLength(event.target.value.length)}
                        />
                        <div className="newReview__text-length"> {textLength}/200</div>

                    </div>
                    <div className='newReview__footer'>
                        <button type='submit'>Отправить отзыв</button>
                        <p>Все отзывы проходят модерацию в течение 2 часов</p>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Newreview