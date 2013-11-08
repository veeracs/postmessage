Brand site Integration with CNID client
=======================================

The <b>CNID client</b> should be served over https in an iframe. The brand site should launch the <b>CNID client<b> via a <b>responsive modal window</b> that houses the iframe. The <b>CNID client</b> will communicate with the brand client via postMessage HTML5 API.

The following steps are necessary for integration,

1. Include the <b>CNID client</b> CSS and <b>Bootstrap 2.3.2</b> CSS in the HEAD section.
2. <a href="https://github.com/veeracs/postmessage/blob/master/app/index.html" target="_self">Add markup</a> for the <b>bootstrap modal</b> (that houses iframe), <b>the spinner</b> and <b>the buttons</b> (to launch the modal).
3. Include the following JavaScript libraries at the bottom of the page - <b>jquery ~1.10.2, bootstrap 2.3.2, cnid-client</b>.

3.1 cnid-client.js: This file creates a CNID property on the global object, if there isn't already one, setting its value to an object containing a init method. The init method determines the brand client's environment and sets up the iframe URL to point to a corresponding CNID client environment.

4. Specify a couple of properties (<b>postMessageCallback</b> and <b>initializeCNID</b>) on the brand's global object for setting up the postMessage callback handler and for initializing the CNID client. (see sample code for details). 
5. Setup click handlers on buttons that'll initialize the CNID client (via commenting or auth flows) and launch the responsive modal window. The CNID client should be initialized in the following manner,

<pre>
<code>
CNID.init({
    iframeId: 'cnidClient',         //  iframe hosting the CNID client, required
    brand: 'com.condenet.glamour',  //  brand name launching the CNID client, required
    regPath: "auth",               	//  path to configure CNID client, required (only "auth" or "commenting")
    regSrc: 'CNEE_GLM',             //  registration source, required
    targetOrigin: 'dev-cnee.condenastdigital.com/admin/postmessage.html',  //  origin/host receiving the postmessage, optional when postMessage callback handler is available in the global scope
    postMessageCallback: callback  //  callback method that'll receive postMessage events from CNID client, required
});
</code>
</pre>

The <b>postMessageCallback</b> handler will receive the following types of messages from <b>CNID client</b>.

1. <b>scrollTop</b> - scroll to the top of the page within the modal when an error message is displayed.
2. <b>showLoader</b> - show loading status while the CNID client loads.
3. <b>authToken</b> - Use authToken to close the modal window and fetch cookie information from the CNID server and log the user in.
