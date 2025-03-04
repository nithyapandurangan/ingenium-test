import { ScrollParallax } from "react-just-parallax"
import { aboutusimg } from '../../assets'
import { useRef } from 'react';

const AboutUsImages = () => {
  const parallaxRef = useRef(null);

  return (
    <div className='relative w-1/2' ref={parallaxRef}>
        <ScrollParallax isAbsolutelyPositioned>
            <img src={aboutusimg} className='absolute left-0 right-0 z-10 rounded-3xl object-cover h-[350px]'/>
            <div className='absolute left-[30px] top-[30px] z-5 bg-b-700 h-[350px] w-[400px] rounded-3xl' aria-hidden='true' />
        </ScrollParallax>
    </div>
  )
}

export default AboutUsImages