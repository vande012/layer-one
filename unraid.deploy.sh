#!/bin/bash

# Create necessary directories
mkdir -p docker/config/{dev,prod}
mkdir -p docker/data/{dev,prod}

# Set proper permissions
chmod -R 755 docker/config
chmod -R 755 docker/data

# Get current branch name
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Choose configuration based on branch
if [ "$BRANCH" = "main" ]; then
    echo "Deploying production configuration on Unraid..."
    docker-compose -f docker/docker-compose.prod.yml up --build -d
elif [ "$BRANCH" = "dev" ]; then
    echo "Deploying development configuration on Unraid..."
    docker-compose -f docker/docker-compose.dev.yml up --build -d
else
    echo "Unknown branch: $BRANCH"
    exit 1
fi