FROM openjdk:17-jdk-slim

COPY . /app

WORKDIR /app

RUN chmod +x ./gradlew && \
    sed -i 's/\r$//' gradlew && \
    ./gradlew build

EXPOSE 8080

ENTRYPOINT java -jar ./build/libs/boongObbang-0.0.1-SNAPSHOT.jar
