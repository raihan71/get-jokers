import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styled } from 'nativewind';
import colors from '../constants/colors';

const StyledView = styled(View);

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <StyledView className="bg-white flex flex-row items-center justify-between p-4 border-b-2 border-slate-200 shadow-lg">
        <Text className="flex-1 justify-center text-center font-semibold text-lg">
          🤡 Get Jokers 🤡
        </Text>
        <TouchableOpacity
          onPress={() => setIsModalVisible(!isModalVisible)}
          className="items-end">
          <Ionicons name="settings-outline" size={20} color={colors.dark} />
        </TouchableOpacity>
      </StyledView>
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View className="flex-1 justify-start items-center bg-black/50">
          <TouchableOpacity
            className="bg-gray-50 rounded-full p-2.5 self-end m-4"
            onPress={() => setIsModalVisible(!isModalVisible)}>
            <Text>X</Text>
          </TouchableOpacity>
          <View className="bg-white p-6 rounded-lg shadow-lg w-5/6 m-4">
            <Text className="text-base">Made with 💖 by Raihan Nismara</Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Header;
