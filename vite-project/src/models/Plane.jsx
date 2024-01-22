import React, {useEffect, useRef} from 'react'
import { Html, useAnimations, useGLTF } from '@react-three/drei'
import planescene from "../assets/3d/plane.glb";



const Plane = ({isRotating, ...props}) => {

    const ref=useRef();
    const {scene,animations}=useGLTF(planescene);
    const {actions}  = useAnimations(animations,ref);
    console.log(actions);
    useEffect(()=>{
      if(isRotating)
      {
          actions['Take 001'].play();
      }
      else
      {
        actions['Take 001'].stop();
      }

    },[actions,isRotating]);

  return (
    <mesh {...props} ref={ref}>
    <primitive object={scene}/>
    </mesh>
  )
}

export default Plane