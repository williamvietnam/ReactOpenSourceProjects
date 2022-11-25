import styles from "./Introduction.module.scss";
import classNames from "classnames/bind";
import { CONTENT_INTRODUCE, TITLE_INTRODUCE } from "../../assets/strings/Strings";
import Slider from '../../components/Slider';

const bindStyle = classNames.bind(styles);
const SLIDERS = [
  {
    id:0,
    res:'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
    title:'Slider1',
  },
  {
    id:1,
    res:'https://thumbs.dreamstime.com/b/d-mural-wallpaper-beautiful-view-landscape-background-old-arches-tree-sun-water-birds-flowers-transparent-curtains-166191190.jpg',
    title:'Slider2',
  },
  {
    id:2,
    res:'https://png.pngitem.com/pimgs/s/44-447227_rectangle-black-frame-png-transparent-png.png',
    title:'Slider3',
  },
  {
    id:3,
    res:'https://www.pngmart.com/files/11/Rectangle-Golden-Frame-Border-Transparent-PNG.png',
    title:'Slider4',
  },
]

function Introduction() {
  return <div className={bindStyle('wrapper')}>
    <h1>{TITLE_INTRODUCE}</h1>
    <p>{CONTENT_INTRODUCE}</p>
    <h2>{}</h2>
    <h2>{}</h2>
    <div className={bindStyle('slide-intro')}>
      <Slider images={SLIDERS}/>
    </div>
  </div>;
}

export default Introduction;