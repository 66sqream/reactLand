import { IconInf } from '../iconInf/IconInf';
import s from './card.module.scss';
import bedroom from '../../img/icon/bedroom.svg';
import kitchen from '../../img/icon/kitchen.svg';
import bathroom from '../../img/icon/bathroom.svg';
import location from '../../img/icon/location.svg';


export const Card = (props) => {
    return (
        <div className={s.card}>
            <img className={s.img} src={props.img} alt="" />
            <div className={s.infa}>
                <div className={s.titleFavorite}>
                    <h3 className={s.h3}>{props.name}</h3>
                    <svg className={s.favoriteBtn} width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={s.path} d="M8 14C7.88969 14 7.77981 13.9617 7.69147 13.8847C7.00941 13.2909 6.36075 12.7404 5.75056 12.2227C2.30678 9.30098 0 7.3705 0 4.55821C0 1.95963 1.84491 0 4.25 0C6.14559 0 7.36234 1.31843 8 2.5056C8.63766 1.31843 9.85441 0 11.75 0C14.1551 0 16 1.95963 16 4.55821C16 7.37053 13.6932 9.30098 10.2494 12.2227C9.63925 12.7404 8.99059 13.2909 8.30853 13.8847C8.22019 13.9617 8.11031 14 8 14Z" fill="#BBBBBB"/>
                    </svg>
                </div>
                <div className={s.location}>
                    <img src={location} alt="" className={s.img} />
                    <p className={s.p}>{props.location}</p>
                </div>
                <div className={s.iconPan}> 
                    <IconInf img={bedroom} room='6' />
                    <IconInf img={kitchen} room='2' />
                    <IconInf img={bathroom} room='3' />
                </div>
                <div className={s.priceDetailsBtn}>
                    <h4 className={s.h4}>{props.price}</h4>
                    <button className={s.btn}>View Details</button>
                </div>
            </div>
        </div>
    );
};