import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MaskedView from "@react-native-community/masked-view";

import Svg, { Image, Circle, ClipPath } from "react-native-svg";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MaskedView
        style={{flexDirection: "row", height: "80%" }}
        maskElement={
          <View
            style={{
              // Transparent background because mask is based off alpha channel.
              backgroundColor: "transparent",
              height: "100%",
            }}
          >
            <Svg
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
            >
              <Circle r={0.8 * height} fill="black" cx={width / 2}></Circle>
            </Svg>
          </View>
        }
      >
        {/* Shows behind the mask, you can put anything here, such as an image */}
        <TouchableOpacity
          style={{
            flex: 1,
            height: "100%",
            backgroundColor: "yellow",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>click here</Text>
        </TouchableOpacity>
      </MaskedView>
      <Text>other content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
