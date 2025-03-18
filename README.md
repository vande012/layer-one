# Layer One - Docker Image Update Process

## Prerequisites
- Docker installed on your machine
- Docker Hub account with access to the `vande012/layer-one` repository
- Git repository with the Layer One application code

## Update Process

1. Ensure you have the latest code
   ```
   git checkout main
   git pull origin main
   ```

2. Build the Docker image
   ```
   cd /path/to/layer-one
   docker-compose -f docker/docker-compose.prod.yml build --no-cache
   ```

3. Verify the image was created
   ```
   docker images
   ```

4. Test the image locally (recommended)
   ```
   docker run -p 3002:3002 -e NODE_ENV=production -e PORT=3002 --name test-layer-one-prod docker-layer-one-prod:latest
   ```
   Access the application at http://localhost:3002 to verify it works correctly.

   Stop and remove the test container when done:
   ```
   docker stop test-layer-one-prod
   docker rm test-layer-one-prod
   ```

5. Tag the image for Docker Hub
   ```
   docker tag docker-layer-one-prod:latest vande012/layer-one:prod
   ```

6. Push the image to Docker Hub
   ```
   docker push vande012/layer-one:prod
   ```

7. Verify the update
   Visit [Docker Hub](https://hub.docker.com/repository/docker/vande012/layer-one/tags) to confirm that your image has been updated with a new timestamp and SHA.

## Troubleshooting
- **Image not found**: Make sure you're using the correct image name. Check with `docker images` and use the exact name shown.
- **Push permission denied**: Ensure you're logged in to Docker Hub with `docker login` and have the necessary permissions.
- **Old code still showing**: Verify that your build context is correct and that you're not using cached layers by using the `--no-cache` flag.



# Layer One - Unraid Setup

## Development Branch (dev.layerone.com)
1. In Unraid Docker tab:
   - Port: 3001:3001
   - Path: /mnt/user/appdata/layer-one/dev
   - Environment Variables:
     - NODE_ENV=development
     - PORT=3001

## Production Branch (layerone.com)
1. In Unraid Docker tab:
   - Port: 3002:3002
   - Path: /mnt/user/appdata/layer-one/prod
   - Environment Variables:
     - NODE_ENV=production
     - PORT=3002

## Volume Mappings for Both:
- Config: /mnt/user/appdata/layer-one/{dev|prod}/config:/app/config
- Data: /mnt/user/appdata/layer-one/{dev|prod}/data:/app/data

## Network Settings:
- Network Type: Bridge
- Additional Networks: None required
- DNS Server: Default

## Advanced Settings:
- Auto-update: On
- Repository: your-docker-hub/layer-one:{dev|prod}

