//create cookie

function createCookie(cookieName, cookieValue, daysToExpire) {
	var date = new Date();
	date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
	document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
}

function displayAllCookies() {
	var allCookieArray = document.cookie.split(';');
	
	console.log("\n");
	console.log(document.cookie);
	console.log("displayAllCookies.length " + allCookieArray.length);

	for(var i=0; i<allCookieArray.length; i++){
		console.log(allCookieArray[i]);
	}
}

