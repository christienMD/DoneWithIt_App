import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ListItem from "@/components/ListItem";
import Screen from "@/components/Screen";
import ListItemSeparator from "@/components/ListItemSeparator";
import ListItemDeleteAction from "@/components/ListItemDeleteAction";

interface Message {
  id: number;
  title: string;
  description: string;
  image: number;
}

const initialMessages = [
  {
    id: 1,
    title: "T Shirt1",
    description: "Description1",
    image: require("@/assets/images/mdprofile.jpg"),
  },
  {
    id: 2,
    title: "T Shirt2",
    description: "Description2",
    image: require("@/assets/images/mdprofile.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: Message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected: ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages([
            {
                id: 2,
                title: "T Shirt2",
                description: "Description2",
                image: require("@/assets/images/mdprofile.jpg"),
              },
        ])}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
