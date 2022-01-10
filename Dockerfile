From node
WORKDIR /app
COPY package.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .
EXPOSE 4200
CMD /app/node_modules/.bin/ng serve --host 0.0.0.0 --disableHostCheck