import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { InstaStyles } from '../styles/InstaStyles';

export type StoryType = {
  id: string;
  username: string;
  image: ImageSourcePropType;
  isViewed: boolean;
};

interface StoryItemProps {
  story: StoryType;
}

export const StoryItem: React.FC<StoryItemProps> = ({ story }) => {
  return (
    <TouchableOpacity style={InstaStyles.storyItem}>
      <View style={[InstaStyles.storyRing, story.isViewed && { borderColor: '#444' }]}>
        <Image source={story.image} style={InstaStyles.storyImage} />
      </View>
      <Text style={InstaStyles.storyUsername}>{story.username}</Text>
    </TouchableOpacity>
  );
};