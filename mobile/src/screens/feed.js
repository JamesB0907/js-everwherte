import { View, Text, Button } from 'react-native'
import React from 'react'

const Feed = props => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Text>Note Feed</Text>
      <Button
      title="Keep reading"
      onPress={() => props.navigation.navigate('Note')}
      />
    </View>
  );
};

Feed.navigationOptions = {
  title: 'Feed'
};

export default Feed