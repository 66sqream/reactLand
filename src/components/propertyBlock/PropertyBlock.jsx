import s from './propertyBlock.module.scss'

export const PropertyBlock = (props) => {
    return (
        <div className={s.propertyBlock}>
            <img src={props.icon} alt="" className={s.icon} />
            <h2 className={s.h2}>{props.title}</h2>
            <p className={s.p}>{props.description}</p>
        </div>
    );
};