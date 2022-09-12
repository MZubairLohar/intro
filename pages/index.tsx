import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
// import CameraOrbitController from '../components/CameraOrbitController'
// import UseAnimation from '../components/UseAnimation';

const Home: NextPage = () => {

  const testing = true;
  
  return (
    <div className="container">
      <Canvas camera={{fov : 75, near: 2, far : 100}}>
          <OrbitControls />
          {/* {testing? <Stats /> : null} */}
          {testing? <axesHelper args = {[2]} /> : null}
          {testing?  <gridHelper args = {[2, 10]} />: null }

          {/* <CameraOrbitController/> */}
          <ambientLight intensity={[0.1]} />
          <directionalLight color="blue" position={[0, 0, 5]} />
          {/* <UseAnimation isTesting ={testing} /> */}
          <mesh  scale={[0.5,0.5,0.5]}>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
      </Canvas>
    </div>
  )
}

export default Home
