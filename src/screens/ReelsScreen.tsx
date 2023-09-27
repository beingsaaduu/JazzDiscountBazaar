import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions } from 'react-native';
import Video from 'react-native-video';
import videosData from '../assets/data/VideosData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import {ReelsScreenProps} from '../../App';

const screenHeight = Dimensions.get('window').height;

const ReelsScreen = ({navigation}: ReelsScreenProps): JSX.Element => {
  const tabBarHeight = useBottomTabBarHeight();
  const videoContainerHeight = screenHeight - tabBarHeight;
  const videoRefs = useRef<any>({});
  const [viewableIndex, setViewableIndex] = useState(0);


  const onViewableItemsChanged = ({ viewableItems, changed }) => {
    // Find the index of the first viewable item
    if (viewableItems.length > 0) {
      setViewableIndex(viewableItems[0].index);
    }

    // Pause videos that have gone out of view
    changed.forEach(({ item, isViewable }) => {
      const videoRef = videoRefs.current[item.key];
      if (videoRef) {
        if (!isViewable) {
          // Pause the video by setting paused to true
          videoRef.setNativeProps({ paused: true });
        } else {
          // Play the video by setting paused to false
          videoRef.setNativeProps({ paused: false });
        }
      }
    });
  };

  const viewabilityConfigCallbackPairs = useRef([
    { onViewableItemsChanged },
  ]);

  return (
    <FlatList
      data={videosData}
      renderItem={({ item, index }) => (
        <View key={index} style={[styles.container, { height: videoContainerHeight }]}>
          <Video
            ref={(video) => (videoRefs.current[item.key] = video)}
            source={item.videoSource}
            style={styles.backgroundVideo}
            repeat={true}
            resizeMode="cover"
            paused={index !== viewableIndex} // Pause video if not in view
          />
           <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{item.accountName}</Text>
            
          </View>
          <View style={{ position: 'absolute', bottom: 16, right: 16, flexDirection: 'column', alignItems: 'center' }}>
            <View style = {{marginBottom: 15, alignItems: "center"}}>
            <Ionicons name="heart-outline" size={30} color="white" />
            <Text style={{ color: 'white', fontSize: 18, marginRight: 0 }}>{item.likes}</Text>
            </View>
            <View>
            <Ionicons name="paper-plane-outline" size={30} color="white" />
            <Text style={{ color: 'white', fontSize: 18 }}>{item.shares}</Text>
            </View>
            <View style ={{marginTop: 10}}>
            <Ionicons name="ellipsis-horizontal-outline" size={30} color="white" />
            </View>
          </View>
         </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      horizontal={false}
      pagingEnabled={true}
      showsVerticalScrollIndicator={false}
      viewabilityConfigCallbackPairs={ 
        viewabilityConfigCallbackPairs.current 
      }
      initialNumToRender={1} // Render only the first item initially to improve performance
      windowSize={2}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  backgroundVideo: {
    flex: 1,
  },
});

export default ReelsScreen;