$(document).on("pageinit","#home", function(){
    $.couch.db("sk8").view("app/skaters", {
       success: function(data) {
         //console.log(data);
         $('#homeItems').empty();
         $.each(data.rows, function(index, value) {
             var item = (value.value || value.doc);
             $('#homeItems').append($('<li>').append($('<a>')
                      .attr("href", "skater.html?skater=" + item.origin + item.type + item.sponsor + item.model)
                      .text(item.name)
             
             )
            ); 
         });
         $('#homeItems').listview('refresh');
       }
   });
});

var urlVars = function() {
    var urlData = $(this).data("url");
    var urlParts = urlData.split('?');
    var urlPairs = urlParts[1].split('&');
    var urlValues = {};
    for(var pair in urlPairs) {
	   var keyValue = urlPairs[pair].split('=');
	   var key = decodeURIComponent(keyValue[0]);
	   var value = decodeURIComponent(keyValue[1]);
	   urlValues[key] = value;
	 }
	 return urlValues;



};

$(document).on("pageinit","#skater", function(){
  var skater = urlVars()["skater"];
  console.log(skater);
  

});




