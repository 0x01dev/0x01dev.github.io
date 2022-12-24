appName=0x01dev.github.io
npx create-react-app "${appName}" --template redux-typescript

./install_node_modules.sh


# markdown

echo "
// see:
// https://stackoverflow.com/a/65483206/1697878
declare module '*.md' {
  const value: string; // markdown is just a string
  export default value;
}
" >>./src/react-app-env.d.ts && cat ./src/react-app-env.d.ts

# Relative imports outside of src/ are not supported.
# You can either move it inside src/, or add a symlink to it from project's node_modules/.
mkdir -p ./node_modules/project-files/ && cd "$_" && npm init -y && cd - || exit
## you need to use full paths to create working symbolic link
## see: https://askubuntu.com/a/193683
ln -sf $(pwd)/README.md $(pwd)/node_modules/project-files/project_readme.md && cat ./node_modules/project-files/project_readme.md