Brand site Integration with CNID client
=======================================

The CNID client serves social sign-on, AMG sign-on and brand site registration. The <b>CNID client</b> should be served over https in an iframe within a responsive modal dialog. The <b>CNID client</b> will communicate with the brand site via postMessage HTML5 API.

The following steps are necessary for the brand site integration with the CNID client,

1. Include the <a href="https://github.com/veeracs/postmessage/blob/master/app/css/cnid-client.css" target="_self"><b>CNID client</b> CSS</a> and <b>Bootstrap 2.3.2</b> CSS in the HEAD section.
<pre>
<code>&lt;link rel="stylesheet" href="https://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap.min.css"&gt;
&lt;link rel="stylesheet" href="css/cnid-client.css"&gt;</code>
</pre>
2. <a href="https://github.com/veeracs/postmessage/blob/master/app/index.html" target="_self">Add markup</a> for the <b>bootstrap modal</b> (that houses iframe), <b>the spinner</b> and <b>the buttons</b> (to launch the modal).
3. Include the following JavaScript libraries at the bottom of the page - <b>jquery ~1.10.2, bootstrap 2.3.2, cnid-client</b>.

	3.1. <b>cnid-client.js</b>: This file creates a CNID property on the global object, if there isn't already one, setting its value to an object containing a init method. The init method determines the brand client's environment and sets up the iframe URL to point to a corresponding CNID environment. For instance, the brand's staging environment will point to CNID staging and all other brand environments will point to the CNID production evironment.

	<pre>
	<code>
	&lt;script src="https://code.jquery.com/jquery-1.10.2.min.js"&gt;&lt;/script&gt;
	&lt;script src="https://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"&gt;&lt;/script&gt;
	&lt;script src="http://ci-cnid.conde.io/client/libs/cnid-client.js"&gt;&lt;/script&gt;
	</code>
	</pre>

4. Specify a couple of properties (<b>postMessageCallback</b> and <b>initializeCNID</b>) on the brand's global object for setting up the postMessage callback handler and for initializing the CNID client. (see sample code for details).
<pre>
	<code>
		var cnBrand = cnBrand || {
    	postMessageCallback: function (data){
			//	callback that'll recieve data (authToken, etc.) from CNID
		},
		initializeCNID: function(){
			CNID.init({...});
		}
	</code>
</pre>

5. The CNID client should be initialized in the following manner,

<pre>
<code>
CNID.init({
    iframeId: 'cnidClient',         //  required, id of iframe hosting the CNID client
    brand: 'com.condenet.glamour',  //  required, brand name launching the CNID client
    regPath: "auth",               	//  required, path to configure the CNID client, (possible values "auth" or "commenting")
    regSrc: 'CNEE_GLM',             //  required, registration source
    targetOrigin: 'dev-cnee.condenastdigital.com/admin/postmessage.html',  //  optional when postMessage callback handler is available in the global scope, origin/host receiving the postmessage
    postMessageCallback: postMessageCallback  //  required, callback method that'll receive postMessage data from the CNID client
});
</code>
</pre>

6. Setup click handlers on buttons that'll initialize the CNID client (via commenting or auth flows) and launch the responsive modal window. 

<pre>
	<code>
	$('#authlocal').on('click', function(){
	    cnBrand.initializeCNID('auth');
	});
	$('#commentinglocal').on('click', function(){
	    cnBrand.initializeCNID('commenting');
	});
	</code>
</pre>

Messages/data from the CNID client
---------------------------------

On the brand site, the <b>postMessageCallback</b> handler setup can expect to receive the following properties on the data object passed from the <b>CNID client</b>.

1. <b>scrollTop</b> - scroll to the top of the page within the modal when an error message is displayed.
2. <b>showLoader</b> - show loading status while the CNID client loads.
3. <b>authToken</b> - Use authToken to close the modal window and fetch cookie information from the CNID server and log the user in.
