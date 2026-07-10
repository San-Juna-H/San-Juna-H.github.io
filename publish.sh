#!/usr/bin/env bash

set -Eeuo pipefail

readonly RENDERCV_VERSION="2.8"

repo_root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$repo_root"

dry_run=false
if [[ "${1:-}" == "--dry-run" ]]; then
    dry_run=true
    shift
fi

if (( $# > 0 )); then
    echo "Usage: ./publish.sh [--dry-run]" >&2
    exit 1
fi

commit_message="Last updated: $(date +%Y-%m-%d)"

if ! command -v uvx >/dev/null 2>&1; then
    echo "Error: uvx is required. Install uv before running this script." >&2
    exit 1
fi

if [[ ! -f cv.yaml ]]; then
    echo "Error: $repo_root/cv.yaml was not found." >&2
    exit 1
fi

if [[ "$dry_run" == false ]]; then
    current_branch="$(git branch --show-current)"
    if [[ "$current_branch" != "main" ]]; then
        echo "Error: the current branch is '$current_branch'. Run this script from main." >&2
        exit 1
    fi

    if ! git remote get-url origin >/dev/null 2>&1; then
        echo "Error: the origin remote is not configured." >&2
        exit 1
    fi

    unexpected_staged=""
    while IFS= read -r path; do
        case "$path" in
            cv.yaml|cv.pdf|publish.sh|.gitignore|README.md)
                ;;
            *)
                unexpected_staged+=$'\n  - '"$path"
                ;;
        esac
    done < <(git diff --cached --name-only)

    if [[ -n "$unexpected_staged" ]]; then
        echo "Error: unrelated staged files would be included:$unexpected_staged" >&2
        echo "Commit or unstage them before running this script again." >&2
        exit 1
    fi
fi

temp_dir="$(mktemp -d "${TMPDIR:-/tmp}/rendercv-publish.XXXXXX")"
cleanup() {
    rm -rf -- "$temp_dir" "$repo_root/rendercv_output"
}
trap cleanup EXIT

echo "Rendering the CV with RenderCV ${RENDERCV_VERSION}..."
uvx \
    --from "rendercv[full]==$RENDERCV_VERSION" \
    rendercv render cv.yaml \
    --output-folder "$temp_dir/rendercv_output" \
    --pdf-path "$temp_dir/cv.pdf"

if [[ ! -s "$temp_dir/cv.pdf" ]]; then
    echo "Error: RenderCV did not produce a PDF." >&2
    exit 1
fi

mv -- "$temp_dir/cv.pdf" "$repo_root/cv.pdf"
echo "Updated cv.pdf."

if [[ "$dry_run" == true ]]; then
    echo "Dry run complete. Commit and push were skipped."
    exit 0
fi

managed_files=(cv.yaml cv.pdf publish.sh .gitignore)
if [[ -e README.md ]] || git ls-files --error-unmatch README.md >/dev/null 2>&1; then
    managed_files+=(README.md)
fi
git add -A -- "${managed_files[@]}"

if git diff --cached --quiet; then
    echo "No CV changes to commit. Pushing existing commits."
else
    git commit -m "$commit_message"
fi

git push origin main
echo "Published: https://san-juna-h.github.io/"
