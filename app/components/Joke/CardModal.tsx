import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

interface CardModalProps {
  jokes: string;
  showDetails: boolean;
  setShowDetails: (showDetails: boolean) => void;
}

const CardModal = ({ jokes, showDetails, setShowDetails }: CardModalProps) => {
  return (
    <Modal animationType="fade" visible={showDetails} transparent={true}>
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white p-6 rounded-lg shadow-lg w-5/6 m-4">
          <Text className="text-base mb-4">{jokes}</Text>
          <TouchableOpacity
            className="bg-gray-200 p-2 rounded-md self-end mt-2"
            onPress={() => setShowDetails(!showDetails)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CardModal;
