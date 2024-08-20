import { Card } from '../card/Card';
import { H2 } from '../h2/H2';
import s from './properties.module.scss';
import house1 from '../../img/house1.png';
import house2 from '../../img/house2.png';
import house3 from '../../img/house3.png';
import house4 from '../../img/house4.png';
import house5 from '../../img/house5.png';
import house6 from '../../img/house6.png';

export const Properties = () => {
    return (
        <div className="container">
            <div className={s.properties}>
                <div className={s.title}>
                    <H2 value='Popular Properties' />
                    <button className={s.btn}>VIEW ALL</button>
                </div>
                <div className={s.cards}>
                        <Card img={house1} name='Capital hill residence' location='East London' price='$5527.00' />
                        <Card img={house2} name='Picket Fence Realty' location='East London' price='$6727.00' />
                        <Card img={house3} name='Banyon Tree Realty' location='East London' price='$4327.00' />
                        <Card img={house4} name='Corsair Real Estate' location='East London' price='$4427.00' />
                        <Card img={house5} name='Sequoia Real Estate' location='East London' price='$4527.00' />
                        <Card img={house6} name='Strive Partners Realty' location='East London' price='$5527.00' />
                </div>
            </div>
        </div>
    );
};