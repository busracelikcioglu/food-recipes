import CustomImage from "./CustomImage"
import { Link } from 'react-router-dom';

export default function HeroSection(){
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg"
    ]
    return(
  
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">En Trend Tatlı Tarifleri</h1>
                <p className="info">tarifzamanı ile muhteşem tatlıları keşfet!</p>
                <Link to="/recipes" className="btn">Keşfet</Link>
            </div>
            <div className="col gallery">
            { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
                
            </div>

        </div>
    )
}