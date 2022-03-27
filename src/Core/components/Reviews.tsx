import {FC, useState} from "react";
import Reviewscard from "./Reviewscard";
import Newreview from "./Newreview";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useAction} from "../hooks/usaAction";
import Media from "react-media";


const Reviews: FC = () => {
    const {isPageNewReview, reviews} = useTypeSelector(state => state.reducer)
    const {setIsPageNewReview} = useAction()
    const [comment, setСomment] = useState(0)
    const [page, setPage] = useState(2)
    const [opacity, setOpacity] = useState(false)
    const handlerComments = (arg: number) => {
        setСomment(comment + arg)
    }
    return (
        <div className="reviews">
            {isPageNewReview && <Newreview/>}
            <div className="reviews__body">
                <div className="reviews__title">
                    <div className="reviews__title-text">
                        <h2>Отзывы</h2>
                    </div>
                    <button className="reviews__title-btn" onClick={() => {
                        setIsPageNewReview(true)
                    }}>
                        <Media queries={{small: "(max-width: 730px)"}}>
                            {matches => matches.small ? "+" : "+   Добавить отзыв"}
                        </Media>
                    </button>
                </div>

                <div className="reviews__cards" style={opacity ? {opacity: 0} : {opacity: 1}}>

                    {reviews.slice(comment, comment + page).map((rev, index) => (
                        <Reviewscard key={rev.userName + index}
                                     userName={rev.userName}
                                     text={rev.text}
                                     img={rev.img}
                                     date={rev.date}
                        />
                    ))}

                </div>
                <div className="reviews__sliders">
                    {reviews.map((rew, index) => {
                                if (index === reviews.length - 1) {
                                    return null
                                } else {
                                    return <button key={index + '12341'} type='button'
                                                   className={`reviews__slider reviews__slider${index === comment && '_activ'}`}
                                                   onClick={() => {
                                                       setOpacity(true)
                                                       setTimeout(
                                                           () => {
                                                               setСomment(index)
                                                               setOpacity(false)
                                                           }, 200
                                                       )
                                                   }}>
                                    </button>
                                }

                            }
                        )
                    }
                </div>
            </div>
            <div className="reviews__btn">
                <button disabled={!comment} onClick={() => {
                    setOpacity(true)
                    setTimeout(
                        () => {
                            handlerComments(-1)
                            setOpacity(false)
                        }, 200
                    )
                }}>&larr;</button>
                <button disabled={comment >= reviews.length - 2} onClick={() => {
                    setOpacity(true)
                    setTimeout(
                        () => {
                            handlerComments(1)
                            setOpacity(false)
                        }, 200
                    )
                }}>&rarr;</button>
            </div>
        </div>
    )
}
export default Reviews