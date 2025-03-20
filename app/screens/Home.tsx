import React from 'react';
import Scroller from '../components/Scroller';
import { View } from 'react-native';
import CardParent from '../components/Joke/CardParent';

const Home = () => {
  return (
    <Scroller>
      <View className="h-auto p-2">
        <CardParent />
      </View>
      <View className="h-[100px] bg-blue-500" />
      <View className="h-[100px] bg-green-500" />
      <View className="h-[100px] bg-yellow-500" />
      <View className="h-[100px] bg-purple-500" />
      <View className="h-[100px] bg-orange-500" />
      <View className="h-[100px] bg-pink-500" />
    </Scroller>
  );
};

export default Home;
