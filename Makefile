init:
	@echo "Initializing project dependencies..."
	@echo "Done."

fetch-api-schema:
	@echo "Fetching API schema..."
	curl -o packages/f1r3sky-client-sdk/embers-api-schema.json http://localhost:8080/swagger-ui/openapi.json
	@echo "Done."

clean-api-client:
	@echo "Cleaning API client..."
	rm -rf packages/f1r3sky-client-sdk/src/api-client
	@echo "Done."

generate-api-client: clean-api-client
	@echo "Generating API client..."
	docker run -v $(PWD):/local openapitools/openapi-generator-cli generate -i /local/packages/f1r3sky-client-sdk/embers-api-schema.json -g typescript-fetch -o /local/packages/f1r3sky-client-sdk/src/api-client
	@echo "Done."

test:
	@echo "Running tests..."
	cd packages/f1r3sky-client-sdk && \
	npm run test
	@echo "Done."
