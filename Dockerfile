FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
COPY --from=build /target/assigment1-0.0.1-SNAPSHOT.jar assigment1.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","assigment1.jar"]