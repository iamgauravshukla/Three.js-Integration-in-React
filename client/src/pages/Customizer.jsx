import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import config from "../config/config";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);
  return (
    <>
      <AIPicker/>
      <ColorPicker/>
      <CustomButton/>
      <FilePicker/>
      <Tab/>
    </>
  );
};

export default Customizer;
