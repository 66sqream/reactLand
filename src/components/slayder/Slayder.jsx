import { Splide, SplideSlide } from '@splidejs/react-splide'; 
import '@splidejs/react-splide/css';
import { ReviewBlock } from '../reviewBlock/ReviewBlock';
import justin from '../../img/justin.png'
import angel from '../../img/angel.png'
import './slayder.scss';

export const Slayder = () => {
  return (
    <Splide 
      className="slide"
      aria-label="My Favorite Images"
      options={ {
        perPage: 2,
        rewind: true,
        width : '1126px',
        heigth: '500px',
        gap   : '1rem',
        arrowPath: 'none',
      } }
    >
      <SplideSlide>
        <ReviewBlock
          ava={justin} 
          name='Justin Lee' 
          position='Products Designer at Ito' 
          description='A good real estate agent doesn’t disappear 
          once the closing IN signed.Buying a bigger home doesn’t 
          necessarily mean spendi more money.Been there. Done that. 
          Sold. Bought' 
        />
      </SplideSlide>
      <SplideSlide>
        <ReviewBlock
            ava={angel} 
            name='Angel Cathe' 
            position='Products Designer at Ito' 
            description='A good real estate agent doesn’t disappear 
            once the closing IN signed.Buying a bigger home doesn’t 
            necessarily mean spendi more money.Been there. Done that. 
            Sold. Bought be Bringing It All Together there.' 
        />
      </SplideSlide>
      <SplideSlide>
        <ReviewBlock
            ava={justin} 
            name='Justin Lee' 
            position='Products Designer at Ito' 
            description='A good real estate agent doesn’t disappear 
            once the closing IN signed.Buying a bigger home doesn’t 
            necessarily mean spendi more money.Been there. Done that. 
            Sold. Bought' 
        />
      </SplideSlide>
      <SplideSlide>
        <ReviewBlock
            ava={justin} 
            name='Justin Lee' 
            position='Products Designer at Ito' 
            description='A good real estate agent doesn’t disappear 
            once the closing IN signed.Buying a bigger home doesn’t 
            necessarily mean spendi more money.Been there. Done that. 
            Sold. Bought' 
        />
      </SplideSlide>
      <SplideSlide>
        <ReviewBlock
            ava={angel} 
            name='Angel Cathe' 
            position='Products Designer at Ito' 
            description='A good real estate agent doesn’t disappear 
            once the closing IN signed.Buying a bigger home doesn’t 
            necessarily mean spendi more money.Been there. Done that. 
            Sold. Bought be Bringing It All Together there.' 
        />
      </SplideSlide>
      <SplideSlide>
        <ReviewBlock
            ava={angel} 
            name='Angel Cathe' 
            position='Products Designer at Ito' 
            description='A good real estate agent doesn’t disappear 
            once the closing IN signed.Buying a bigger home doesn’t 
            necessarily mean spendi more money.Been there. Done that. 
            Sold. Bought be Bringing It All Together there.' 
        />
      </SplideSlide>
    </Splide>
  );

};

