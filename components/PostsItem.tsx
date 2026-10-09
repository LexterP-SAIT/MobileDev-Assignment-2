import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { InstaStyles } from '../styles/InstaStyles';
import { useRouter } from 'expo-router';

export type PostType = {
  id: string;
  username: string;
  userAvatar: ImageSourcePropType;
  postImage: ImageSourcePropType;
  likes: number;
  caption: string;
  hasLiked?: boolean;
};

interface PostItemProps {
  post: PostType;
  onLike?: () => void;
}

export const PostItem: React.FC<PostItemProps> = ({ post, onLike }) => {
  const router = useRouter();

  const handleOpenPostDetails = () => {
    router.push({
      pathname: '/post/[id]' as any,
      params: { id: post.id },
    });
  };

  return (
    <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#262626' }}>
      <View style={InstaStyles.postHeader}>
        <View style={InstaStyles.postUserInfo}>
          <Image source={post.userAvatar} style={InstaStyles.postAvatar} />
          <Text style={InstaStyles.postUsername}>{post.username}</Text>
          <Text style={InstaStyles.postFollowBtn}>Follow</Text>
        </View>
        <Feather name="more-horizontal" size={20} color="white" />
      </View>

      <Image source={post.postImage} style={InstaStyles.postImage} />

      <View style={InstaStyles.postActions}>
        <View style={InstaStyles.postActionGroup}>
          <TouchableOpacity onPress={onLike}>
            <Ionicons name="heart-outline" size={26} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOpenPostDetails}>
            <Ionicons name="chatbubble-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity><Feather name="send" size={24} color="white" /></TouchableOpacity>
        </View>
        <TouchableOpacity><Feather name="bookmark" size={24} color="white" /></TouchableOpacity>
      </View>

      <View style={InstaStyles.postFooter}>
        <Text style={InstaStyles.likesText}>{post.likes.toLocaleString()} likes</Text>
        <View style={InstaStyles.captionContainer}>
          <Text style={InstaStyles.textWhite}>
            <Text style={{ fontWeight: 'bold' }}>{post.username} </Text>
            {post.caption}
          </Text>
        </View>
      </View>
    </View>
  );
};