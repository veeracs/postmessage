Brand site Integration with CNID client
=======================================

The CNID client is served over https in an iframe. The brand site should launch the CNID client via a modal window that houses the iframe. The CNID client will communicate with the brand client via postMessage HTML5 API.

The following steps are necessary for integration,

1. Include the CNID client CSS and Bootstrap 2.3.2 CSS in the HEAD section.
3. Add markup for the bootstrap modal that houses iframe, the spinner and the buttons.
4. Include the following JavaScript libraries at the bottom of the page - jquery ~1.10.2, bootstrap 2.3.2, cnid-client.
5. Specify a couple of properties on the brand's global object for setting up postmessage callback handler and for initializing the CNID client.
6. Setup click handlers on buttons to initialize and launch the CNID client (inside a modal) via commenting or auth flows.

The postMessage callback handler will receive the following types of events.
