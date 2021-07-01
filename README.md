# svg2png

## Usage

Start the docker image

```
docker run -p 5656:5656 axelhzf/svg2png
```

Convert a file to png

```
curl --data "@file.svg" -o output.png http://localhost:5656/svg2png
```

## Development instructions

Build and start the application

```
yarn
yarn build
yarn start
```