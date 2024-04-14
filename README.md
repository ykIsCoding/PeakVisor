# PeakVisor
##### A one stop platform for the nature trail lovers and avid hikers
##### Made For SC2006 Software Engineering

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) ![Express.js](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white) ![JavaScript](	https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Express.js](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white) ![JavaScript](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black) ![Express.js](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![Express.js](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)
<br>
![](https://github.com/softwarelab3/2006-SCCA-Missing1/blob/main/showcase/readmepvlogo.gif) 
## Showcase
![](https://github.com/ykIsCoding/PeakVisor/blob/draft/UX/peakvisor_computer_showcase.png) 
![](https://github.com/ykIsCoding/PeakVisor/blob/draft/UX/phone_peakvisor.png) 
<br>


## Team Members
1. Jeannie Wong
2. Lim Yong Kang (ykIsCoding)
3. Ben Yew (malepsyche)
4. Brendan Yap
5. Chong Choy Jun
6. Lucas Ng
<br>


## Installation
After cloning from Github, run ```npm install``` to install the dependencies in backend 2, backend, and frontend.
#### Frontend
- Run `ng serve --open` inside ```frontend``` to serve it on the browser
- AngularJS w/ Typescript
- Bootstrap

#### Backend
- Run ```npm run dev``` inside ```backend``` to start the backend server
- NodeJS w/ TypeScript
- ExpressJS
- Webpack bundler


#### Backend 2
- Run ```npm run serve``` inside ```backend2``` to start the backend2 server
- NodeJS 
- ExpressJS
<br>

## Features
1. AI powered location information to provide users with more information of places
2. Users can connect their Strava accounts to get their activities
3. Users can view hiking events
4. Users can view trails

## Design Features
1. Fully responsive web design to ensure a smooth and consistent user expeierence across devices
2. 2 Backend servers to ensure system reliability and optimal application speed
3. Strict authentication guards to prevent unauthorised access to protect users' data
4. Accomodative design to allow users seamless recovery of account if they forget password
5. Accomodative design to allow users seamless recovery of account if they deleted their account by accident as they have 7 days to log back in to cancel the deletion

## APIs and Services Used

#### StravaAPI
- StravaAPI endpoints exist on Backend
- Best practices used includes:
>> 1. Seperation of concerns via MVC (Model-View-Controller) architecture 
>> 2. Decoupled Models, Controllers and Services via Dependency Injection
>> 3. Secure Oauth 2.0 Http Transactions

#### Google Maps
- Exists on Frontend
- Makes dynamic requests to Google Maps API
- Provides live frontend rendering of Google Maps

#### SeraApi
- Gets images of the different places
- API Limitation: 100 API calls/day for free plan that we are using
- REST Architecture

#### OpenAI API (ChatGPT 3.5 Turbo)
- Provides AI generated tips and information for the places

#### Meetup.com API 
- Provides data for the Events Page
- GraphQL Architecture
- OAuth required to get token

#### TripAdvisor API 
- Provides data for the Trails Page and Trails Information Page
- REST Architecture
- Limitation: 5000 free API calls/month, does not allow free plan users to query images

#### Firebase 
- Provides authentication and database storage support
<br>

## Documentation
Documentation for the application's frontend be accessed at: [here](https://github.com/softwarelab3/2006-SCCA-Missing1/blob/main/frontend/documentation/index.html)

Alternatively, visit: [here](https://ykiscoding.github.io/peakvisor-documentation/overview.html)



