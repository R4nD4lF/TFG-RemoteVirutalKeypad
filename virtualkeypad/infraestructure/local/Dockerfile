FROM amazoncorretto:15

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el JAR generado al contenedor
ARG JAR_FILE=libs/*.jar
COPY ${JAR_FILE} app.jar

# Exponer el puerto en el que corre la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
