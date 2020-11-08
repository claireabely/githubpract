$.ajax({
   url: "https://www.strava.com/api/v3/athletes/227615/stats",
    dataType: 'jsonp',
    data: { Authorization: "Bearer 83ebeabdec09f6670863766f792ead24d61fe3f9" },
    success: function(data){
        console.log(data);
     }
 });