#!/bin/bash
# Static build script for portfolio deployment

echo "Building static portfolio..."

# Clean previous builds
rm -rf dist/
mkdir -p dist/

# Build the frontend with Vite
vite build

# Copy static files to root dist directory
cp -r dist/public/* dist/

echo "Static build complete!"
echo "Files available in dist/ directory:"
ls -la dist/

echo ""
echo "To deploy as static site:"
echo "1. Use 'dist' as your public directory"
echo "2. index.html is your entry point"
echo "3. Assets are in the 'assets' subdirectory"