# KarmaPlan

#### Video Demo <URL HERE>

## Description

KarmaPlan allows you to track your completed chores in your household. You can track yourself, together with your significant Other or your household.
You can check on "How much did I do" and compare your chores in a weekly or monthly sight.
You can use this tool to make unvisible chores more visible and have a understanding of who's doing how much at home on top of your regular Job.
Maybe this will help you, having a conversation about sharing responsibilities at your home.

I filled the App with some demo-data from our personal pen&paper KarmaPlan.
This App is inspired by moving in together with my fiancé. We were worried about not doing the same amount of housework & chores.Many of us know, that this topic can be very diffcult in relationships or households.

## The App

As you can see in the overall structure, I separeted the backend from the frontend. this was a maintaince choice. If I need to switch tooling, it will be easier.

### Backend-KarmaServer

In KarmaServer you will find the backend part of KarmaPlan.
I used:
    - node.js
    - DynamoDB 
    - GraphQL for organizing my data

### Frontend-KarmaPlan

The frontend of KarmaPlan is a Vue3 App. For Styling I use SaaS. It's a fun way to use CSS.
The overall build-up is pretty basic:

    - in App.vue everything comes together. I tried to make it as slim as possible.
    - in the components-folder are all my reusable components, like the "AddTask"-component.
    - I created some specific views, like Login, Register, Home, YourData
    - For visualization I use [Chart.js](https://www.chartjs.org/docs/latest/)

### Design

This was the more difficult part: Deciding on fonts and a colorpalette. I used this google-fonts:

- Nunito
- Kalam

Kalam is the brand-font. I wanted it to look a little bit handwritten in a nice & clean writing. Nunito is used throughout the app. Nunito is also a clean font without serifs. It compliments Kalam very well and makes it easy for the eye to read everything.
The color palette was inspired by the weather on that day and one of my actual favorite colors: a rainy summerday(#F9F7F7,#9497A0,#6F7379,#2A3546) and powder darkrose (#917785).
The colors are not supposed to draw a lot of attention from working with KarmaPlan. At the same time it's supposed to give you a relaxed feeling.

### How to run this app

clone the Repo
cd KarmaPlan
npm i
npm run serve

in KarmaServer
npm i
npm run serve