<h1 align="center"> Stalking Favs </h1> <br>
<p align="center">
    <img alt="GitPoint" title="GitPoint" src=https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png width="300">
</p>
 
<h4 align="center">
  Search for information on your favorite creators on GitHub. </br></br> 
  Built with React Native.
</h4>

## Table of Contents

- [Introduction](#introduction)
- [Build Process](#build-process)
- [Features](#features)
- [Folder Structure](#folder-structure)

## Introduction

This application gives you the ability to see, for each person on GitHub, what projects they have created and how many people have added each project to their favorites.

**Available for Android.**

## Build Process
 
- Follow the [React Native Guide](https://facebook.github.io/react-native/docs/getting-started.html) for getting started building a project with native code.
- Clone or download the repo
- `npm i` to install dependencies
- `npx react-native run-android` to start the packager and run the app in the Android simulator
 
## Features

<p>
    <span>This is the first screen that is shown to the user. To begin the search there is a need to enter the name of the user whose information we want to         search for and click on the "Start Stalking" button</span>
</p>

</br>

<p align="center">
  <img src=https://github.com/Ladirico/pago-pa-stargazers/blob/develop/app/assets/reademeImgs/firstPageEmpty.jpeg width=250>
  <img src=https://github.com/Ladirico/pago-pa-stargazers/blob/develop/app/assets/reademeImgs/firstPageFull.jpeg width=250>
</p>

</br>

<p>
    <span>Once the search is started there can be two different scenarios. If the user should have accidentally entered an incorrect username or there should be      a technical problem with the services the user will be sent back to an error page. In this case clicking "Close" will redirect the user to the Reserarch          Page. The second scenario is where the GitHub user is found, as in the screenshot to the right.</span>
</p>

</br>

<p align="center">
  <img src=https://github.com/Ladirico/pago-pa-stargazers/blob/develop/app/assets/reademeImgs/error.jpeg width=250>
  <img src=https://github.com/Ladirico/pago-pa-stargazers/blob/develop/app/assets/reademeImgs/FoundCreator.jpeg width=250>
</p>

</br>

<p>
    <span>Choosing one of the projects made by the GitHub Creator whose information the user is searching for within the button will display the number of people who have bookmarked that repository. Clicking on the button will display the list of users who have bookmarked the project.</span>
</p>

</br>

<p align="center">
  <img src=https://github.com/Ladirico/pago-pa-stargazers/blob/develop/app/assets/reademeImgs/openedDropdown.jpeg width=250>
  <img src=https://github.com/Ladirico/pago-pa-stargazers/blob/develop/app/assets/reademeImgs/selectedElement.jpeg width=250>
  <img src=https://github.com/Ladirico/pago-pa-stargazers/blob/develop/app/assets/reademeImgs/result.jpeg width=250>
</p>
 
## Folder Structure 

* [assets](./app/assets)
  * [reademeImgs](./app/assets/reademeImgs)
* [components](./app/components)
  * [line](./app/components/line)
    * [Line.tsx](./app/components/line/Line.tsx)
    * [Styles.ts](./app/components/line/Styles.ts)
  * [pageHeader](./app/components/pageHeader)
    * [PageHeader.tsx](./app/components/pageHeader/PageHeader.tsx)    
    * [Styles.ts](./app/components/pageHeader/Styles.ts)
* [screens](./app/screens)
  * [errorPage](./app/screens/errorPage)
    * [ErrorPage.tsx](./app/screens/errorPage/ErrorPage.tsx)
    * [Styles.ts](./app/screens/errorPage/Styles.ts)
  * [resultPage](./app/screens/resultPage)
    * [components](./app/screens/resultPage/components)
    * [ResultPage.tsx](./app/screens/resultPage/ResultPage.tsx)
    * [Styles.ts](./app/screens/resultPage/Styles.ts)
  * [searchPage](./app/screens/searchPage)
    * [SearchPage.tsx](./app/screens/searchPage/SearchPage.tsx)
    * [Styles.ts](./app/screens/searchPage/Styles.ts)
* [services](./app/services)
  * [responseInterfaces](./app/services/responseInterfaces)
    * [ResponseAllUserReposInterface.ts](./app/services/responseInterfaces/ResponseAllUserReposInterface.ts)
    * [ResponseStargazersInterfaces.ts](./app/services/responseInterfaces/ResponseStargazersInterfaces.ts)
    * [ResponseUserInfoInterface.ts](./app/services/responseInterfaces/ResponseUserInfoInterface.ts)
  * [GithubApis.ts](./app/services/GithubApis.ts)
* [utils](./app/utils)
  * [mock](./app/utils/mock)
    * [ApisResponsesMock.ts](./app/utils/mock/ApisResponsesMock.ts)
* [App.tsx](./app/App.tsx)
