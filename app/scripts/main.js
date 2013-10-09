(function(){
	var requestPayload = {next: true};
	$('#submitPayment').on('click', function(){
		//	send the domain as query param
		window.location = 'http://ist-cveera-6065:5000/ccUpsellConfirm.html?domain=http://IST-cveera-6065:9001/';
	});

	$('#billMeLater').on('click', function(){
		//	post message to navigate to next view in the parent
		parent.postMessage(JSON.stringify(requestPayload), getQueryParams('domain'));
	});

	$('#continue').on('click', function(){
		//	post message to navigate to next view in the parent
		parent.postMessage(JSON.stringify(requestPayload), getQueryParams('domain'));
	});

	function getQueryParams(param) {
		var queryStr = window.location.search.slice(1),
		params = queryStr.split('&');
		for(var i=0; i < params.length; i++){
			var pair = params[i].split('=');
			if(pair[0] === param) {
				return pair[1];
			}
		}
		return false;
	}
})();