import React from 'react';
import { Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { InstaStyles } from '../styles/InstaStyles';

export type GridItemType = {
  id: string;
  imageCD: ImageSourcePropType;
};

interface GridItemProps {
  item: GridItemType;
}

export const GridItem: React.FC<GridItemProps> = ({ item }) => {
  return (
    <TouchableOpacity style={InstaStyles.gridItemContainer}>
      <Image source={item.imageCD} style={InstaStyles.gridImage} />
    </TouchableOpacity>
  );
};