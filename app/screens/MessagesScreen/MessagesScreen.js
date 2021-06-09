import React, { useState } from "react";
import { FlatList, View } from "react-native";
import Screen from "../../components/Screen/Screen";
import ListItem from "../../components/ListItem/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator/ListItemSeparator";
import ListItemDeleteAction from "../../components/ListItemDeleteAction/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/logo-red.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/logo-red.png"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    // delete the message from messages
    setMessages(messages.filter((current) => current.id !== message.id));

    // call the server to delete message from database
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            image={item.image}
            subTitle={item.description}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../../assets/logo-red.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;
