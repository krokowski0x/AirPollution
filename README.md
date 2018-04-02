# Node Air Pollution App

Simple node.js app to check air pollution in your location.

## Brief description

App finds nearest pollution sensor near your location, and gives you basic info about how bad is the air quality in your area.
It also lets you save your location for easier checks further in the future.
This app was inspired by horribly bad air quality in winter 2017 in Wroclaw, Poland.

### Prerequisites

If you want to make some changes, first you have to have [node with npm](https://nodejs.org/en/) installed.
Then, you have to install dependencies:

```
npm i
```

### Installation

After cloning this repository, in the project directory, you should run:

```
npm start
```

If it's your first time with this app, it will run simple setup to figure out the nearest weather station.
Otherwise it should show you pollution info instantly. Give it a try!

## Built With

* [Node.js](https://nodejs.org/en/) - Needs no introduction
* [chalk](https://github.com/chalk/chalk) - Terminal string styling done right
* [Inquirer](https://github.com/SBoudrias/Inquirer.js/) - Great CLI building utility for Node.js
* [Yargs](http://yargs.js.org/) - Pirate-themed CLI options parser
* [Airly API](https://airly.eu/pl/api/) - Detailed air pollution API

## Further development

* Escaping the shameful **Promise Hell**
* Passing more weather data to the user
