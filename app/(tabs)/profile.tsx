import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { InstaStyles } from '../../styles/InstaStyles';
import { GridItem, GridItemType } from '../../components/Grid';

const MockGrid: GridItemType[] = [
  { id: 'g1', imageCD: require('@/assets/images/VideoPlaceHolder.png') },
  { id: 'g2', imageCD: require('@/assets/images/VideoPlaceHolder.png') },
  { id: 'g3', imageCD: require('@/assets/images/VideoPlaceHolder.png') },
];

export default function ProfileScreen() {
  const renderProfileHeader = () => (
    <View>
      <View style={InstaStyles.profileNav}>
        <TouchableOpacity>
          <Feather name="plus-square" size={26} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity style={InstaStyles.profileUsernameRow}>
          <Text style={InstaStyles.profileUsername}>eldwyr</Text>
          <Feather name="chevron-down" size={20} color="white" />
        </TouchableOpacity>

        <View style={InstaStyles.profileNavRight}>
          <MaterialCommunityIcons name="at" size={26} color="#0095F6" />
          <TouchableOpacity>
            <Feather name="menu" size={26} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={InstaStyles.profileStatsSection}>
        <View style={InstaStyles.profileAvatarContainer}>
          <View style={[InstaStyles.noteBubble, { top: -20, left: 0 }]}>
             <Text style={InstaStyles.noteBubbleText}>Ready for...</Text>
          </View>
          <Image 
            source={require('@/assets/images/Profile Picture 1.jpg')} 
            style={InstaStyles.profileAvatar} 
          />
          <View style={InstaStyles.profileAddIcon}>
            <Ionicons name="add-circle" size={24} color="white" />
          </View>
        </View>

        <View style={InstaStyles.profileStatsGroup}>
          <View style={InstaStyles.profileStatItem}>
            <Text style={InstaStyles.profileStatNumber}>0</Text>
            <Text style={InstaStyles.profileStatLabel}>posts</Text>
          </View>
          <View style={InstaStyles.profileStatItem}>
            <Text style={InstaStyles.profileStatNumber}>44</Text>
            <Text style={InstaStyles.profileStatLabel}>followers</Text>
          </View>
          <View style={InstaStyles.profileStatItem}>
            <Text style={InstaStyles.profileStatNumber}>42</Text>
            <Text style={InstaStyles.profileStatLabel}>following</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={InstaStyles.profileBannersButton}>
        <Text style={InstaStyles.profileBannersText}>+ Add banners</Text>
      </TouchableOpacity>

      <View style={InstaStyles.profileActionsRow}>
        <TouchableOpacity style={InstaStyles.profileActionButton}>
          <Text style={InstaStyles.profileActionText}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={InstaStyles.profileActionButton}>
          <Text style={InstaStyles.profileActionText}>Share profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={InstaStyles.profileActionIconButton}>
          <Feather name="user-plus" size={18} color="white" />
        </TouchableOpacity>
      </View>

      <View style={InstaStyles.profileTabsRow}>
        <TouchableOpacity style={InstaStyles.profileTabItem}>
          <Feather name="grid" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={InstaStyles.profileTabItem}>
          <Feather name="play-circle" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={[InstaStyles.profileTabItem, InstaStyles.profileTabActive]}>
          <Ionicons name="repeat" size={26} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={InstaStyles.profileTabItem}>
          <Feather name="user" size={24} color="#888" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={InstaStyles.container}>
      <FlatList
        data={MockGrid}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GridItem item={item} />}
        numColumns={3}
        ListHeaderComponent={renderProfileHeader}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}