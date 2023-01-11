import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function HomeTabIcon(props) {
    return (
        <Svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" 
            clip-rule="evenodd"
            d="M9.70217 0L18.43 7.95934L17.4557 8.93368L16.0696 7.67665V16.6323L15.3835 17.3184H11.2666L10.5804 16.6323V11.8292H7.83584V16.6323L7.14969 17.3184H3.03278L2.34663 16.6323V7.68763L0.974334 8.93368L0 7.95934L8.71411 0H9.70217ZM3.71894 6.44021V15.9461H6.46354V11.1431L7.14969 10.4569H11.2666L11.9527 11.1431V15.9461H14.6973V6.43197L9.20814 1.45464L3.71894 6.44021Z" 
            fill={props.focused ? '#407BFF' : "#B8BCC3" }
           
            
            />
        </Svg>
    );
}
