import {  useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const UseAnimation = ()=>{
    const myRef = useRef<THREE.Mesh>(null)
    useFrame(()=>{
        myRef.current?.rotation.x += 0.1;
        myRef.current?.rotation.y +=0.1;        
        myRef.current?.rotation.z +=0.1;

    });
    return(
        <mesh ref={myRef} scale={[0.5,0.5,0.5]}>
        <boxGeometry />
        <meshStandardMaterial />
        </mesh>
    )

}

export default UseAnimation;