
# PFA-Docker - Desafio 1

Código fonte do desafio 1 do curso de aceleração PFA-Docker


## Executando

Cria uma network para os containers

```bash
  docker network create pfa
```

Cria e executa o container mysql

```bash
  docker run -d --rm --network pfa --name pfa-mysql -e MYSQL_ROOT_PASSWORD=root eduardorfernandes/pfa-mysql-desafio
```

Cria e executa o container com o back-end da api.

```bash
  docker run -d --rm -p 3000:3000 --network pfa --name pfabackend eduardorfernandes/pfa-backend-desafio-prod
```

Cria e executa o container com o servidor nginx

```bash
  docker run -d --rm --network pfa -p 8000:80 eduardorfernandes/pfa-nginx-desafio
```

Acesse no seu navegador o endereço http://localhost:8000/modules-project