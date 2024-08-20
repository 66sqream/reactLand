import { H2 } from '../h2/H2';
import s from './partners.module.scss';
import img from '../../img/icon/homePartners.svg'
import partners1 from '../../img/partners1.png'
import partners2 from '../../img/partners2.png'
import partners3 from '../../img/partners3.png'
import partners4 from '../../img/partners4.png'
import partners5 from '../../img/partners5.png'

export const Partners = () => {
    return (
        <div className="container">
            <div className={s.partners}>
                <H2 value='Our Partners'/>
                <div className={s.imgBlock}>
                    <img src={partners1} alt="" />
                    <img src={partners2} alt="" />
                    <img src={partners3} alt="" />
                    <img src={partners4} alt="" />
                    <img src={partners5} alt="" />
                </div>
            </div>
        </div>
    );
};