import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';

import MovieItem from '../components/MovieItem/MovieItem';
import {fetchMoviesAsync, fetchGenresAsync} from '../actions/moviesActions';

const SearchScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    dispatch(fetchMoviesAsync(query));
  };

  useEffect(() => {
    dispatch(fetchGenresAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <SearchBar
        value={query}
        onChangeText={text => setQuery(text)}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={movies}
        renderItem={item => <MovieItem item={item.item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SearchScreen;
