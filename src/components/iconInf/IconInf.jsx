import s from './iconInf.module.scss'

export const IconInf = (props) => {
    return (
        <div className={s.iconInf}>
            <img src={props.img} alt="" className={s.img} />
            <p className={s.p}>{props.room}</p>
        </div>
    );
};