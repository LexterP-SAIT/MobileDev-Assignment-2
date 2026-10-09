import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ImageSourcePropType } from 'react-native';
import { InstaStyles } from '../styles/InstaStyles';

export type NoteType = {
  id: string;
  username: string;
  image: ImageSourcePropType;
  noteText?: string;
  isMap?: boolean;
};

interface NoteItemProps {
  note: NoteType;
}

export const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  return (
    <TouchableOpacity style={InstaStyles.noteItem}>
      {note.noteText && (
        <View style={InstaStyles.noteBubble}>
          <Text style={InstaStyles.noteBubbleText}>{note.noteText}</Text>
        </View>
      )}
     <Image source={note.image} style={InstaStyles.noteAvatar} />
     <Text style={InstaStyles.noteName} numberOfLines={1}>
        {note.username}
      </Text>
    </TouchableOpacity>
  );
};