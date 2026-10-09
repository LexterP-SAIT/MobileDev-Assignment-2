import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { InstaStyles } from '../../styles/InstaStyles';
import { ReelItem, ReelType } from '../../components/ReelsItems';

const MockReels: ReelType[] = [
  {
    id: 'r1',
    username: 'User 7',
    userAvatar: require('@/assets/images/ProfileIcon.png'),
    bgImage: require('@/assets/images/VideoPlaceHolder.png'),
    caption: 'who can it be now?',
    likes: 93900,
    hasLiked: false,
    comments: '116',
    reposts: 12500,
    hasReposted: false,
    bookmarks: '49.3K',
    saves: '6,374',
  },
  {
    id: 'r2',
    username: 'User 8',
    userAvatar: require('@/assets/images/ProfileIcon.png'),
    bgImage: require('@/assets/images/VideoPlaceHolder.png'),
    caption: 'V stepped into the crowd...',
    likes: 45200,
    hasLiked: false,
    comments: '342',
    reposts: 5100,
    hasReposted: false,
    bookmarks: '12.2K',
    saves: '1,204',
  }
];

export default function ReelsScreen() {
  const [reels, setReels] = useState<ReelType[]>(MockReels);

  const handleLikeReel = (reelId: string) => {
    setReels((currentReels) =>
      currentReels.map((reel) =>
        reel.id === reelId 
          ? { 
              ...reel, 
              hasLiked: !reel.hasLiked, 
              likes: reel.hasLiked ? reel.likes - 1 : reel.likes + 1 
            } 
          : reel
      )
    );
  };

  const handleRepostReel = (reelId: string) => {
    setReels((currentReels) =>
      currentReels.map((reel) =>
        reel.id === reelId 
          ? { 
              ...reel, 
              hasReposted: !reel.hasReposted, 
              reposts: reel.hasReposted ? reel.reposts - 1 : reel.reposts + 1 
            } 
          : reel
      )
    );
  };

  return (
    <View style={InstaStyles.reelsContainer}>
      <View style={[
        InstaStyles.reelFloatingHeader, 
        { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 }
      ]}>
        
        <View style={{ width: 26 }} />

        <View style={{ position: 'absolute', left: 0, right: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', pointerEvents: 'box-none' }}>
          <Text style={[InstaStyles.reelHeaderTextActive, { marginRight: 20 }]}>Reels</Text>
          <View style={[InstaStyles.reelHeaderFriends, { flexDirection: 'row', alignItems: 'center' }]}>
            <Text style={InstaStyles.reelHeaderTextInactive}>Friends </Text>
            <Image 
              source={require('@/assets/images/VideoPlaceHolder.png')} 
              style={[InstaStyles.reelHeaderFriendAvatar, { marginLeft: 4 }]} 
            />
            <Image 
              source={require('@/assets/images/VideoPlaceHolder.png')} 
              style={InstaStyles.reelHeaderFriendAvatar} 
            />
          </View>
        </View>

        <TouchableOpacity>
          <Feather name="settings" size={26} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={reels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReelItem 
            reel={item} 
            onLike={() => handleLikeReel(item.id)}
            onRepost={() => handleRepostReel(item.id)}
          />
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
}