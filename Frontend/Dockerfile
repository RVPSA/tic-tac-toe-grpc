FROM node:22

WORKDIR /home/RealTimeTicTacToe_GameFrontend

COPY package*.json .

RUN npm install -g protoc-gen-grpc-web

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD [ "npm","start" ]