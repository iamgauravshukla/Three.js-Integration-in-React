import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";
const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
            "#F875AA",
            "#4D4C7D",
            "#86A789",
            "#CE5A67",
            "#427D9D",
            "#C3ACD0",
            "#D0A2F7",
            "#044A42",
            "#6C7A89",
            "#7C9473",
            "#E77C7C",
            '#C89595'
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
