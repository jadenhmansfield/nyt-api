var app = {
    nyTimesMovieReviews: [],
  
    initialize: function () {
      app.getNYTimesData();
    },
  
    makeHTML: function () {
      var theHTML = '';
      for (var i = 0; i < app.nyTimesMovieReviews.length; i++) {
        theHTML += "<div class='nytMovieReviews'>";
        theHTML += '<h3>' + app.nyTimesMovieReviews[i] + '</h3>';
        theHTML += '</div>';
      }
      $('.container').html(theHTML);
    },
  
    getNYTimesData: function () {
      console.log('Get NY Times Data');
      var currentSearchWord = 'christmas';
      var nyTimesURL =
        'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' +
        currentSearchWord +
        '&api-key=';
      var myNYKey = 'x4IiomUcddSqZamWOTLYTX0kQJ48ioFA';
      var nyTimesReqURL = nyTimesURL + myNYKey;
      console.log(nyTimesReqURL);
      fetch(nyTimesReqURL)
        .then(response => response.json())
        .then(data => {
          data.results.forEach(element => {   
            console.log(element.headline);
            app.nyTimesMovieReviews.push(element.headline);
        });
        console.log(app.nyTimesMovieReviews);
        app.makeHTML();
        })
        .catch(error => console.log(error));
    },
  };