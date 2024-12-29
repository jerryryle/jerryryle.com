# Define variables
HUGO_BUILD_FOLDER ?= out

.DEFAULT_GOAL := develop

# Develop (start Hugo server)
.PHONY: develop
develop:
	@echo "Starting Hugo server..."
	@hugo server --destination "$(HUGO_BUILD_FOLDER)" --buildDrafts --buildFuture --logLevel debug || { echo "Hugo server failed"; exit 1; }

# Ensure HUGO_BUILD_FOLDER exists
$(HUGO_BUILD_FOLDER):
	@echo "Creating build folder: $(HUGO_BUILD_FOLDER)"
	@mkdir -p "$(HUGO_BUILD_FOLDER)"

# Clean build folder
.PHONY: clean
clean: $(HUGO_BUILD_FOLDER)
	@echo "Cleaning build folder: $(HUGO_BUILD_FOLDER)"
	@rm -rf "$(HUGO_BUILD_FOLDER)/*"

# Build the site
.PHONY: build
build: $(HUGO_BUILD_FOLDER)
	@echo "Building site into folder: $(HUGO_BUILD_FOLDER)"
	@HUGO_ENV=production hugo --destination "$(HUGO_BUILD_FOLDER)" || { echo "Hugo build failed"; exit 1; }

# Tidy the site (tidy HTML files)
.PHONY: tidy
tidy: $(HUGO_BUILD_FOLDER)
	@echo "Tidying site in folder: $(HUGO_BUILD_FOLDER)"
	@find "$(HUGO_BUILD_FOLDER)" -name '*.html' -type f -print -exec tidy -config tidy.conf -mq '{}' \; || { echo "Tidy failed"; exit 1; }

# Clean, Build, and Tidy the site
.PHONY: all
all: clean build tidy

# Deploy site to AWS
.PHONY: deploy
deploy: all
	@if [ -z "$(S3_BUCKET_URI)" ]; then \
		echo "Error: S3_BUCKET_URI is not set. Please specify the S3 bucket URI using this environment variable."; \
		exit 1; \
	fi
	@if [ -z "$(CLOUDFRONT_DISTRIBUTION_ID)" ]; then \
		echo "Error: CLOUDFRONT_DISTRIBUTION_ID is not set. Please specify the CloudFront distribution ID using this environment variable."; \
		exit 1; \
	fi
	@echo "Deploying site from folder '$(HUGO_BUILD_FOLDER)' to S3: $(S3_BUCKET_URI)"
	@aws s3 sync --delete --no-follow-symlinks --exclude "*.DS_Store" "$(HUGO_BUILD_FOLDER)" "$(S3_BUCKET_URI)" || { echo "S3 sync failed"; exit 1; }
	@echo "Creating CloudFront invalidation for distribution: $(CLOUDFRONT_DISTRIBUTION_ID)"
	@aws cloudfront create-invalidation --distribution-id "$(CLOUDFRONT_DISTRIBUTION_ID)" --paths "/*" || { echo "CloudFront invalidation failed"; exit 1; }
	@echo "Deploy completed successfully."
