create database pfa;

use pfa;

create table IF NOT EXISTS module_project (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;


INSERT INTO module_project(id, name)
    VALUES 
        (UUID(),'Docker'),
        (UUID(),'Domain Driven Design'),
        (UUID(),'Arquitetura hexagonal'),
        (UUID(),'Apache Kafka'),
        (UUID(),'Deploy nos Cloud Providers (em breve)'),
        (UUID(),'Service Mesh com Istio');