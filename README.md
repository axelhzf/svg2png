# svg2png

## Start the application

Build and start the application

```
yarn
yarn build
yarn start
```

or if you prefer to use docker

```
docker build --tag svg2png .
docker run -p 5656:5656 sv2png
```

## Make a request

```
curl --data "@file.svg" -o output.png http://localhost:5656/svg2png
```