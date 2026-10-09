import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';
import { InstaStyles } from '../../styles/InstaStyles';
import { NoteItem, NoteType } from '../../components/NotesItem';
import { MessageItem, MessageType } from '../../components/MessageItem';

const MockNotes: NoteType[] = [
  { 
    id: 'n1', 
    username: 'Your note', 
    image: require('@/assets/images/Profile Picture 1.jpg'), 
    noteText: 'Ready for...' 
  },
  { 
    id: 'n2', 
    username: 'Map', 
    image: require('@/assets/images/Maps.png'), 
    isMap: true 
  },
];

const MockMessages: MessageType[] = [
  { 
    id: 'm1', 
    username: 'User 1', 
    avatarCD: require('@/assets/images/Profile Picture 0.jpg'), 
    preview: 'Sent a reel by primatepaige', 
    time: '22h', 
  },
  { 
    id: 'm2', 
    username: 'User 2', 
    avatarCD: require('@/assets/images/Profile Picture 2.jpg'), 
    preview: 'Sent a reel by deadpool', 
    time: '8h', 
  },
  { 
    id: 'm3', 
    username: 'User 3', 
    avatarCD: require('@/assets/images/Profile Picture 3.jpg'), 
    preview: 'Sent', 
    time: '1d' 
  },
  { 
    id: 'm4', 
    username: 'User 4', 
    avatarCD: require('@/assets/images/Profile Picture 4.jpg'), 
    preview: 'Active 12m ago', 
    time: '12m', 
    isActive: true, 
  },
  { 
    id: 'm5', 
    username: 'User 5', 
    avatarCD: require('@/assets/images/Profile Picture 5.jpg'), 
    preview: 'Sent', 
    time: '2d' 
  },
];

export default function DirectMessagesScreen() {
  const renderHeader = () => (
    <View>
      <View style={InstaStyles.dmHeader}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={InstaStyles.dmHeaderUsername}>eldwyr </Text>
          <Feather name="chevron-down" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="edit" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={InstaStyles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" />
        <Text style={InstaStyles.searchText}>Search or ask Meta AI</Text>
      </View>

      <View style={InstaStyles.notesWrapper}>
        <FlatList
          data={MockNotes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <NoteItem note={item} />}
        />
      </View>

      <View style={InstaStyles.dmListHeader}>
        <Text style={InstaStyles.dmListTitle}>Messages</Text>
        <TouchableOpacity>
          <Text style={InstaStyles.dmListRequests}>Requests</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={InstaStyles.container}>
      <FlatList
        data={MockMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MessageItem message={item} />}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}