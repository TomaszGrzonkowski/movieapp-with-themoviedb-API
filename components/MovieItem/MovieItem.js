import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const MovieItem = ({item}) => {
  const navigation = useNavigation();

  const handleNavigate = () =>
    navigation.navigate('Details', {itemId: item.id});

  return (
    <Card>
      <Card.Title>{item.original_title}</Card.Title>
      <Card.Divider />
      <Card.Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
        }}
      />
      <View style={Styles.textWrapper}>
        <Text>Popularity: {item.popularity}</Text>
        <Text>Vote count: {item.vote_count}</Text>
      </View>
      <Button
        buttonStyle={Styles.button}
        title="Check details"
        onPress={handleNavigate}
      />
    </Card>
  );
};

export default MovieItem;

const Styles = StyleSheet.create({
  textWrapper: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#463973',
  },
});
