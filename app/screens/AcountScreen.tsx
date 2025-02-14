import { FlatList, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons as IconType } from "@expo/vector-icons";

import colors from "../config/colors";
import ListItem from "@/components/ListItem";
import Screen from "@/components/Screen";
import Icon from "@/components/Icon";
import ListItemSeparator from "@/components/ListItemSeparator";

interface MenuItem {
  title: string;
  icon: {
    name: keyof typeof IconType.glyphMap;
    backgroundColor: string;
  };
}

const menuItems: MenuItem[] = [
  {
    title: "My Listings",

    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",

    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

const AcountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="MD Christien"
          subTitle="mdchristien12gmail.com"
          image={require("@/assets/images/mdprofile.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem 
      title="Log Out"
      IconComponent={
        <Icon name="logout" backgroundColor="#ffe66d" />
      }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AcountScreen;
