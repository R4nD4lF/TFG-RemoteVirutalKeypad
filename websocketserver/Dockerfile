FROM amazoncorretto:15

WORKDIR /app

COPY build/libs/websocketserver-*.jar websocketserver.jar

EXPOSE 8081

CMD ["java", "-jar", "websocketserver.jar"]