.PHONY: test, setup, build
	
test: tscompile
	CI=true npm test

setup:
	npm install

tscompile: setup
	npm run compile-typescript