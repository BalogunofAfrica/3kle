import { Dimensions, PixelRatio } from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("screen");

const frame = { width: 375, height: 812 }; // Frame according to figma design

const widthBaseScale = screenWidth / frame.width;
const heightBaseScale = screenHeight / frame.height;

function normalize(size: number, based = "width") {
  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

// for width  pixel
const widthPixel = (size: number) => normalize(size, "width");
// for height  pixel
const heightPixel = (size: number) => normalize(size, "height");
// for font  pixel
const fontPixel = (size: number) => widthPixel(size);
// for relative pixels
const relativePixels = (size: number) => heightPixel(size);
const viewPortHeight = (heightPercent: string | number) => {
  const elementHeight =
    typeof heightPercent === "number"
      ? heightPercent
      : Number.parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elementHeight) / 100);
};
const viewPortWidth = (widthPercent: string | number) => {
  // Parse string percentage input and convert it to number.
  const elementWidth =
    typeof widthPercent === "number"
      ? widthPercent
      : Number.parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((screenWidth * elementWidth) / 100);
};

export {
  fontPixel as fpx,
  heightPixel as hpx,
  relativePixels as px,
  screenHeight,
  screenWidth,
  viewPortHeight as vh,
  viewPortWidth as vw,
  widthPixel as wpx,
};
