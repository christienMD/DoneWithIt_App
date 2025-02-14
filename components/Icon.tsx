import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

import { MaterialCommunityIcons as IconType } from "@expo/vector-icons";

interface Props {
  name: keyof typeof IconType.glyphMap;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}

const Icon = ({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}: Props) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

export default Icon;
