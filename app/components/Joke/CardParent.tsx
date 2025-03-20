import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

const CardParent = ({ jokes = ['Joke 1', 'Joke 2'] }) => {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <>
      <StyledPressable
        onPress={() => setShowDetails(!showDetails)}
        className="flex flex-row items-center shadow justify-between p-4 border border-slate-200 rounded-lg bg-white">
        <Text>1</Text>
        <Text>Technology</Text>
        <TouchableOpacity className="bg-blue-500 p-1.5 rounded-md">
          <Text className="text-white">Go Top</Text>
        </TouchableOpacity>
        {showDetails ?
          <TouchableOpacity className="bg-blue-500 p-2 rounded-full">
            <Text>👀</Text>
          </TouchableOpacity>
        : null}
      </StyledPressable>

      {showDetails && (
        <View className="p-4 mx-1 bg-slate-50 rounded-b-lg border border-slate-200 border-t-0">
          {jokes.map((joke, index) => (
            <Text key={index} className="mb-2">
              {joke}
            </Text>
          ))}
        </View>
      )}
    </>
  );
};

export default CardParent;
