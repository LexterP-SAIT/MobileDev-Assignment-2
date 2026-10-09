import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather } from '@expo/vector-icons';
import { InstaStyles } from '../../styles/InstaStyles';
import { StoryItem, StoryType } from '../../components/StoryItem';
import { PostItem, PostType } from '../../components/PostsItem';

const MockPosts: PostType[] = [
  {
    id: '101',
    username: 'User 2',
    userAvatar: require('@/assets/images/Profile Picture 5.jpg'),
    postImage: require('@/assets/images/Post 1.png'),
    likes: 3479,
    hasLiked: false,
    caption: 'Im literally their only hope.',
  },
  {
    id: '102',
    username: 'User 5',
    userAvatar: require('@/assets/images/ProfileIcon.png'),
    postImage: require('@/assets/images/Post 2.png'),
    likes: 1204,
    hasLiked: false,
    caption: 'Enjoying the scenery in the PTU.',
  }
];

const MockStories: StoryType[] = [
  { id: '1', username: 'Your story', image: require('@/assets/images/Profile Picture 1.jpg'), isViewed: false },
  { id: '2', username: 'User 2', image: require('@/assets/images/Profile Picture 2.jpg'), isViewed: false },
  { id: '3', username: 'User 3', image: require('@/assets/images/Profile Picture 3.jpg'), isViewed: false },
  { id: '4', username: 'User 4', image: require('@/assets/images/Profile Picture 4.jpg'), isViewed: true },
];

export default function HomeScreen() {
  const [posts, setPosts] = useState<PostType[]>(MockPosts);

  const handleLikePost = (postId: string) => {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === postId 
          ? { 
              ...post, 
              hasLiked: !post.hasLiked, 
              likes: post.hasLiked ? post.likes - 1 : post.likes + 1 
            } 
          : post
      )
    );
  };

  const renderHeader = () => (
    <View>
      <View style={[
        InstaStyles.headerContainer, 
        { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 }
      ]}>
        <View style={{ position: 'absolute', left: 0, right: 0, alignItems: 'center', pointerEvents: 'box-none' }}>
          <Text style={InstaStyles.headerLogoText}>Instagram</Text>
        </View>

        <TouchableOpacity>
          <Feather name="plus-square" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="heart-outline" size={26} color="white" />
        </TouchableOpacity>
      </View>

      <View style={InstaStyles.storiesContainer}>
        <FlatList
          data={MockStories}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <StoryItem story={item} />}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={InstaStyles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostItem 
            post={item} 
            onLike={() => handleLikePost(item.id)} 
          />
        )}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}