import React, {useState, useEffect, useMemo} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Line from '../../../../components/line/Line';
import {responseStargazersInterfaces} from '../../../../services/responseInterfaces/ResponseStargazersInterfaces';
import SingleItem from '../singleItem/SingleItem';
import {style} from './Styles';

interface StargazersInterface {
  stargazers: Array<responseStargazersInterfaces> | [] | undefined;
}

const ShowStargazers = ({stargazers}: StargazersInterface) => {
  const [showStargazersList, setShowshowStargazersList] =
    useState<boolean>(false);

  const showList = () => {
    stargazers && setShowshowStargazersList(!showStargazersList);
  };

  const mapOddItems = useMemo(() => {
    return stargazers?.filter((el, index) => index % 2 === 0) ?? [];
  }, [stargazers]);
  const mapEvenItems = useMemo(() => {
    return stargazers?.filter((el, index) => index % 2 !== 0) ?? [];
  }, [stargazers]);

  useEffect(() => {
    setShowshowStargazersList(false);
  }, []);

  return (
    <View style={style.container}>
      <Line />
      <TouchableOpacity
        testID="show-stargazers-button-test"
        onPress={showList}
        style={style.button}>
        <Text style={style.butt}>
          <SingleItem isStarWrapper={true} text={stargazers?.length ?? 0} />
        </Text>
      </TouchableOpacity>
      {showStargazersList && (
        <View
          style={style.wrapperStargazersList}
          testID="container-stargazers-test">
          {mapOddItems.length > 0 && (
            <View style={style.alignStargazersLists}>
              <View style={style.wrapHalfStargazersList}>
                {mapOddItems?.map((el, index) => {
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
                {mapOddItems &&
                  mapEvenItems?.map((el, index) => {
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

export default ShowStargazers;
