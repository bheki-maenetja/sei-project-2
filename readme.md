# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SEI45 - Project 02 (Frontend React App)
My second project for the General Assembly Software Engineering Immersive course. A frontend web application built in React that consumes a third-party API. This was a pair-programming exercise to be completed over the course of 2 days. My partner for the project was [Rory Fletcher](https://github.com/Fletch-7).

## Getting Started
### Installation
- Clone this repository by running the terminal command `git clone git@github.com:bheki-maenetja/sei-project-1.git`
- In the root folder run the terminal command `npm i` to install all necessary packages and modules
- To view the site locally run the terminal command `npm run start` and navigate to localhost:8000 in your browser.

### Deployment
- You can view a deployed version of the site [here](https://my-superhero-app.herokuapp.com/)

## Technologies Used
- React
- SASS/SCSS
- Bulma CSS Framework
- NodeJS
- Axios
- NPM
* Third-party APIs
  * [SuperHero API](https://akabab.github.io/superhero-api/api/)

## How It Works
This project is a superhero information website. Users can search for their favourite superheroes (or supervillains) and find a wealth of information about their origins, connections, occupations and so much more. The site also includes a nifty comparison tool that allows users to compare the power stats of different superheroes.


<div style="display: flex; justify-content: space-between">
	<div style="width: 32%">
		<figcaption>Home Page</figcaption>
		<img src="src/assets/screenshot-homePage.png" alt="home page"/>
	</div>
	<div style="width: 32%">
		<figcaption>Hero Directory</figcaption>
		<img src="src/assets/screenshot-heroIndex.png" alt="hero directory" />
	</div>
	<div style="width: 32%">
		<figcaption>Hero Information Page</figcaption>
		<img src="src/assets/screenshot-heroShow.png" alt="hero info" />
	</div>
</div>

<figure class="video_container">
	<video autoplay loop style="width:100%">
		<source src="https://i.imgur.com/6cc7Z9K.mp4" type="video/mp4" />
	</video>
</figure>


## Approach
Given that this project was our first foray into ReactJS, it does lean heavily on React components. We carefully mapped out which React components would be needed for the different pages of the site. These included several reusable componenets such as the superhero search form and 'hero cards' which display the name of a superhero and their power stats.

### The SuperHero API
- 
