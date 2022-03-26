import {IReview} from "../models/IReview";

const Reviewscard = ({img,userName,text,date}: IReview) => {

    return (
        <div className='reviewsCard'>
            <div className="reviewsCard__header">
                <div className="reviewsCard__user">
                    <img src={img || '/images/maine/photoDefault.jpg'} alt="User"/>

                    <div className="reviewsCard__user-name">
                        <p>{userName}</p>
                    </div>
                </div>
                <div className="reviewsCard__date">
                    {date}
                </div>

            </div>
            <div className="reviewsCard__body">
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}
export default Reviewscard