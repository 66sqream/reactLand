import { H2 } from '../h2/H2';
import { PropertyBlock } from '../propertyBlock/PropertyBlock';
import s from './property.module.scss';
import security from '../../img/icon/security.svg'
import conditioner from '../../img/icon/conditioner.svg'
import garden from '../../img/icon/garden.svg'
import parkersMovers from '../../img/icon/parkersMovers.svg'
import furniture from '../../img/icon/furniture.svg'
import swimming from '../../img/icon/swimming.svg'
import bg from '../../img/bgProperty.png'

export const Property = () => {
    return (
        <div className={s.property}>
            <div className="container">
                <div className={s.title}>
                    <H2 value='Property Featured'/>
                    <p className={s.p}>
                         Real estate is a crowded field. But with the number of buyers purchasing homes through real estate agents and brokers growing there’s plenty of 
                    </p>
                </div>
                <div className={s.content}>
                    <div className={s.blocks}>
                        <PropertyBlock icon={security} title='100% Security' description='For many of us, buying a home is a dre and one not easily attainable. ' />
                        <PropertyBlock icon={conditioner} title='Free air conditioner' description='For many of us, buying a home is a dre and one not easily attainable. ' />
                        <PropertyBlock icon={garden} title='Flower garden' description='For many of us, buying a home is a dre and one not easily attainable. ' />
                    </div>
                    <img src={bg} alt="" />
                    <div className={s.blocks}>
                        <PropertyBlock icon={parkersMovers} title='Parkers & movers' description='For many of us, buying a home is a dre and one not easily attainable. ' />
                        <PropertyBlock icon={furniture} title='Rental furniture' description='For many of us, buying a home is a dre and one not easily attainable. ' />
                        <PropertyBlock icon={swimming} title='Swimming pool' description='For many of us, buying a home is a dre and one not easily attainable. ' />
                    </div>
                </div>
            </div>
        </div>
    );
};