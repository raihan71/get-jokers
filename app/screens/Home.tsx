import React from 'react';
import { RefreshControl, View } from 'react-native';
import { useJokes } from '../hooks/useJokesContext';
import { JokesCard, Scroller } from '../components';
import colors from '../constants/colors';

const Home = () => {
  const {
    categories,
    jokes,
    loading,
    handlePressToTop,
    handleAddMore,
    getCategories,
  } = useJokes();

  return (
    <Scroller
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={getCategories}
          colors={[colors.primary]}
        />
      }>
      <View className="h-auto p-2.5">
        {categories?.map((category: string, index: number) => (
          <JokesCard
            key={category}
            noId={index + 1}
            category={category}
            jokes={jokes[category]}
            pressToTop={() => handlePressToTop(index)}
            addMore={() => handleAddMore(category)}
          />
        ))}
      </View>
    </Scroller>
  );
};

export default Home;
