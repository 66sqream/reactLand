import { H2 } from "../h2/H2";
import { Slayder } from "../slayder/Slayder";
import s from './reviews.module.scss'

export const Reviews = () => {
    return (
        <div className="container">
            <div className={s.reviews}>
                <div className={s.title}>
                    <p className={s.p}>REVIEWS</p>
                    <H2 value='Our valuable customer says'/>
                </div>
                <Slayder />
            </div>
        </div>
    );
};