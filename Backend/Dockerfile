FROM golang:1.23.3

WORKDIR /home/RealTimeTicTacToe_GameBackend

COPY go.mod go.sum ./

RUN go mod download

COPY . .

EXPOSE 50051

CMD [ "go","run","server.go" ]