import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import SVG, { Path } from "react-native-svg";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../Constants";

export const HeaderText = () => {
  return (
    <View>
      <TouchableOpacity>
        <SVG
          width="110"
          height="33"
          viewBox="0 0 110 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M0 24.8769H4.72424V15.6031C4.72424 14.4636 4.84976 13.5497 5.10081 12.8615C5.36327 12.1733 5.69419 11.6544 6.09359 11.3046C6.49298 10.9436 6.9209 10.701 7.37735 10.5769C7.8338 10.4528 8.26172 10.3908 8.66111 10.3908C9.65388 10.3908 10.4184 10.6108 10.9548 11.0508C11.5025 11.4908 11.8962 12.0379 12.1358 12.6923C12.3755 13.3467 12.5181 14.001 12.5637 14.6554C12.6094 15.2985 12.6322 15.8287 12.6322 16.2462V24.8769H17.3564V14.6215C17.3564 14.3169 17.3336 13.8318 17.288 13.1662C17.2423 12.5005 17.1111 11.7672 16.8943 10.9662C16.6775 10.1538 16.3123 9.37538 15.7988 8.63077C15.2967 7.88615 14.5892 7.27128 13.6763 6.78615C12.7634 6.30102 11.5824 6.05846 10.1332 6.05846C8.79804 6.05846 7.6341 6.27846 6.64132 6.71846C5.64855 7.15846 4.81553 7.74513 4.14227 8.47846V6.6H0V24.8769Z"
            fill="white"
          />
          <Path
            d="M28.0717 25.3846C29.9203 25.3846 31.5464 24.9785 32.95 24.1662C34.365 23.3426 35.4662 22.2087 36.2535 20.7646C37.0523 19.3092 37.4517 17.6338 37.4517 15.7385C37.4517 13.8544 37.058 12.1903 36.2707 10.7462C35.4833 9.29077 34.3821 8.15128 32.9671 7.32769C31.5635 6.5041 29.9317 6.09231 28.0717 6.09231C26.2459 6.09231 24.6312 6.49846 23.2276 7.31077C21.8241 8.12308 20.7229 9.25692 19.9241 10.7123C19.1253 12.1564 18.7259 13.8318 18.7259 15.7385C18.7259 17.6226 19.1139 19.2923 19.8899 20.7477C20.6772 22.1918 21.7727 23.3256 23.1763 24.1492C24.5799 24.9728 26.2117 25.3846 28.0717 25.3846ZM28.0717 21.0862C26.6225 21.0862 25.5213 20.6067 24.7682 19.6477C24.0264 18.6774 23.6556 17.3744 23.6556 15.7385C23.6556 14.1477 24.0093 12.8615 24.7168 11.88C25.4357 10.8872 26.554 10.3908 28.0717 10.3908C29.5437 10.3908 30.6506 10.8759 31.3924 11.8462C32.1455 12.8164 32.5221 14.1138 32.5221 15.7385C32.5221 17.3067 32.1512 18.5928 31.4095 19.5969C30.6792 20.5897 29.5666 21.0862 28.0717 21.0862Z"
            fill="white"
          />
          <Path
            d="M43.0318 24.8769H47.6876L54.3974 6.6H49.7416L45.3597 19.2585L40.9778 6.6H36.322L43.0318 24.8769Z"
            fill="white"
          />
          <Path
            d="M62.7332 25.3846C64.5134 25.3846 66.1509 24.9221 67.6458 23.9969C69.152 23.0718 70.2532 21.7744 70.9493 20.1046L66.2935 18.7846C65.586 20.319 64.308 21.0862 62.4594 21.0862C61.1927 21.0862 60.1943 20.7364 59.4639 20.0369C58.745 19.3374 58.3 18.3333 58.1288 17.0246H71.1034C71.2974 14.8133 71.0691 12.8897 70.4187 11.2538C69.7683 9.61795 68.7641 8.34872 67.4061 7.44615C66.0482 6.54359 64.3993 6.09231 62.4594 6.09231C60.6336 6.09231 59.0189 6.5041 57.6153 7.32769C56.2117 8.14 55.1106 9.28513 54.3118 10.7631C53.513 12.241 53.1136 13.9785 53.1136 15.9754C53.1136 17.8031 53.5187 19.4277 54.3289 20.8492C55.1505 22.2595 56.2802 23.3708 57.718 24.1831C59.1672 24.9841 60.839 25.3846 62.7332 25.3846ZM62.6648 10.0862C63.7831 10.0862 64.6389 10.3626 65.2323 10.9154C65.8371 11.4682 66.2251 12.3651 66.3962 13.6062H58.2486C58.7393 11.2595 60.2114 10.0862 62.6648 10.0862Z"
            fill="white"
          />
          <Path d="M72.4941 24.8769H77.1498V0H72.4941V24.8769Z" fill="white" />
          <Path
            d="M91.3191 24.8769V21.0523C90.2237 21.199 89.2252 21.2441 88.3237 21.1877C87.4222 21.1313 86.766 20.7815 86.3552 20.1385C86.1384 19.8 86.0186 19.3487 85.9958 18.7846C85.9844 18.2092 85.9786 17.5662 85.9786 16.8554V10.1538H93.0129L91.3191 6.6H85.9786V1.52307H81.3229V6.6H76.5807V10.1538H81.3229V17.1262C81.3229 18.2205 81.3343 19.2021 81.3571 20.0708C81.3799 20.9282 81.6196 21.7744 82.076 22.6092C82.5781 23.5005 83.3084 24.1492 84.267 24.5554C85.2369 24.9503 86.3324 25.159 87.5534 25.1815C88.7858 25.2154 90.0411 25.1138 91.3191 24.8769Z"
            fill="white"
          />
          <Path
            d="M95.2453 33H99.5588L110 6.6H105.344L100.517 19.0385L95.6561 6.6H90.8292L98.2921 24.7246L95.2453 33Z"
            fill="white"
          />
        </SVG>
      </TouchableOpacity>
    </View>
  );
};

export const MenuButton = () => {
  return (
    <View>
      <TouchableOpacity>
        <SVG width="18" height="21" viewBox="0 0 18 21">
          <Path
            opacity="0.4"
            d="M13.191 0.5H4.81C1.77 0.5 0 2.28 0 5.33V15.66C0 18.76 1.77 20.5 4.81 20.5H13.191C16.28 20.5 18 18.76 18 15.66V5.33C18 2.28 16.28 0.5 13.191 0.5Z"
            fill="white"
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.08002 5.14999V5.15999C4.64902 5.15999 4.30002 5.50999 4.30002 5.93999C4.30002 6.36999 4.64902 6.71999 5.08002 6.71999H8.06902C8.50002 6.71999 8.85002 6.36999 8.85002 5.92899C8.85002 5.49999 8.50002 5.14999 8.06902 5.14999H5.08002ZM12.92 11.24H5.08002C4.64902 11.24 4.30002 10.89 4.30002 10.46C4.30002 10.03 4.64902 9.67899 5.08002 9.67899H12.92C13.35 9.67899 13.7 10.03 13.7 10.46C13.7 10.89 13.35 11.24 12.92 11.24ZM12.92 15.81H5.08002C4.78002 15.85 4.49002 15.7 4.33002 15.45C4.17002 15.19 4.17002 14.86 4.33002 14.61C4.49002 14.35 4.78002 14.21 5.08002 14.24H12.92C13.319 14.28 13.62 14.62 13.62 15.03C13.62 15.429 13.319 15.77 12.92 15.81Z"
            fill="white"
          />
        </SVG>
      </TouchableOpacity>
    </View>
  );
};

export const ProfileButton = () => {
  return (
    <View>
      <TouchableOpacity>
        <SVG
          width="18"
          height="21"
          viewBox="0 0 18 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M9 13.425C4.14605 13.425 0 14.105 0 16.825C0 19.546 4.12017 20.25 9 20.25C13.8539 20.25 18 19.571 18 16.85C18 14.129 13.881 13.425 9 13.425Z"
            fill="white"
          />
          <Path
            opacity="0.4"
            d="M9 10.75C11.7759 10.75 14 8.52497 14 5.75003C14 2.97509 11.7759 0.750031 9 0.750031C6.22506 0.750031 4 2.97509 4 5.75003C4 8.52497 6.22506 10.75 9 10.75Z"
            fill="white"
          />
        </SVG>
      </TouchableOpacity>
    </View>
  );
};

export const Header = () => {
  return (
    <View style={styles.header}>
      <MenuButton />
      <HeaderText />
      <ProfileButton />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 0,
    width: SCREEN_WIDTH * 0.8,
    height: 33,
    marginLeft: 38,
    marginTop: (SCREEN_HEIGHT * 55) / 812,
    borderColor: "white",
  },
});