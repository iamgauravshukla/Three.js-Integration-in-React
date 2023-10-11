import { useFrame } from "@react-three/fiber";
import {easing} from 'maath';
import { useSnapshot } from "valtio";
import state from "../store";
import { useRef } from "react";
const CameraRig = ({children}) => {
    const group = useRef();
    const snap = useSnapshot(state);
    // setting model rotation 
    easing.dampE(
        group.current.rotation,
        [state.pointer.y/10, state.pointer.x/5,0]
    )
    return (
        <group ref={group}>
            {children}
        </group>
    );
}

export default CameraRig;
