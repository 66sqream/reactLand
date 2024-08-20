import s from './h2.module.scss';

export const H2 = (props) => {
    return (
        <div className={s.h2Img}>
            <h2 className={s.h2}>{props.value}</h2>
        </div>
    );
};