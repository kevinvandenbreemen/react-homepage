.PHONY: test, setup
	
test: setup
	CI=true npm test

setup:
	npm install