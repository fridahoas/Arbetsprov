$(function() {
	
	$( "#searchInput" ).keyup(function( event) {
		//Log if ENTER key is hit
		if(event.keyCode == 13){
			renderLog($(this).val());
			$(this).val("");
		//No fetch if ARROW UP or ARROW DOWN 
		} else if ( (event.keyCode != 38) && (event.keyCode != 40) )   {
			//No fetch if empty input
			if ($.trim(this.value).length){
				var url = "http://libris.kb.se/xsearch?n=20&query=" + $(this).val().replace(/\s+/g, '+') + "&format=json";
				$.get( url, function(){	
				}, "jsonp")
				.done( function ( data){
					$("#writerlist").empty();
					renderList(data.xsearch.list);
				})
				.fail( function (){
					$("#writerlist").empty();
					$("#writerlist").append("Kunde inte hittas");
				});
			}
		}
	});
});

/**
 * Render the search result list in the drop down 
 */
function renderList(list){
	var dataList = $("#writerlist");
	$.each(list, function(i, item) {
		var opt = $("<option></option>").attr("value", item.creator + " " + item.title);
		dataList.append(opt);
	});	
}

/** 
 * Log search result with date and time. 
 */
function renderLog(text){
	var d = new Date();
	var element = $("<li>");
	element.append("<span class='glyphicon glyphicon-ok' aria-hidden='true'>" + text + " - " + renderDay(d) + " " +  renderTime(d) + "</span>");
	$("#searchLog").append(element);
}

/** 
 * Render time as 11:01
 * @return time
 */
function renderTime( date ){
	return date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + (date.getDay() + 1)).slice(-2);
}

/** 
 * Return date as 2014-02-12 
 * @return day
 */
function renderDay( date ){
	return date.getHours() + ":" + date.getMinutes();
}