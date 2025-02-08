#!/bin/bash

REMOTE_USER="ubuntu"
REMOTE_HOST="budoman.eu"
REMOTE_PATH="/var/www/budoman-frontend/"
SSH_KEY="~/.ssh/aws_budoman"

echo "Deploying files to $REMOTE_USER@$REMOTE_HOST..."
rsync -av --exclude 'node_modules' --exclude '.env' -e "ssh -i $SSH_KEY" . $REMOTE_USER@$REMOTE_HOST:/var/www/budoman-frontend

echo "Installing dependencies, building application and restarting the server..."
ssh -i "$SSH_KEY" "$REMOTE_USER@$REMOTE_HOST" << EOF
  source ~/.nvm/nvm.sh
  cd /var/www/budoman-frontend
  npm install
  npm run prod-build
  pm2 restart budoman-frontend || pm2 start src/server.js --name budoman-frontend
  sudo systemctl restart nginx
EOF
echo "Deployment completed successfully!"
