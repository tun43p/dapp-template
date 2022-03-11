build:
	cd ./client && yarn build

clean:
	cd ./contract && yarn clean

compile:
	cd ./contract && yarn compile

deploy:
	cd ./contract && yarn deploy

format:
	cd ./contract && yarn format

lint:
	cd ./contract && yarn lint

serve:
	cd ./client && yarn start

test:
	cd ./contract && yarn test

.PHONY: build clean compile deploy format lint serve test