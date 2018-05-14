<img src="https://raw.githubusercontent.com/ScaleIT-Org/media-ressources/master/logo/scaleit-logo.png" width="20%"/>
<img src="https://github.com/ScaleIT-Org/media-ressources/raw/master/logo/scaleit-waben-ionic.png" width="15%"/>

# Ionic Production Reporter ![License](https://img.shields.io/github/license/ScaleIT-Org/sapp-production-reporter.svg?link=https://github.com/ScaleIT-Org/sapp-production-reporter/blob/master/Domain%20Software/production_reporter/LICENSE)


The Production Reporter gives an overview of the basic production metrics. Currently, the data showed to a user are mock-ups, so further implementations related to a data collection are needed.  

Give it a try:

    docker-compose up
    # navigate to localhost:8100

Production Reporter Functionality:

1) Ionic frontend with Angular to display different production related metrics
2) Pages and Navigation
2) Data Providers and Pipes
2) Nginx Server for serving the built project (docker build only)

<img src="https://github.com/ScaleIT-Org/sapp-production-reporter/blob/master/Domain%20Software/production_reporter/Resources/Documentation/Screen1.PNG"/> 
<img src="https://github.com/ScaleIT-Org/sapp-production-reporter/blob/master/Domain%20Software/production_reporter/Resources/Documentation/Screen2.PNG"/> 


## Technology Stack
    Node.js->(Typescript->Angular->Ionic)

## Usage (Standalone)

    # Resolve dependencies
    npm install
    # Build frontend
    npm run build 
    # Run dev server
    npm run ionic:serve

## Usage (Docker)

This app uses a multi stage build in order to create a very small production ready image. This results in an image size of about 70MB compared to the 300+MB size of the build image.

Docker Compose:

    [docker-compose build] //optional
    docker-compose up
    
## Development

In order to simplify development we recommend working locally (or with a docker bind mount) and using the ionic hot reload feature of the ionic dev server

    npm run ionic:serve
    
In order to pull from this repo as upstream you should use githubs rebasing feature:

    git checkout alpine
    git pull --rebase origin master

    git checkout dev
    git pull --rebase origin alpine

Alternatively use cherry picking (or patching):

    git cherry-pick d147423..2622049
    git cherry-pick d147423
    
## Health Check (Optional)
        #Build with healtcheck enabled
        HEALTHCHECK --interval=5m --timeout=3s \
        CMD curl -f http://localhost:5002/ || exit 1
        
## Navigation and Pages 

The menu bar from the [app's screenshot](https://github.com/ScaleIT-Org/sapp-production-reporter/blob/master/Domain%20Software/production_reporter/Resources/Documentation/Screen1.PNG) shows the metrics for an overview. All pages are identical except the data to be shown. 

## Learning Material

Reactive Manifesto: https://www.reactivemanifesto.org/

Reactive Programming: https://gist.github.com/staltz/868e7e9bc2a7b8c1f754

Ionic Presentation: http://ionicframework.com/present-ionic/slides/#/26
