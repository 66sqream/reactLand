import { SelectComp } from "../select/Select";
import { location, properetyType, price } from "../../options";
import heroBlockRight from '../../img/heroBlockRight.png';
import search from '../../img/icon/search.svg';
import s from './heroBlock.module.scss';

export const HeroBlock = () => {
    return (
        <div className="container">
            <div className={s.heroBlock}>
                <div className={s.leftBlock}>
                    <div className={s.text}>
                        <h1 className={s.h1}>Find the perfect place to stay with your family</h1>
                        <p className={s.p}>Buying a home is a life-changing experience, so shouldn’t your real estate agent be a life changer.</p>
                    </div>
                    <div className={s.searchHouse}>
                        <div className={s.btns}>
                            <button className={s.btn}>Buy</button>
                            <button className={s.btn}>Sent</button>
                            <button className={s.btn}>Sell</button>
                        </div>
                        <div className={s.menuContent}>
                            <div className={s.selectMenu}>
                                <SelectComp plasholderSelect='Location' option={location} />
                                <SelectComp plasholderSelect='Properety type' option={properetyType} />
                                <SelectComp plasholderSelect='Price' option={price} />
                            </div>
                           <button className={s.searchBtn}>
                                <img src={search } alt="" />
                                <p className={s.p}>Search</p>
                           </button>
                        </div>
                    </div>
                </div>
                <img className={s.img} src={heroBlockRight} alt="" />
            </div>
        </div>
    );
};