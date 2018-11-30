FROM java:8
ADD target/eobrazovanje-0.0.1-SNAPSHOT.jar eo.jar
COPY files files
EXPOSE 9000
ENTRYPOINT ["java", "-jar", "eo.jar"]

