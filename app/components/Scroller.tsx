import React from 'react';
import { ScrollView } from 'react-native';

interface ScrollerProps {
  children: React.ReactNode;
  [key: string]: any;
}

const Scroller = ({ children, ...rest }: ScrollerProps) => {
  return <ScrollView {...rest}>{children}</ScrollView>;
};

export default Scroller;
