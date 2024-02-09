import { View, Text } from 'react-native'
import React from 'react'

const MyNotes = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Text>My Notes</Text>
    </View>
  );
};

MyNotes.navigationOptions = {
  title: 'My Notes'
};

export default MyNotes;