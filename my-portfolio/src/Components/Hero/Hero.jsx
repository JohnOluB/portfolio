import React from 'react'
import BlurText from "../BlurText";


  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const Hero = () => {
  return (
    <BlurText
  text="JOHN ADEBAYO"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-2 font-stretch-semi-condensed text-amber-500"
/>
  )
}

export default Hero


