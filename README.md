# Yin-Yang Personality Test

This is a dynamic and interactive React-based personality test application inspired by the concept of Yin and Yang. The application guides users through a smooth and engaging experience, from a text-based introduction with background music to the final results, which reflects the balance of Yin and Yang within their personalities.

## Table of Contents

•	[Features](#features)
•	[Introduction](#introduction)
•	[Starting the Personality Test](#starting-the-personality-test)
•	[The Test](#the-test)
•	[Results](#results)
•	[Technologies Used](#technologies-used)
•	[Installation](#installation)
•	[Usage](#usage)
•	[Testing](#testing)
•	[Project Structure](#project-structure)
•	[Future Enhancements](#future-enhancements)
•	[Reflection](#reflection)




### Features

There are 4 main features in this application:

#### Introduction

•	An engaging text introduction with fade-in and fade-out effects which cover the roots of Daoism, Confucianism and Yin-Yang.
•	A calming background track plays during the introduction, with a Mute Button available to toggle sound.
•	Users can opt to skip the introduction and jump straight to the beginning of the test.

#### Starting the Personality Test

•	A swirling animation symbolising the Yin and Yang concept, enhancing the thematic depth of the application.
•	Users can start the test at any time by pressing the 'Begin' button. 

#### The Test

•	A series of 10 questions, each offering a Yes/No answer buttons to gauge the user’s Yin/Yang tendencies.

#### Results

•	Based on the user’s answers, a result is calculated, indicating whether they have a stronger Yin or Yang personality.
•	The result is accompanied by a symbolic graphic and a quote by Lao-Tzu or Confucius.
•	Users can retake the test by pressing the 'retake' button, which will take them back to the first question.

### Technologies Used

•	React: A JavaScript library for building user interfaces.
•	Vite: A development build tool that ensures optimal performance.
•	Vitest: A fast unit testing framework.
•	React Testing Library: Ensures that the application is rigorously tested, focusing on end-user experience.
•	CSS: Used to implement custom styles and animations, particularly for the Yin-Yang theme.
•	JavaScript (ES6+): For implementing the application logic and interactive features.

### Installation

To set up this project locally, follow these steps:

1. ###### Clone the repository: 

```zsh
git clone https://github.com/your-username/yin-yang-personality-test.git
cd yin-yang-personality-test
```

2. ###### Install dependencies:
```zsh
npm install
```
3. ###### Running in development mode:
```zsh
npm run dev
```
4. ###### Building for production:
```zsh
npm run build
```

### Usage

To start the application:

1. ###### Run the development server:

```zsh
npm run dev
```
2. Open http://localhost:5173 in your browser to interact with the application.
3. Follow the introduction, answer the questions, and view your test results!

### Testing

This application includes comprehensive tests to ensure reliability and robustness. The testing suite is built using Vitest and React Testing Library. 

###### To run the tests:

```zsh
npm run test
```

### Project Structure

•	src/components: Contains all the React components, including the Introduction, Questions and buttons.
•	src/pages: Includes Home, where the application occurs.
•	src/assets: Holds static assets like the background music.
•	src/styles: CSS files for styling and animation effects.

### Future Enhancements

•	Expand the number of questions, and build in a component to select them randomly with each new test.
•	Introduce more intricate animations to make the application more user-friendly.
•	Add features to allow users to share their results on social media.
•	Add a toggle for dark mode to allow users to experience the application with inverse colours.
•	Add a soundtrack selector, allowing users to choose from a number of different background tracks.

### Reflection

This project is a culmination of my passion for web development, UX design and Eastern Philosophy. It’s my first solo project, and I wanted to push myself to see what I could make by combining CSS with React in the space of a week. I specifically chose Yin-Yang as the theme because it means a lot to me, and its part of a philosophy which I try to follow in my daily life. I'm excited to share it with everyone, and I look forward to making further developments to this project!
