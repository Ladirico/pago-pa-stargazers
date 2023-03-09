import React, {useState, useEffect, useMemo} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Line from '../../../../components/line/Line';
import {responseStargazersInterfaces} from '../../../../services/responseInterfaces/ResponseStargazersInterfaces';
import SingleItem from '../singleItem/SingleItem';

interface StargazersInterface {
  stargazers: Array<responseStargazersInterfaces> | [] | undefined;
}

const ShowStargazers = ({stargazers}: StargazersInterface) => {
  // const [mapPari, setMapPari] = useState<responseStargazersInterfaces[]>([]);
  // const [mapDispari, setMapDispari] = useState<responseStargazersInterfaces[]>(
  //   [],
  // );
  const [showStargazersList, setShowshowStargazersList] =
    useState<boolean>(false);

  const showList = () => {
    stargazers && setShowshowStargazersList(!showStargazersList);
  };

  const mapPari = useMemo(() => {
    return stargazers?.filter((el, index) => index % 2 === 0) ?? [];
  }, [stargazers]);
  const mapDispari = useMemo(() => {
    return stargazers?.filter((el, index) => index % 2 !== 0) ?? [];
  }, [stargazers]);

  useEffect(() => {
    setShowshowStargazersList(false);
  }, []);

  return (
    <View style={style.container}>
      <Line />
      <TouchableOpacity onPress={showList} style={style.button}>
        <Text style={style.butt}>
          <SingleItem isStarWrapper={true} text={stargazers?.length ?? 0} />
        </Text>
      </TouchableOpacity>
      {showStargazersList && (
        <View style={style.wrapperStargazersList}>
          {mapPari.length > 0 && (
            <View style={style.alignStargazersLists}>
              <View style={style.wrapHalfStargazersList}>
                {mapPari?.map((el, index) => {
                  return (
                    <SingleItem
                      key={index}
                      text={el.login}
                      avatarUrl={el.avatar_url}
                    />
                  );
                })}
              </View>
              <View style={style.wrapHalfStargazersList}>
                {mapPari &&
                  mapDispari?.map((el, index) => {
                    return (
                      <SingleItem
                        key={index}
                        text={el.login}
                        avatarUrl={el.avatar_url}
                      />
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
  button: {
    marginTop: 30,
    backgroundColor: '#2da44e',
    borderRadius: 6,
    width: 130,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 4,
    paddingBottom: 4,
  },
  butt: {
    width: '100%',
  },
  wrapperStargazersList: {
    width: '100%',
    marginBottom: 30,
  },
  alignStargazersLists: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  wrapHalfStargazersList: {
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
