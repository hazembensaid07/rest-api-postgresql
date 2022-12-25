Rest API using node js express js sequelize postgresql docker docker-compose
Models:
company
meeting
project
task
user
Associations
one-to-many between user and tasks
zero-to-many between company and project
one-to-one between user and project
many-to-many between user and meeting
Useful Informations:
sequelize init : to configure the database connection and the model creation
sequelize migration:generate --name migration-name : generate migration for each database operation
sequelize db:migrate : to run the pending migrations
db:migrate:undo --name migration-name : to undo specific migration
Developer: Hazem Bensaid
