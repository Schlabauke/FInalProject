# KarmaPlan
#### Video Demo:  <URL HERE>
## Description: 
KarmaPlan allows you to track your completed chores in your household. You can only track yourself, together with your significant Other or your household. 
You can check on "How much did I do" and compare your doing's in a weekly or monthly sight. 
You can use this tool to make unvisible chores more visible and have a understanding of who's doing how much at home on top of your regular Job. 
Maybe this will help you having a conversation about sharing responsibilities at your home. 

## The App

As you can see in the overall structure, I separeted the backend from the frontend. this was a maintaince choice. If I need to switch tooling, it will be more easy. 

### Backend-KarmaServer: 
In KarmaServer you will find the backend part of KarmaPlan.
I used: 

    - node.js
    - DynamoDB  //or not..
    - GraphQL for organizing my data 


### Frontend-KarmaPlan:
The frontend of KarmaPlan is a Vue3 App. For Styling I use SaaS. It's a fun way to use CSS. 
The overall build-up is pretty basic:

    - in App.vue everything comes together. I tried to make it as slim as possible.
    - in the components-folder are all my reusable components, like the "AddTask"-component.
    - I created some specific views, like Login, Register, Home, YourData
    - For visualization I use [Chart.js](https://www.chartjs.org/docs/latest/)
    
