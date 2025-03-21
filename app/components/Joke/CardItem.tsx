import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface JokeItem {
  joke: string;
}

const CardItem = ({
  item,
  handlePress,
}: {
  item: JokeItem;
  handlePress: (item: JokeItem) => void;
}) => {
  return (
    <TouchableOpacity
      className="border-b border-r border-l border-slate-200 p-2 animate-fade-in"
      onPress={() => handlePress(item)}>
      <Text numberOfLines={2} className="leading-normal text-ellipsis p-0.5">
        {item?.joke}
      </Text>
    </TouchableOpacity>
  );
};

export default CardItem;
