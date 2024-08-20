import s from './footerBlock.module.scss'

export const FooterBlock = (props) => {
    return (
        <div className={s.footerBlock}>
            <h2 className={s.h2}>{props.h2}</h2>
            <ul className={s.ul}>
                    <li className={s.li}>
                        <a href="" className={s.a}>{props.link1}</a>
                    </li>
                    <li className={s.li}>
                        <a href="" className={s.a}>{props.link2}</a>
                    </li>
                    <li className={s.li}>
                        <a href="" className={s.a}>{props.link3}</a>
                    </li>
                    <li className={s.li}>
                        <a href="" className={s.a}>{props.link4}</a>
                    </li>
                </ul>
        </div>
    );
};