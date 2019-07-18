import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>主に賛美</Text>
          <Text style={styles.memoDate}>2019/7/5</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>エリヤの日</Text>
          <Text style={styles.memoDate}>2019/7/5</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>賛美主ハレルヤ</Text>
          <Text style={styles.memoDate}>2019/7/5</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>We Are Made For Worship</Text>
          <Text style={styles.memoDate}>2019/7/5</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>Turn It Up</Text>
          <Text style={styles.memoDate}>2019/7/5</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    backgroundColor: '#FFF',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
