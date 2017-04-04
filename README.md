## Babelr

### Motivation

With the global economy, it's common to work on projects involving international teams. While these teams can be effective, projects often move slower as members try to communicate one with another. Babelr make international collaboration simple by automatically translating foreign messages into the preferred language of each user, ensuring each team member's expertise isn't hampered by communication divides.

### MVP

Using babelr, users will be able to:

- [ ] Instantly chat with other users from around the globe,
- [ ] Send all messages in their preferred language,
- [ ] Receive all messages in their preferred language,
- [ ] Create project groups

### Wireframes

Login

![login](/docs/wireframes/login_scene.png)

Sign up

![signup](/docs/wireframes/signup_scene.png)

Chat

![chat](/docs/wireframes/chat_scene.png)

Settings

![settings](/docs/wireframes/settings_scene.png)

Groups

![groups](/docs/wireframes/groups.png)

Add Users

![users](/docs/wireframes/add_users.png)

### Technologies & Technical Challenges

This app will utilize React Native on the frontend and Django on the backend. Additionally, it will integrate with the Google Translate API.

The primary technical challenges will be:

- Determining how to use web sockets correctly so that the Client (React Native) and the Server (Django) share an open connection,
- Correctly using React Native to ensure navigation feels intuitive and native (i.e. swiping left, right, etc)

### Group Members & Work Breakdown

Our group consists of three members, Leo Salat, Jesse Furukawa, and Chase Armstrong.

Jesses's primary responsibilities will be:

- Learning Django and implementing user authentication
- Ensuring the database model fits our needs
- Preventing security threats and unauthorized AJAX requests
- Setting up the backend web socket protocol to ensure user chat is instant

Leo's primary responsibilities will be:

- Learning React Native and the ignite architecture
- Understanding the Google Translate API and setting up any boilerplate necessary before informing Jesse of the correct endpoints that should be used
- Building out the direct message pages with styling and functioning Redux cycles
- Building out the message page with styling and functioning Redux cycles

Chase's primary responsibilities will be:

- Learning React Native and the ignite architecture
- Setting up the frontend web socket protocol to ensure user chat is instant
- Setting up an app specific style guide so that the app's color scheme, font decisions, and padding are cohesive
- Building out the authentication pages with styling and functioning Redux cycles
- Building out the user profile page with styling and functioning Redux cycles

### Implementation Timeline

**Day 1**: Set up the framework upon which to build the app. By the end of the day, we will have:

- One styled chat page without associated Redux cycle (Leo)
- Django authentication ready for AJAX request (Jesse)
- Two styled authentication pages without associated Redux cycle (Chase)

**Day 2**: Finish out authentication and prepare for message creation. By the end of the day, we will have:

- One styled page for creating new groups (Leo)
- A backend that can create new messages, and store those messages in the relevant group (Jesse)
- A functioning Redux cycle for authentication (Chase)

**Day 3**: Make chat pages chat pages dynamic and get familiar with the Google Translate API. By the end of the day, we will have:

- A functioning Redux cycle for new messages (Leo)
- Prepare the backend for new group creation (Jesse)
- A styled user profile page and associated Redux Cycle for logging out (Chase)

**Day 4**: Create the settings page and connect the settings to the color change logic.  If time, create high-contrast grey scale and low-contrast algorithms as well.  By the end of the day:

- Get familiar with the Google Translate API and set up any boilerplate so that it can be quickly used on the backend (Leo)
- Utilize Django to make the API calls (Jesse)
- Create one page website that explains the purpose of the app, a link to download, and a link to the emulator (Chase)

**Day 5**:

- Emulator to showcase the project to recruiters (Leo)
- Miscellaneous backend work to get product ready for production (Jesse)
- Cohesive styling for any pages (Chase)

### Plan for getting users and reviews

- Submit the product to 10+ digital agencies that have overseas
- Submit the product to popular freelancing platforms (Upwork.com, Freelancer.com, PeoplePerHour.com)
- Get Kush to invest 10M our new company
