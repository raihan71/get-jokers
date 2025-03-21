import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styled } from 'nativewind';
import CardItem from './CardItem';
import CardModal from './CardModal';
import CardParent from './CardParent';
import Notfound from '../Notfound';

const StyledView = styled(View);

interface JokesCardProps {
  jokes: Record<string, any>;
  category: string;
  noId: number;
  pressToTop?: () => void;
  addMore?: (category: string) => void;
}

const JokesCard = ({
  jokes,
  category,
  noId,
  pressToTop,
  addMore,
}: JokesCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [jokeItem, setJokeItem] = useState('');

  const handleShowDetails = (joke: any) => {
    setJokeItem(joke?.joke);
    showDetails ? setShowModal(true) : setShowModal(false);
  };

  return (
    <View className="mb-4">
      <CardParent
        showDetails={showDetails}
        setShowDetails={setShowDetails}
        no={noId}
        title={category}
        handleToTop={pressToTop}
      />
      {showDetails && (
        <StyledView className="mx-1.5 mb-2.5 rounded-e-lg bg-gray-50 shadow-lg animate-fade-in">
          {jokes?.length > 0 ?
            <>
              {jokes?.map((item: any, index: number) => (
                <CardItem
                  key={index}
                  item={item}
                  handlePress={handleShowDetails}
                />
              ))}
              {jokes?.length < 4 ?
                <TouchableOpacity
                  onPress={() => addMore && addMore(category)}
                  className="px-3 py-2.5 bg-blue-500 border border-blue-500 rounded-b-lg">
                  <Text className="text-white leading-normal">Add More </Text>
                </TouchableOpacity>
              : null}
            </>
          : <Notfound />}
        </StyledView>
      )}

      <CardModal
        jokes={jokeItem}
        showDetails={showModal}
        setShowDetails={() => setShowModal(!showModal)}
      />
    </View>
  );
};

export default JokesCard;
