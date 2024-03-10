import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

const ColorSwatch = ({ hexCode }) => {
  const [colorSwatch, setColorSwatch] = useState(null);

  useEffect(() => {
    const fetchColorSwatch = async () => {
      try {
        const response = await fetch(`https://api.color.pizza/v1/swatch/?color=${hexCode.replace("#", "")}`);
        if (!response.ok) {
          throw new Error("Color not found");
        }
        const svgData = await response.text();
        setColorSwatch(svgData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchColorSwatch();
  }, [hexCode]);

  return <Box dangerouslySetInnerHTML={{ __html: colorSwatch }} />;
};

export default ColorSwatch;
