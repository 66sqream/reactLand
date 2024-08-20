import s from './footer.module.scss';
import facebook from '../../img/icon/facebook.svg';
import inst from '../../img/icon/inst.svg';
import twit from '../../img/icon/twit.svg';
import utube from '../../img/icon/utube.svg';
import inn from '../../img/icon/in.svg';
import logo from '../../img/logo.svg';
import { FooterBlock } from '../footerBlock/FooterBlock';

export const Footer = () => {
    return (
        <div className="container">
            <footer className={s.footer}>
                <div className={s.footerBlock}>
                    <img src={logo} alt="" />
                    <p>Contrary to popular  is not 
                        simply random text. It has </p>
                    <div className={s.iconBlock}>
                        <img src={facebook} alt="" />
                        <img src={inst} alt="" />
                        <img src={twit} alt="" />
                        <img src={utube} alt="" />
                        <img src={inn} alt="" />
                    </div>
                </div>
                <FooterBlock 
                    h2='About' 
                    link1='Company' 
                    link2='Team' 
                    link3='Career' 
                    link4='Blogs' 
                />
                <FooterBlock 
                    h2='Products' 
                    link1='E-Books' 
                    link2='Preasantation' 
                    link3='Management' 
                    link4='Dashboard' 
                />
                <FooterBlock 
                    h2='Address' 
                    link1='Country Delevery' 
                    link2='Counter Beach Post' 
                    link3='www.itobd.com' 
                    link4='+880176565655' 
                />
            </footer>
        </div>
    );
};