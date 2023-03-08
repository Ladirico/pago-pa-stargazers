import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Line from '../../../../components/Line/Line';
import {responseStargazersInterfaces} from '../../../../services/Interfaces/ResponseStargazersInterfaces';

interface StargazersInterface {
  stargazers: Array<responseStargazersInterfaces> | [] | undefined;
}

const ShowStargazers = ({stargazers}: StargazersInterface) => {
  const [showStargazersList, setShowshowStargazersList] =
    useState<boolean>(false);
  console.log(stargazers);
  useEffect(() => {
    setShowshowStargazersList(false);
  }, []);

  const showList = () => {
    setShowshowStargazersList(!showStargazersList);
  };

  return (
    <View style={style.container}>
      <Line />
      {stargazers ? (
        <TouchableOpacity onPress={showList}>
          <View style={style.wrapperStars}>
            <Text style={style.star}>&#9734;</Text>
            <Text style={style.text}> {stargazers.length}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={style.wrapperStars}>
          <Text style={style.textSottile}>
            Seleziona un progetto per vedere da quante persone è stato messo tra
            i perferiti
          </Text>
        </View>
      )}
      {showStargazersList &&
        stargazers?.map((el, index) => {
          return (
            <View style={style.wrapperStars} key={index}>
              <Image style={style.img} source={{uri: el.avatar_url}} />
              <Text style={style.text}>{el.login}</Text>
            </View>
          );
        })}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  star: {
    color: 'yellow',
    fontSize: 20,
  },
  wrapperStars: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
  textSottile: {
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 15,
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 80,
    marginRight: 10,
  },
});

export default ShowStargazers;
