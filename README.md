Rick & Morty application
submitted by: Bjoern Hansen
date submitted: Wed 24-Feb 2021

Notes:

- unfixed bug!
  When navigating from /profiles to /profiles/:id, the application crashes.
  Please refresh/reload the browser to continue normally.

- remove favorite functionality!
  Code logic prepared containing a bug.
  Commented out to not impact the app functionality

Functionality:

- Character overview, redirected to after login
- Favorites indicated by a filled star icon, others indicated by empty star icon
- Single character view, functional after page refresh (bug)
- In single character view, character can be added to favorites list which disables the button, provides a note, renders a success alert and fills the star
- 404 page available
- My Favorites view, showing list of favorite characters
- Login functionaility
- Register functionality

Additional dependencies installed:

DEPENDENCIES used

- axios: to enable HTTP requests
- bcryptjs: password encryption for database
- config: to use global variables
- express: main framework for backend
- express-validator: when making a request to endpoint, do data validation
- jsonwebtoken: use jwt to pass along a token for validation
- mongoose: layer on top of database, allows to communicate with it
- uuid: randomly generate ID for the alerts

DevDEPENDENCIES used

- concurrently: allow to run backend express server together with frontend React dev server with one single command
- nodemon: constantly watch server, no need to refresh any time changes done
