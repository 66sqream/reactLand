import logo from '../../img/logo.svg';
import s from '../header/header.module.scss';

export const Header = () => {
    return (
        <div className="container">
            <div className={s.header}>
                <img src={logo} alt="" />
                <ul>
                    <li><a className={s.link} href="">Home</a></li>
                    <li><a className={s.link} href="">Properties </a></li>
                    <li><a className={s.link} href="">About us</a></li>
                    <li><a className={s.link} href="">Blog</a></li>
                    <a className={s.btn} href="">Contact us</a>
                </ul>   
            </div>
        </div>
    );
};