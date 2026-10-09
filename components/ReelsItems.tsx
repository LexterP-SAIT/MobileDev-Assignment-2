import { View, Text, Image, TouchableOpacity, useWindowDimensions, ImageSourcePropType } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { InstaStyles } from '../styles/InstaStyles';

export type ReelType = {
  id: string;
  username: string;
  userAvatar: ImageSourcePropType;
  bgImage: ImageSourcePropType;
  caption: string;
  likes: number;
  comments: string;
  reposts: number;
  bookmarks: string;
  saves: string;
  hasLiked?: boolean;
  hasReposted?: boolean;
};

interface ReelItemProps {
  reel: ReelType;
  onLike?: () => void;
  onRepost?: () => void;
}

export const ReelItem: React.FC<ReelItemProps> = ({ reel, onLike, onRepost }) => {
  const { height, width } = useWindowDimensions();

  const REEL_HEIGHT = height - 80; 

  return (
    <View style={[InstaStyles.reelWrapper, { height: REEL_HEIGHT, width }]}>
      <Image source={reel.bgImage} style={InstaStyles.reelImage} />

      <View style={InstaStyles.reelOverlay}>
        
        <View style={InstaStyles.reelBottomInfo}>
          <View style={InstaStyles.reelUserInfo}>
            <Image source={reel.userAvatar } style={InstaStyles.reelAvatar} />
            <Text style={InstaStyles.reelUsername}>{reel.username}</Text>
            <TouchableOpacity style={InstaStyles.reelFollowButton}>
              <Text style={InstaStyles.reelFollowText}>Follow</Text>
            </TouchableOpacity>
          </View>
          <Text style={InstaStyles.reelCaption}>{reel.caption}</Text>
        </View>

        <View style={InstaStyles.reelRightActions}>
          <TouchableOpacity style={InstaStyles.reelActionItem} onPress={onLike}>
            <Ionicons name="heart-outline" size={32} color="white" />
            <Text style={InstaStyles.reelActionText}>{reel.likes >= 1000 ? (reel.likes / 1000).toFixed(1) + 'K' : reel.likes}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={InstaStyles.reelActionItem}>
            <Ionicons name="chatbubble-outline" size={30} color="white" />
            <Text style={InstaStyles.reelActionText}>{reel.comments}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={InstaStyles.reelActionItem} onPress={onRepost}>
            <Ionicons name="repeat" size={32} color="white" />
            <Text style={InstaStyles.reelActionText}>{reel.reposts >= 1000 ? (reel.reposts / 1000).toFixed(1) + 'K' : reel.reposts}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={InstaStyles.reelActionItem}>
            <Feather name="send" size={28} color="white" />
            <Text style={InstaStyles.reelActionText}>{reel.bookmarks}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={InstaStyles.reelActionItem}>
            <Feather name="bookmark" size={28} color="white" />
            <Text style={InstaStyles.reelActionText}>{reel.saves}</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={reel.userAvatar} style={InstaStyles.reelAudioSquare} />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};