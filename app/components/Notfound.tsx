import React from 'react';
import { View, Text } from 'react-native';

const Notfound = () => {
  return (
    <View className="flex items-center justify-center border border-slate-200 bg-slate-50 p-4">
      <Text className="text-base">404 Not Found</Text>
    </View>
  );
};

export default Notfound;
