import {FC} from "react";
import img1 from "../images/social/1.svg"
import img2 from "../images/social/2.svg"
import img3 from "../images/social/3.svg"

const Footer: FC = () => {
    return (
        <div className='footer '>
            <div className="footer__container container">
                <div className="footer__text">
                    <p>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</p>
                </div>
                <div className="footer__social">
                    <div className="social">
                        <div className="social__item">
                            <a href="https://vk.com/">
                                <img src={img1} alt=""/>
                            </a>
                        </div>
                        <div className="social__item">
                            <a href="">
                                <img src={img2} alt=""/>
                            </a>
                        </div>
                        <div className="social__item">
                            <a href="https://web.telegram.org/">
                                <img src={img3} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Footer;