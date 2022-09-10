import type { NextPage } from 'next'
import UseAnimation from '../components/UseAnimation';
import { Canvas } from '@react-three/fiber';


const Home: NextPage = () => {
  
  return (
    <div className="container">
      <Canvas >
          <ambientLight intensity={[0.1]} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <UseAnimation />
      </Canvas>
    </div>
  )
}

export default Home
