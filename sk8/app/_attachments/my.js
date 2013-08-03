$(document).on("pageinit","#home", function(){
    $.couch.db("sk8").view("app/teams", {
       success: function(data) {
         //console.log(data);
         $('#homeItems').empty();
         $.each(data.rows, function(index, value) {
             var item = (value.value || value.doc);
             $('#homeItems').append($('<li>').append($('<a>')
                      .attr("href", "skater.html?skater=" + item.name)
                      .text(item.name)
             
             )
            ); 
         });
         $('#homeItems').listview('refresh');
       }
   });
});

var urlVars = function(urlData) {
    //var urlData = $(this).data("url");
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

$(document).on("pageinit",'#skater',  function(){
  var skater = urlVars($(this).data("url"));
	$.couch.db("sk8").view("app/skaters", {
	   success: function(data) {
		 //console.log(data);
		 $('#skaterItems').empty();
		 $.each(data.rows, function(index, value) {
			 var item = (value.value || value.doc);
			 $('#skaterItems').append($('<li>').append($('<a>')
					  .attr("href", "team.html?skater=" + item.model)
					  .text(item.name)

			 )
			); 
		 });
		 $('#skaterItems').listview('refresh');
	   }
   });
});







