import React,{ useRef } from 'react';
import {  useFrame } from '@react-three/fiber';
import {  BoxHelper } from 'three';
import { useHelper } from '@react-three/drei';


type Props = {
    isTesting: boolean;
}

const UseAnimation:  React.FC<Props> = ({  isTesting })=>{
    const myRef = useRef<THREE.Mesh>(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    {isTesting ? useHelper(myRef, BoxHelper , "blue") : null }
    // useHelper(myRef, BoxHelper , "blue")
    useFrame(()=>{
        if(myRef.current){
            myRef.current.rotation.x += 0.01;
        }
    });
    return(
        <mesh ref={myRef} scale={[0.5,0.5,0.5]}>
        <boxGeometry />
        <meshStandardMaterial />
        </mesh>
    )

}

export default UseAnimation;