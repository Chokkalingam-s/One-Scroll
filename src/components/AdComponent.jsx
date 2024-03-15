import React, { useEffect, useRef,useState } from "react";
import "../Sass/Ad.scss";
export default function AdComponent(){
    const [index, setIndex] = useState(0)
        const imgRefs = useRef([])
        const images = [ 
            './src/assets/Ad1Levis.png',
             "./src/assets/NikeAd.png",
             './src/assets/BoatAd.png',]
        useEffect(() => {
            let intervalId = setInterval(() => {
                setIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
                imgRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })
            }, 2800)
            return () => clearInterval(intervalId)
        }, [images.length, index])
    
        return (
            <div className="page">
            <div className='carousel-container rad10'>
            <div className='carouselItems'>
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        ref={ref => (imgRefs.current[i] = ref)}
                    />
                ))}
            </div>
            </div>
            </div>
        )
}