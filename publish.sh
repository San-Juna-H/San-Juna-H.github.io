#!/bin/sh

set -eu

cd "$(dirname "$0")"

if ! command -v uvx >/dev/null 2>&1; then
    echo "Error: uvx is required." >&2
    exit 1
fi

uvx --from "rendercv[full]==2.8" rendercv render cv.yaml

git add -A

if ! git diff --cached --quiet; then
    git commit -m "Last updated: $(date +%Y-%m-%d)"
fi

git push origin main
