FROM node:16
RUN npm install -g @angular/cli
WORKDIR /var/www

EXPOSE 4200