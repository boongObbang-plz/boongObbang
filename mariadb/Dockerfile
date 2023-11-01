# FROM mariadb:latest

FROM debian:bullseye

RUN \
    apt-get -y update && \
    apt-get -y upgrade && \
    apt-get -y install mariadb-server && \
    apt-get -y install mariadb-client

COPY db_start.sh .

RUN apt-get update && apt-get install -y mariadb-client

RUN { \
        echo '[mysqld]'; \
        echo 'character-set-server=utf8'; \
        echo 'collation-server=utf8_general_ci'; \
    } > /etc/mysql/conf.d/charset.cnf

#3306을 써야하지만 충돌이 일어나므로 3300으로 사용
EXPOSE 3300

CMD [ "sh", "db_start.sh" ]