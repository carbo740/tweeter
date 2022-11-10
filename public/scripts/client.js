/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/
const escape = (str) => {
 let div = document.createElement("div");
 div.appendChild(document.createTextNode(str));
 return div.innerHTML;
};

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
    <p>${escape(data.content.text)}</p>
    <footer>
      <p>${timeago.format(data.created_at)}</p>
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


const loadTweets = () => {
  $.ajax({
    url: '/tweets/',
    method: 'GET',
    dataType: 'json',
    success: (newTweet) => {
      renderTweet(newTweet.reverse());
    },
    error: (error) => {
      console.log(error);
    } 
  });
};


$(document).ready(function() {
  

  loadTweets();

  // SUBMIT HANDLER //

  let $newTweetForm =  $(".new-tweet-form");
  $newTweetForm.submit(function (event) {

    event.preventDefault();
    let serializedData = $(this).serialize();

    if ($("#tweet-text").val() === "" || null) {
      alert("You cannot submit an empty field!");
    } else if ($("#tweet-text").val().length > 140) {
      alert("Exceeded Limit of 140 Characters!");
    } else {
      $.post("/tweets/", serializedData).then((response) => {
        loadTweets();
        $(this).children("textarea").val("");
        $(".counter").text(140);
      });
    }
  });
});
