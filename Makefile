init:
	@echo "Initializing project dependencies..."
	@echo "Done."

fetch-api-schema:
	@echo "Fetching API schema..."
	curl -o embers-api-schema.json http://localhost:8080/swagger-ui/openapi.json
	@echo "Done."

clean-api-client:
	@echo "Cleaning API client..."
	rm -rf packages/api-client
	@echo "Done."

generate-api-client: clean-api-client
	@echo "Generating API client..."
	docker run -v $(PWD):/local swaggerapi/swagger-codegen-cli-v3 generate -i /local/embers-api-schema.json -l javascript -o /local/packages/api-client
	@echo "Done."

test:
	@echo "Running tests..."
	npm run test
	@echo "Done."
