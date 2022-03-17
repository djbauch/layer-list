# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Component Creation
The components created in this project, and exposed via NPMJS download are generated by using the [Generate React CLI](https://dev.to/arminbro/generate-react-cli-1ooh) using the npx package runner, like so:

`npx generate-react-cli component Header`

This command will create a component Header, along with a directory in src/components (`src/components/Header` in this case) for its implementation and optionally a test suite, style sheet, a [Storybook] story, and a lazy loader. The first time it's run in a project, it will also create a configuration file `generate-react-cli.json` to capture the preferred options for component creation within the project.

## REST for this Component
This component will fetch data according to the ArcGIS Enterprise REST Search service. The documentation for how to use this REST endpoint is rooted at [ArcGIS Portal Content Search](https://developers.arcgis.com/documentation/mapping-apis-and-services/content-management/search/)


 An example request from the mapviewer application after its initialization, a request to pull in the available layers looks like this:

https://djbauch.maps.arcgis.com/sharing/rest/search?f=json&q=NGA%20((type%3A%22Map%20Service%22%20OR%20type%3A%22Image%20Service%22%20OR%20type%3A%22Feature%20Service%22%20OR%20type%3A%22Vector%20Tile%20Service%22%20OR%20type%3A%22OGCFeatureServer%22%20OR%20type%3A%22WMS%22%20OR%20type%3A%22WFS%22%20OR%20type%3A%22WMTS%22%20OR%20type%3A%22KML%22)%20AND%20(-type%3A%22KML%20Collection%22))%20%20(-type%3A%22Feature%20Collection%20Template%22%20AND%20-type%3A%22Stream%20Service%22%20AND%20-type%3A%22Feature%20Collection%22%20AND%20-typekeywords%3A%22Elevation%203D%20Layer%22%20AND%20-typekeywords%3A%22Table%22%20AND%20-typekeywords%3A%22Route%20Layer%22%20AND%20-type%3A%22Feed%22)&num=16&sortOrder=desc&start=1&token=... an API Key or OAuth 2.0 token goes here ...

Decoding that URL, here's the human-readable equivalent:

https://djbauch.maps.arcgis.com/sharing/rest/search?f=json&q=NGA ((type:"Map Service" OR type:"Image Service" OR type:"Feature Service" OR type:"Vector Tile Service" OR type:"OGCFeatureServer" OR type:"WMS" OR type:"WFS" OR type:"WMTS" OR type:"KML") AND (-type:"KML Collection"))  (-type:"Feature Collection Template" AND -type:"Stream Service" AND -type:"Feature Collection" AND -typekeywords:"Elevation 3D Layer" AND -typekeywords:"Table" AND -typekeywords:"Route Layer" AND -type:"Feed")&num=16&sortOrder=desc&start=1&token=... an API Key or OAuth 2.0 token goes here ...
