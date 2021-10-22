FROM mysql:8.0.26

COPY databaseInit.sql /docker-entrypoint-initdb.d/databaseInit.sql

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["mysqld"]