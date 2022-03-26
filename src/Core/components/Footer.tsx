import {FC} from "react";

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
                            <a href="">
                                <img src="/images/social/1.svg" alt=""/>
                            </a>
                        </div>
                        <div className="social__item">
                            <a href="">
                                <img src="/images/social/2.svg" alt=""/>
                            </a>
                        </div>
                        <div className="social__item">
                            <a href="">
                                <img src="/images/social/3.svg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Footer;