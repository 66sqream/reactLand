import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { HeroBlock } from "../hero-block/HeroBlock";
import { Partners } from "../partners/Partners";
import { Properties } from "../properties/Properties";
import { Property } from "../property/Property";
import {Reviews} from "../reviews/Reviews";
import { Search } from "../search/Search";
import './landing.scss';

export const Landing = () => {
    return (
        <div className="containerLand">
            <Header />
            <HeroBlock />
            <Partners />
            <Properties />
            <Property />
            <Reviews />
            <Search />
            <Footer />
        </div>
    );
};