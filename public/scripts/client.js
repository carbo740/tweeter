/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(document).ready(function() {
  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  
  const createTweetElement = (data) => {
    let $tweet = $(`
    <article class="tweet">
      <header>
        <div class="userProfile">
          <img src="${data.user.avatars}"></img>
          <h3>${data.user.name}</h3>
        </div>
        <h4>${data.user.handle}</h4>
      </header>
      <p>${data.content.text}</p>
      <footer>
        <p>${data.created_at}</p>
        <div class="bottomIcons">
          <i1 id="flagIcon" class="fa-solid fa-flag"></i1>
          <i2 id="retweetIcon" class="fa-solid fa-retweet"></i2>
          <i3 id="heartIcon" class="fa-solid fa-heart"></i3>
        </div>
      </footer>
    </article>`);

    return $tweet;
  };
  
  const renderTweet = (tweets) => {
    $(".tweets-container").empty();
    for (let tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      $(".tweets-container").append($tweet);
    }
  };

  renderTweet(tweetData);
});
