FROM amazoncorretto:15

WORKDIR /app

COPY build/libs/virtualkeypad-*.jar virtualkeypad.jar

EXPOSE 8080

CMD ["java", "-jar", "virtualkeypad.jar"]