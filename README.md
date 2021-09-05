# Full-stack Coding Challenge

Our main goal for this exercise is to get an idea of how you are to work with and how you approach your engineering work. That insight is more important than your actual working solution at the end of this exercise.

Please record your screen and talk us through the coding exercise as you work through it. Don't hesitate to think out loud—that's the interesting part!

We expect this to take around an hour.

## Brief

You'll be building a tiny app to look up airport information. In its current state, we render a list of all airports (around 6000), but we don't want to load them all at once.

Please build a typeahead search feature so the user can look up airports by searching for airports by name, IATA, city, or country.

## Assumptions

- Tilla uses Next.JS/React and TypeScript. It'd be cool if you use that same tech stack for this exercise.
- The database is currently a JSON file with airport data. We don't expect you to move this into a database layer.
- The IATA code is a unique identifier for an airport.
- While we care more about your thought process than your outcome, we're still interested in how you write code. Don't cut corners there, and write the code as if you'd write a real-world, production-quality product.

## Extra questions

We'd love to hear your thoughts on some of these questions. Please don't spend more than a minute or two on each question.

 - What are some edge cases you would take care of before shipping this to production?
    - The UI of the added components should match with the theme of the application.
    - The unneccesary API calls should be avoided.
    - If there is no data available for the airports the user should be able to understand by looking at the UI(The application should not display a completely blank screen.)
    - The application should be properly tested with different search cases using different search filters and with testing the results that are generated for the search are correct or not.

 - How would you scale this to handle high amounts of traffic?
    - As the search is performed on the input by the user in the input field, the API calls will be generated on each insertion of letter into the textfield. The multiple API calls will affect the performance of the application. So, to optimize this condition we are using **debounce** on the function which is responsible for the API calls. The **debounce** takes two arguments, one is the function and the other one is delay time in miliseconds. The **debounce** function makes the function to wait for the delay time and after that only it will be called unless it is cancelled by the another function call.
    - We also added a check to call the search API only when the user has entered atleast 3 characters of what he is searching for, this will help to generate more relevant options for the user and will also reduce the unnecessary API calls.

 - What's important for you to work well in a fully remote team?
    - **Daily interactions:** Daily interactions helps to craete the remote work more interactive and more productive. The interaction helps to understand the team better and also helps to get a better understanding of the work culture followed by the team. The interactions if done on call or video calls results in more participation and activeness.
    - **Having Goals and Sprints:** While working in a remote team it is better to have some specific sprints and goals planned between the team members, this generates more active participation and fun culture. Also I love to set my own goals and work to achive them on time. So if a sprint is planned for me I will create small goals out of it and work on it accordingly, it helps me to be more productive.
    - **Clarity on work:** If the assigned work is clear to the team and individual it helps to generate better and more accurate results.
    - **Some fun activities for team:** Some fun activities related to the work with the team will help to lighten the mood and will eventually help in being more productive with the work.

## Deliverables

- Invite [@ffiller](https://github.com/ffiller), [@pieterbeulque](https://github.com/pieterbeulque), and [@marcqualie](https://github.com/marcqualie) to a GitHub repo with your completed project
- A video of your screen recording (unlisted YouTube video, Loom, … anything works)
- Answers to the questions above can be either in the video or written down in the README of your repo

## Getting Started

The app is designed to work out of the box.

```shell
yarn install
yarn dev
```

The app should be available via [http://localhost:3000](http://localhost:3000).

Good luck and talk soon!
