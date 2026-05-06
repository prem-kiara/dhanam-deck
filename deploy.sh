#!/usr/bin/env bash
# Pull latest dhanam-deck and serve via nginx.
# Run on EC2: cd ~/dhanam-deck && ./deploy.sh
set -euo pipefail

cd "$(dirname "$0")"

BRANCH="${1:-main}"

echo "[deploy] fetching origin/$BRANCH..."
git fetch --prune origin
git reset --hard "origin/$BRANCH"

echo "[deploy] sanity checks..."
test -f index.html || { echo "FAIL: index.html missing"; exit 1; }
test -d uploads    || { echo "FAIL: uploads/ missing";    exit 1; }
test -d assets     || { echo "FAIL: assets/ missing";     exit 1; }

echo "[deploy] world-readable permissions for nginx..."
find . -type f -exec chmod 644 {} +
find . -type d -exec chmod 755 {} +
chmod +x deploy.sh

# Reload nginx only if the nginx/ folder changed in the last pull.
if git diff --name-only HEAD@{1} HEAD 2>/dev/null | grep -q '^nginx/'; then
  echo "[deploy] nginx/ changed — reloading nginx..."
  sudo nginx -t && sudo systemctl reload nginx
fi

echo "[deploy] live at https://deck.dhanamfinance.com/"
