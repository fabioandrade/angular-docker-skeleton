# angular-docker-skeleton
Skeleton Angular + Docker


Executar o comando para criar a imagem:

docker build -t <nomedaimagem> -f Dockerfile .
  

Executar o comando para subir a aplicação:
  
docker run --rm -it -p 4200:4200 <nomedaimagem>
  
  
Acessar localhost:4200/ 
