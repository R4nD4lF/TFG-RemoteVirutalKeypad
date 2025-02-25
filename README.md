# Remote Virtual Keypad
## Description
The **Remote Virtual Keypad** is an open source TFG project developed to let an user interact indirectly with a device through his mobile phone just by scanning a QR code. This software is framed in the gambling sector, but the final product can be implemented in any device of any nature. 


#  Project Structure

The project structure and components are:
 - **virtualkeypad** -> This API is the core of the project, it provides logic for the keypad templates, users, credentials and sockets. It's developed with SpringBoot framework, Gradle, OpenAPI and Swagger.
 - **deploy-tfg**-> Contains de config files to initialize de Postgres database
 - **snake** -> This game belongs to *janbodnar*. This is his [repository]( https://github.com/janbodnar/Java-Snake-Game ) and it uses a [BSD-2-Clause license](https://github.com/janbodnar/Java-Snake-Game?tab=BSD-2-Clause-1-ov-file#BSD-2-Clause-1-ov-file)
 - **TFG Angular Template** -> Web application the interacts with the API. Developed with Angular.

## Dependencies
 - Java 11
 - Gradle 6.8.2
 - SpringBoot 2.4.2
 - OpenAPI 5.0.0
 - Angular CLI 11.0.5
 - Node 18.19.1
 - Docker-compose version 1.29.2
 - Docker version 26.1.3

## Installation and Deployment
Clone the repository
`git clone https://github.com/R4nD4lF/TFG-RemoteVirutalKeypad.git`
Initialize Postgres database
```
cd deploy-tfg
docker-compose up -d
```
Build and run the API
```
cd virtualkeypad
./gradlew build
./gradlew bootRun
```
Serve de Web App
```
cd TFG\ Angular\ template/
ng update
ng serve
```

## Future Work and improvements
There are several improvements that can be done to de project. The first and more important is to develop a mobile APP to display and manage the keypad templates with React Native or Native Script.
Improve the web, api and websocket server:
  - Let the user load his own sprites for text and buttons
  - Events in the keyboard. For example, if the Snake game implemented levels there could be an event in the mobile when it happens.
  - Stay updated with new tools for TypeScript that could improve InteractJs
  - Make the desployment full automatic with docker-compose, not just the Postgres DB.
