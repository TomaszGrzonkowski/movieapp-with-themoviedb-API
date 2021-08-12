import React from 'react';
import {useSelector} from 'react-redux';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const DetailsScreen = ({route}) => {
  const navigation = useNavigation();
  const {itemId} = route.params;

  const movie = useSelector(state =>
    state.movies.movies.find(el => el.id === itemId),
  );

  const genres = useSelector(state =>
    state.movies.genres.filter(el => movie.genre_ids.includes(el.id)),
  );

  const handleNavigate = () => {
    navigation.goBack();
  };

  return (
    <Card>
      <Card.Title>{movie.original_title}</Card.Title>
      <Card.Divider />
      <Card.Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
        }}
      />
      <View style={Styles.textWrapper}>
        {genres.map((el, index) => (
          <Text key={index}>{el.name}</Text>
        ))}
      </View>
      <Text>Release Date: {movie.release_date}</Text>
      <View style={Styles.textWrapper}>
        <Text>Overview: {movie.overview}</Text>
      </View>
      <View style={Styles.textWrapper}>
        <Text>Popularity: {movie.popularity}</Text>
        <Text>Vote count: {movie.vote_count}</Text>
      </View>
      <Button
        buttonStyle={Styles.button}
        title="Go back"
        onPress={handleNavigate}
      />
    </Card>
  );
};

export default DetailsScreen;

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
