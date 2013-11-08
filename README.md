Brand site Integration with CNID client
=======================================

The <b>CNID client</b> is served over https in an iframe. The brand site should launch the CNID client via a <b>responsive modal window</b> that houses the iframe. The <b>CNID client</b> will communicate with the brand client via postMessage HTML5 API.

The following steps are necessary for integration,

1. Include the <b>CNID client</b> CSS and <b>Bootstrap 2.3.2</b> CSS in the HEAD section.
3. Add markup for the bootstrap modal that houses iframe, the spinner and the buttons to launch the modal.
4. Include the following JavaScript libraries at the bottom of the page - jquery ~1.10.2, bootstrap 2.3.2, cnid-client.
5. Specify a couple of properties (<b>postMessageCallback</b> and <b>initializeCNID</b>) on the brand's global object for setting up the postMessage callback handler and for initializing the CNID client. (see sample code for details). The CNID client is initialized in the following manner,

<pre>
<code>
CNID.init({
    iframeId: 'cnidClient',         //  iframe hosting the CNID client, required
    brand: 'com.condenet.glamour',  //  brand name launching the CNID client, required
    regPath: regPath,               //  path to configure CNID client, required
    regSrc: 'CNEE_GLM',             //  registration source, required
    targetOrigin: 'dev-cnee.condenastdigital.com/admin/postmessage.html',  //  origin/host receiving the postmessage, optional when postMessage callback handler is available in the global scope
    postMessageCallback: this.postMessageCallback  //  callback that'll receive postMessage events from CNID client
});
</code>
</pre>

6. Setup click handlers on buttons that'll initialize and launch the CNID client (inside a modal) via commenting or auth flows.

The <b>postMessageCallback</b> handler will receive the following types of messages.

1. <b>scrollTop</b> - scroll to the top of the page within the modal when an error message is displayed.
2. <b>showLoader</b> - show loading status while the CNID client loads.
3. <b>authToken</b> - Use authToken to close the modal window and fetch cookie information from the CNID server and log the user in.
