docker-compose run heroes-service npm run knex migrate:latest --env development --knexfile app/knexfile.js
docker-compose run heroes-service npm run knex seed:run --env development --knexfile app/knexfile.js
docker-compose run threats-service npm run knex migrate:latest --env development --knexfile app/knexfile.js
docker-compose run threats-service npm run knex seed:run --env development --knexfile app/knexfile.js