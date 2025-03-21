import React from 'react';
import { Text, TouchableOpacity, Pressable } from 'react-native';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

interface CardParentProps {
  no: number;
  title: string;
  showDetails: boolean;
  setShowDetails: (showDetails: boolean) => void;
  handleToTop?: () => void;
}

const CardParent = ({
  no,
  title,
  setShowDetails,
  showDetails,
  handleToTop,
}: CardParentProps) => {
  return (
    <StyledPressable
      onPress={() => setShowDetails(!showDetails)}
      className="flex cursor-pointer flex-row items-center shadow justify-between p-4 border-t border-l border-r border-b-2 border-slate-200 bg-white rounded-md">
      <Text>{no}</Text>
      <Text>{title}</Text>
      <TouchableOpacity
        onPress={handleToTop}
        className={`${no === 1 ? 'bg-red-200' : 'bg-green-200'} p-2 rounded-full`}>
        <Text className="text-white text-xs">{no === 1 ? '⬆️' : '↗️'}</Text>
      </TouchableOpacity>
      {showDetails ?
        <Pressable
          onPress={() => setShowDetails(!showDetails)}
          className="p-2 border border-yellow-100 bg-amber-200 rounded-full">
          <Text>👀</Text>
        </Pressable>
      : null}
    </StyledPressable>
  );
};

export default CardParent;
