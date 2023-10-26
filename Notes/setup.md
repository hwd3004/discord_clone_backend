```
npm i prisma

npx prisma
```

schem.prisma에 model 작성, docker-compose.yml 작성

```
docker-compose up

npx prisma migrate dev --name init

npm i @prisma/client
```

```
https://docs.nestjs.com/recipes/prisma - nestjs의 prisma 가이드

https://docs.nestjs.com/graphql/quick-start - nestjs의 graph 가이드

npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql

nestjs에 정적 파일 제공을 위한 라이브러리
npm i @nestjs/serve-static

graphql-upload 버전 14를 설치. 최신 버전은 타입스크립트 관련 이슈가 있다고 한다.
npm i graphql-upload@14.0.0
```

```
nest g service server
```