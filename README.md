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