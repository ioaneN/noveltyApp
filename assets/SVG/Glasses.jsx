import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg";

function SvgComponent(props) {
  return (
    <TouchableOpacity>
      <Svg
        width={75}
        height={30}
        viewBox="0 0 75 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={props.style}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72.498 10.562c-.197 0-.373.022-.548.09-.306-1.101-.81-2.134-1.445-3.078a10.39 10.39 0 00-4.753-3.818l-2.278-.899a17.654 17.654 0 00-4.008-1.078C55.567 1.262 45.996.094 36.818.005c-9.177-.09-18.573 1.168-22.472 1.752a17.193 17.193 0 00-4.096 1.19l-1.861.809a10.76 10.76 0 00-4.49 3.661c-.701.988-1.227 2.089-1.577 3.235a2.323 2.323 0 00-.57-.09C.788 10.562 0 11.37 0 12.359v4.267c0 .989.788 1.797 1.752 1.797h.197a13.135 13.135 0 001.643 5.1c1.665 2.92 4.38 5.053 7.578 5.93l.241.067c1.818.494 3.702.606 5.564.292l1.029-.18a15.907 15.907 0 006.593-2.763 16.318 16.318 0 004.074-4.29l2.475-3.796a8.655 8.655 0 011.752-1.954l.263-.225a6.734 6.734 0 012.76-1.325h.043a6.365 6.365 0 012.607-.023 6.326 6.326 0 013.154 1.64l.11.112c.415.405.788.831 1.116 1.326l2.212 3.414a17.515 17.515 0 005.695 5.503 16.845 16.845 0 006.396 2.269l2.76.381c1.62.225 3.285.068 4.84-.494 2.54-.92 4.643-2.852 5.826-5.346l.438-.943c.7-1.482 1.095-3.055 1.227-4.695h.153c.963 0 1.752-.808 1.752-1.797V12.36c0-.989-.788-1.797-1.752-1.797zm-3.855 8.985H47.945l-.504-.787a41.715 41.715 0 01-1.117-2.358h22.56v1.01c0 .72-.088 1.438-.241 2.135zm-62.926 0a9.142 9.142 0 01-.35-2.561v-.584h22.69c-.832 1.73-1.555 2.92-1.555 2.92l.088-.045-.175.27H5.717zm.219-8.536h24.18a29.267 29.267 0 01-1.051 3.145H5.366v-.27c0-.988.197-1.954.57-2.875zm62.422 0c.329.854.526 1.752.526 2.673v.472H45.426a22.19 22.19 0 01-.854-3.145h23.786zm-3.877-3.908c.92.359 1.753.943 2.432 1.662h-22.56c0-.494.044-.989.11-1.46.525-2.786 6.395-2.83 11.104-2.404 1.38.158 2.563.315 3.46.427 1.096.157 2.147.427 3.198.854l2.256.92zM9.77 7.058l1.861-.809a13.136 13.136 0 011.796-.629c3.286-.539 16.844-2.538 17.128 1.707.022.472.022.966-.022 1.46H7.36a7.38 7.38 0 012.41-1.73zm12.79 16.846a12.343 12.343 0 01-5.146 2.157l-1.03.18a9.582 9.582 0 01-4.074-.203l-.24-.067c-2.257-.63-4.184-2.134-5.389-4.178h18.158a12.08 12.08 0 01-2.278 2.111zm41.134 2.111c-1.03.36-2.103.495-3.176.337l-2.76-.381a13.653 13.653 0 01-5.125-1.82 14.156 14.156 0 01-2.913-2.336h18.135l-.328.697a6.894 6.894 0 01-3.833 3.503z"
          fill="url(#prefix__paint0_angular)"
        />
        <Defs>
          <RadialGradient
            id="prefix__paint0_angular"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(69.111 7.44 34.612) scale(60.298 57.8917)"
          >
            <Stop stopColor="#720085" />
            <Stop offset={0.182} stopColor="#25D8FF" />
            <Stop offset={0.38} stopColor="#FF7E07" />
            <Stop offset={0.609} stopColor="#BC15FF" />
            <Stop offset={0.833} stopColor="#FF166A" />
            <Stop offset={1} stopColor="#000D85" />
          </RadialGradient>
        </Defs>
      </Svg>
    </TouchableOpacity>
  );
}

export default SvgComponent;
