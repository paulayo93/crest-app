import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function HashIcon(props) {
  return (
    <Svg
      width="10"
      height="14"
      viewBox="0 0 10 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8.58541 2.27273V11H7.17916L3.06694 5.0554H2.9945V11H1.41353V2.27273H2.8283L6.93626 8.22159H7.01296V2.27273H8.58541Z"
        fill={props?.color || "#262C55"}
      />
      <Path d="M0 5.5H9.5" stroke={props?.color || "#262C55"} />
      <Path d="M0 8.5H9.5" stroke={props?.color || "#262C55"} />
    </Svg>
  );
}
