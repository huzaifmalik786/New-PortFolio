import { useEffect } from "react";
import Styles from "../styles/background.module.css"

const Background = () => {

    useEffect(() => {
        const parallax = document.querySelectorAll(".parallax");
        let xVal = 0;
        let yVal = 0;
        window.addEventListener('mousemove', (e) => {
            xVal = e.clientX - window.innerWidth / 2;
            yVal = e.clientY - window.innerHeight / 2;
            parallax.forEach((el) => {
                const speedx = el.dataset.speedX;
                const speedy = el.dataset.speedY;
                let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
                let zVal = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
                el.style.translate = `calc(0% + ${xVal * speedx}px) calc(0% + ${yVal * speedy}px) ${zVal}px`;
                el.style.perspective = `2300px`
            })
        })
    }, [])

    return (
        <div className={`bg-[#353] fixed left-0 top-0 w-[100vw] h-[100vh] overflow-hidden z-[-1]`}>
            <div className={Styles.vignette} />
            <img src="/background.png" data-speed-y="0.18" data-speed-x="0.2" className={`parallax ${Styles.parallax} ${Styles.bg_img}`} />
            <img src="/fog_7.png" data-speed-y="0.12" data-speed-x="0.17" className={`parallax ${Styles.parallax} ${Styles.fog_7}`} />
            <img src="/mountain_10.png" data-speed-y="0.105" data-speed-x="0.095" className={`parallax ${Styles.parallax} ${Styles.mountain_10}`} />
            <img src="/fog_6.png" data-speed-y="0" data-speed-x="0" className={`parallax ${Styles.parallax} ${Styles.fog_6}`} />
            <img src="/mountain_9.png" data-speed-y="0.055" data-speed-x="0.025" className={`parallax ${Styles.parallax} ${Styles.mountain_9}`} />
            <img src="/mountain_8.png" data-speed-y="0.01" data-speed-x="0.05" className={`parallax ${Styles.parallax} ${Styles.mountain_8}`} />
            <img src="/fog_5.png" data-speed-y="0.05" data-speed-x="0.06" className={`parallax ${Styles.parallax} ${Styles.fog_5}`} />
            <img src="/mountain_7.png" data-speed-y="0.01" data-speed-x="0.05" className={`parallax ${Styles.parallax} ${Styles.mountain_7}`} />
            <img src="/mountain_6.png" data-speed-y="0.05" data-speed-x="0.065" className={`parallax ${Styles.parallax} ${Styles.mountain_6}`} />
            <img src="/fog_4.png" data-speed-y="0.12" data-speed-x="0.05" className={`parallax ${Styles.parallax} ${Styles.fog_4}`} />
            <img src="/mountain_5.png" data-speed-y="0" data-speed-x="0.08" className={`parallax ${Styles.parallax} ${Styles.mountain_5}`} />
            <img src="/fog_3.png" data-speed-y="0.018" data-speed-x="0.07" className={`parallax ${Styles.parallax} ${Styles.fog_3}`} />
            <img src="/mountain_4.png" data-speed-y="0.024" data-speed-x="0.059" className={`parallax ${Styles.parallax} ${Styles.mountain_4}`} />
            {/* <img src="/mountain_3.png" data-speed-y="0.03" data-speed-x="0.3" className={`parallax ${Styles.parallax} ${Styles.mountain_3}`} /> */}
            {/* <img src="/mountain_2.png" data-speed-y="0.03" data-speed-x="0.3" className={`parallax ${Styles.parallax} ${Styles.mountain_2}`} /> */}
            <img src="/mountain_1.png" data-speed-y="0" data-speed-x="0" className={`parallax ${Styles.parallax} ${Styles.mountain_1}`} />
            <img src="/sun_rays.png" className={`${Styles.sun_rays}`} />
            <img src="/black_shadow.png" className={`${Styles.black_shadow}`} />
            <img src="/fog_1.png" data-speed-y="0.0" data-speed-x="0.0" className={`parallax ${Styles.parallax} ${Styles.fog_1}`} />
        </div>
    );
};

export default Background;
