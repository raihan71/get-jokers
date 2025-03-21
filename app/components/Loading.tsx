import React from 'react';
import { ActivityIndicator } from 'react-native';
import colors from '../constants/colors';

const Loading = () => {
  return <ActivityIndicator size={40} color={colors.primary} />;
};

export default Loading;
