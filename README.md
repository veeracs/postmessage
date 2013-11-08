Brand site Integration with CNID client
=======================================

The CNID client is served over https in an iframe. The brand site should launch the CNID client via a modal window that houses the iframe. The CNID client will communicate with the brand client via postMessage HTML5 API.

The following steps are necessary for integration,

1. Include the CNID client CSS and Bootstrap 2.3.2 CSS in the HEAD section.
3. Add markup for the bootstrap modal that houses iframe, the spinner and the buttons to launch the modal.
4. Include the following JavaScript libraries at the bottom of the page - jquery ~1.10.2, bootstrap 2.3.2, cnid-client.
5. Specify a couple of properties on the brand's global object for setting up the postMessage callback handler and for initializing the CNID client. (see sample code for details)
6. Setup click handlers on buttons that'll initialize and launch the CNID client (inside a modal) via commenting or auth flows.

The postMessage callback handler will receive the following types of messages.

1. <b>scrollTop</b> - scroll to the top of the page within the modal when an error message is displayed.
2. <b>showLoader</b> - show loading status while the CNID client loads.
3. <b>authToken</b> - Use authToken to close the modal window and fetch cookie information from the CNID server and log the user in.
