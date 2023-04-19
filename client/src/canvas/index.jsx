import React from 'react'
import {Canvas} from '@react-three/fiber'
import { Environment, Center} from '@react-three/drei'
import ShirtModel from './ShirtModel'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'

const CanvasModel = () => {
  return (
    <Canvas
    shadows
    className="w-full h-full transition-all ease-in"
    camera={{ position:[0,0,0], fov:25}}
    gl={{preserveDrawingBuffer:true}}
    >
      <ambientLight intensity={0.6}/>
      <Environment 
      preset="city"
      />

      <CameraRig>
        <Backdrop />
        <Center>
          <ShirtModel />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel