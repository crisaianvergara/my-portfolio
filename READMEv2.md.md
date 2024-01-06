Commands:
sudo COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build or just simply: sudo docker-compose up --build -d
- use Docker’s BuildKit feature for a faster build.
sudo docker-compose up
- run the image and start the app
go to http://localhost:3000
- see your app running!!!

Others:
sudo rm -r node_modules/
- remove node_modules

Base on Documentation:
- sudo docker build -t nextjs-docker .
- sudo docker run -p 3000:3000 nextjs-docker
