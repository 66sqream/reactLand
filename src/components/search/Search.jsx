import s from './search.module.scss';
import bgRound from '../../img/bgRound.svg'

export const Search = () => {
    return (
        <div className="container">
            <div className={s.search}>
                <img className={s.left} src={bgRound} alt="" />
                <div className={s.column}>
                    <div className={s.text}>
                        <h2 className={s.h2}>Get listed your home as  a owner</h2>
                        <p className={s.p}>Here is a list of the greatest real estate company slogans of all-time. These catchy slogans are followed by the Greatest Real Estate.</p>
                    </div>
                    <div className={s.inputBlock}>
                        <input 
                            placeholder='Enter email address'
                            type="text" 
                            className={s.input} 
                        />
                        <button className={s.btn}>Subscribe</button>
                    </div>
                </div>
                <img className={s.right} src={bgRound} alt="" />
            </div>
        </div>
    );
};