import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Swipeable  from 'react-native-gesture-handler/Swipeable';

import AppText from "./AppText";
import colors from "@/app/config/colors";

interface Props {
  title: string;
  subTitle: string;
  image: number;
  onPress: () => void
  renderRightActions?: (
    progressAnimatedValue: Animated.AnimatedInterpolation<number>,
    dragAnimatedValue: Animated.AnimatedInterpolation<number>
  ) => React.ReactNode;
}

const ListItem = ({ title, subTitle, image , onPress , renderRightActions }: Props) => {
  return (
    <Swipeable 
    renderRightActions={renderRightActions}
    >
    <TouchableHighlight
      underlayColor={colors.light}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 30,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "600",
  },
});
