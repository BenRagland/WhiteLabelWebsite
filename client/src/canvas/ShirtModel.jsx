import React from 'react'
import {easing} from 'maath'
import { useSnapshot} from 'valtio'

import { useFrame } from '@react-three/fiber'
import { Decal,useGLTF, useTexture} from '@react-three/drei'
import state from '../store'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

const ShirtModel = () => {
    
   
    useFrame((state,delta)=>easing.dampC(materials.lambert1.color, snap.color, 0.25, delta))

    const snap = useSnapshot(state)
    const {nodes,materials} = useGLTF('/public/shirt_baked.glb')
    // const {nodes,materials} = useGLTF('/public/MalePuffer/JacketMyExport.glb')
    //console.log(useGLTF('/public/MalePuffer/JacketMyExport.glb'))

    //const logoTextureThree = logoTexture.texture
    const logoTexture = useTexture(snap.logoDecal)
    const fullTexture = useTexture(snap.fullDecal)
    
    // console.log(logoTextureThree.loaded)
    // console.log(nodes.fbx.geometry)

    // Tracks state changes
    const stateTracking = JSON.stringify(snap)

    return (
    <group
        key={stateTracking}
    >
        <mesh
            castShadow
            //geometry={nodes.fbx.geometry}
            //material={materials.clothe}
            material={materials.lambert1}
            geometry={nodes.T_Shirt_male.geometry}
            material-roughness={1}
            dispose={null}
        >

            {snap.isLogoTexture && (
                <Decal
                    position={[0, .08, 0.1]}
                    rotation={[0, 0,0]}
                    scale={.1}
                    map={logoTexture}
                    map-anisotrophy={16}
                    depthTest={false}
                    depthWrite={true}
                />
                
                
                // <meshStandardMaterial 
                // position={[0, 0.04, 0.15]}
                // rotation={[0, 0,0]}
                // normalScale={0.05}
                // map={logoTexture}
                // />
                
                )}
            { snap.isFullTexture && (
                <Decal
                    position={[0, .01, 0]}
                    rotation={[0, 0,0]}
                    scale={1}
                    map={fullTexture}
                />
                
                
                // <meshStandardMaterial 
                // roughness={0}
                // map={fullTexture}
                // />
                
                )} 
                
        </mesh>
    </group>
    )
}

export default ShirtModel

