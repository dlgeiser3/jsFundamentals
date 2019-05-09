//Objects

//Objects store multiple objects that are similar in structre. This is great for our JS logic
//Objects can hold multiple datatypes
//Denoted with { }
//Key - Value Pairs

//example

let netflix = {
  id: 1, 
  name: "Super Store",
  seasons: {
    season1: {
      seasonInfo: {
        episodeInfo:[
          {episode: 1, episodeName: 'Pilot'},
          {episode: 2, episodeName: "Magazine Profile"},
        ]
      }
    },
    season2: {
      seasonInfo: {
        episodeInfo: [
          {episode: 5, episodeName: 'Shoplifter'},
          {episode: 6, episodeName: 'Secret Shopper'},
        ]
      }
    },
    season3: {
      seasonInfo: {
        episodeInfo: [
          {episode: 6, episodeName: 'Sale Day'},
          {episode: 7, episodeName: 'Clearance Section'},
        ]
      }
    },
  }

}

// Dot Notation

// console.log('All data: ', netflix);
// console.log('Just season info: ', netflix.seasons.season1.seasonInfo);
// console.log('Episode Name: ', netflix.seasons.season1.seasonInfo.episodeInfo[0].episodeName);

console.log('episode', netflix.seasons.season2.seasonInfo.episodeInfo[0].episode, netflix.seasons.season2.seasonInfo.episodeInfo[0].episodeName);