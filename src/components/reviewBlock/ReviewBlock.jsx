import s from './reviewBlock.module.scss';

export const ReviewBlock = (props) => {
    return (
        <div className={s.reviewBlock}>
            <div className={s.row}>
                <div className={s.avaName}>
                    <img src={props.ava} alt="" />
                    <div className={s.name}>
                        <h2 className={s.h2}>{props.name}</h2>
                        <p className={s.p}>{props.position}</p>
                    </div>
                    <img src="" alt="" />
                </div>
            </div>
            <p className={s.description}>{props.description}</p>
        </div>
    );
};