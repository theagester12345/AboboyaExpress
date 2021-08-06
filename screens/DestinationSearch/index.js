import React from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';

import styles from './styles';

const DestinationSearch = props => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Choose Destination"></TextInput>
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
