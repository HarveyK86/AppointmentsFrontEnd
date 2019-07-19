rm -rf dist
mkdir -p dist/js
cp -a src/main/js dist
find dist/js -type f \
  -name "*.js" \
  -exec echo {} \; \
  -exec uglifyjs {} --output {} \;
mkdir -p dist/css
cp -a src/main/css dist
find dist/css -type f \
  -name "*.css" \
  -exec echo {} \; \
  -exec uglifycss {} --output {} \;
cp -a src/main/html/. dist
find dist -type f \
  -name "*.html" \
  -exec echo {} \; \
  -exec html-minifier {} --remove-comments --collapse-whitespace --output {} \;