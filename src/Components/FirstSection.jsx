import React, { useEffect, useRef, useState } from 'react';
import './Styles/Style.css';
import './Styles/FirstSection.css';
import { gsap } from "gsap";

function FirstSection() {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const profileRef = useRef(null);
    const [showImage, setShowImage] = useState(true);
    useEffect(() => {
        if (window.innerWidth >= 950) {
            setShowImage(false);
            const ctx = gsap.context(() => {
                textRef.current = gsap.timeline()
                    .fromTo(".text--section", { opacity: 0, x: -300 }, { opacity: 1, x: 0, duration: 3, ease: "elastic" });
                imageRef.current = gsap.timeline()
                    .fromTo('.avatar--img', { opacity: 0, rotation: 180 }, { opacity: 1, rotation: 360, duration: 2, ease: "elastic" }, "<");
                profileRef.current = gsap.timeline()
                    .fromTo('.avatar--img img', { opacity: 0, y: -500 }, { opacity: 1, y: 0, duration: 1, delay: .5 });
            })

        }
        else {
            setShowImage(true);
        }


    }, [imageRef, showImage])

    return (
        <section className='first--section'>
            <div className="text--section" ref={textRef}>
                Hello, I am <span className="name">Abhishek Choudhary</span>
            </div>
            <div className={showImage ? 'avatar--img' : 'avatar--img hide'} ref={imageRef}>
                <img ref={profileRef} src="./images/Profile Photo.jpg" alt="abhishek" aria-hidden="true" />
            </div>
        </section>
    )
}

export default FirstSection;
