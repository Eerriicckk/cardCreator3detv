sudo docker stop container_card_creator
sudo docker rm container_card_creator
sudo docker rmi card_creator
sudo docker build -t card_creator .
sudo docker run -d --name container_card_creator -p 5174:5174 card_creator