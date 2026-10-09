import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { InstaStyles } from '../styles/InstaStyles';

export type MessageType = {
  id: string;
  username: string;
  avatarCD: ImageSourcePropType;
  preview: string;
  time: string;
  isActive?: boolean;
};

interface MessageItemProps {
  message: MessageType;
}

export const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  return (
    <TouchableOpacity style={InstaStyles.messageItemContainer}>
      <View style={message.isActive ? InstaStyles.messageActiveRing : InstaStyles.messageAvatarContainer}>
        <Image source={message.avatarCD} style={InstaStyles.messageAvatar} />
      </View>
      
      <View style={InstaStyles.messageTextContent}>
        <Text style={InstaStyles.messageUsername}>{message.username}</Text>
        <Text style={InstaStyles.messagePreview} numberOfLines={1}>
          {message.preview} · {message.time}
        </Text>
      </View>
    </TouchableOpacity>
  );
};