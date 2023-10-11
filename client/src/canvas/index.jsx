import {Canvas} from '@react-three/fiber'
import {Environment, Center} from "@react-three/drei"
import Tee from './Tee'
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5}/>
      <Environment preset='city'/>
      <CameraRig>
        {/* <Backdrop/> */}
        <Center>
          <Tee/>
        </Center>
      </CameraRig>
    </Canvas>
  )
};

export default CanvasModel;
