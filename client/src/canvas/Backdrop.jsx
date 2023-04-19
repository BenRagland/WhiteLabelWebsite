import React,{useRef} from 'react'

import { useFrame } from '@react-three/fiber'
import {easing} from 'maath'  
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'


const Backdrop = () => {
  const shadows = useRef()


  return (
    <AccumulativeShadows
      ref={shadows}
      // smoothen edges
      temporal
      frames={60}
      alphaTest={0.45}
      scale={10}
      rotation={[Math.PI/2,0,0]}
      position={[0,0,-.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={.55}
        ambient={.35}
        position={[-5,5,-10]}
      /> 
     
    </AccumulativeShadows>
  )
}

export default Backdrop