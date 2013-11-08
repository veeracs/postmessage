Brand site Integration with CNID client
=======================================

The CNID client is served over https in an iframe. The brand site should launch the CNID client via a modal window. The following steps are necessary for integration,


1. Include the CNID client CSS and Bootstrap 2.3.2 CSS in the HEAD section.
2. Use following markup to launch the sign-in/commenting flow.
3. Include markup for the iframe and the spinner.
4. Include the necessary JavaScript libraries - jquery ~1.10.2, bootstrap 2.3.2, cnid-client.
5. Setup a couple of properties on the global object for postmessage callback and initializing the CNID client.
6. Setup click handlers on buttons to launch CNID client via commenting or auth.
