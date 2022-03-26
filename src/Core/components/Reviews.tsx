import {createContext, FC, MouseEventHandler, useState} from "react";
import Reviewscard from "./Reviewscard";
import {reviews} from "../constants/reviews";
import Newreview from "./Newreview";


const Reviews: FC = () => {
    const [isNewReview, setIsNewReview] = useState(false)
    const [comment, setСomment] = useState(0)
    const handlerComments = (arg:number)=> {

            setСomment(comment + arg)

    }
    console.log(comment)
    return (
        <div className="reviews">
            {isNewReview && <Newreview/>}
            <div className="reviews__body">
                <div className="reviews__title">
                    <div className="reviews__title-text">
                        <h2>Отзывы</h2>
                    </div>
                    <button className="reviews__title-btn" onClick={()=>{
                        setIsNewReview(!isNewReview)
                    }}>
                        + Добавить отзыв
                    </button>
                </div>
                <div className="reviews__cards">
                    {reviews.slice(comment, comment + 2).map((rev, index) => (
                        <Reviewscard key={rev.userName + index}
                                     userName={rev.userName}
                                     text={rev.text}
                                     img={rev.img}
                                     date={rev.date}
                        />
                        ))}
                </div>
                {
                }
                <div className="slider"></div>
            </div>
            <div className="reviews__btn">
                <button disabled={!comment} onClick={()=>{handlerComments(-1)}}>&larr;</button>
                <button disabled={comment>=reviews.length-2} onClick={()=>{handlerComments(1)}}>&rarr;</button>
            </div>
        </div>
    )
}
export default Reviews