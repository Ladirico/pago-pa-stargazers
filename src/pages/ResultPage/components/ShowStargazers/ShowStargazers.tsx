import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Line from '../../../../components/line/Line';
import {responseStargazersInterfaces} from '../../../../services/responseInterfaces/ResponseStargazersInterfaces';

interface StargazersInterface {
  stargazers: Array<responseStargazersInterfaces> | [] | undefined;
}

const ShowStargazers = ({stargazers}: StargazersInterface) => {
  const [mapPari, setMapPari] = useState<responseStargazersInterfaces[]>([]);
  const [mapDispari, setMapDispari] = useState<responseStargazersInterfaces[]>(
    [],
  );

  const [showStargazersList, setShowshowStargazersList] =
    useState<boolean>(false);

  useEffect(() => {
    setShowshowStargazersList(false);
  }, []);

  const showList = () => {
    setShowshowStargazersList(!showStargazersList);
  };

  useMemo(() => {
    let mapPariCopy: any = stargazers?.filter((el, index) => index % 2 === 0);
    let mapDispariCopy: any = stargazers?.filter(
      (el, index) => index % 2 !== 0,
    );
    setMapPari(mapPariCopy);
    setMapDispari(mapDispariCopy);
  }, [stargazers]);

  return (
    <View style={style.container}>
      <Line />
      {stargazers && (
        <TouchableOpacity onPress={showList}>
          <View style={style.wrapperStars}>
            <Text style={style.star}>&#9734;</Text>
            <Text style={style.text}> {stargazers.length}</Text>
          </View>
        </TouchableOpacity>
      )}
      {showStargazersList && (
        <View style={style.wrapper}>
          {mapPari.length > 0 && (
            <View style={style.wrapper2}>
              <View style={style.wrap}>
                {mapPari?.map((el, index) => {
                  return (
                    <View style={style.wrapperStars1} key={index}>
                      <Image style={style.img} source={{uri: el.avatar_url}} />
                      <Text style={style.text}>{el.login}</Text>
                    </View>
                  );
                })}
              </View>
              <View style={style.wrap}>
                {mapPari &&
                  mapDispari?.map((el, index) => {
                    return (
                      <View style={style.wrapperStars1} key={index}>
                        <Image
                          style={style.img}
                          source={{uri: el.avatar_url}}
                        />
                        <Text style={style.text}>{el.login}</Text>
                      </View>
                    );
                  })}
              </View>
            </View>
          )}
        </View>
      )}
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
  wrapper: {
    width: '100%',
    marginBottom: 30,
  },
  wrapper2: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
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
  wrapperStars1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderColor: 'white',
    borderWidth: 2,
    paddingTop: 30,
    paddingBottom: 30,
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
