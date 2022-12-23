appName=0x01dev.github.io
npx create-react-app "${appName}" --template redux-typescript

# (*)
# install react router
# https://reactrouter.com/web/guides/quick-start
# https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25600790#overview
npm install --save-dev react-router-dom @types/react-router-dom

# https://fomantic-ui.com/introduction/getting-started.html
npm install fomantic-ui
# for jquery:
npm i --save-dev @types/jquery

# Semantic UI React
npm install semantic-ui-react semantic-ui-css

# https://github.com/remarkjs/react-markdown
# https://blog.logrocket.com/how-to-safely-render-markdown-using-react-markdown/
npm install --save-dev react-markdown remark-gfm react-syntax-highlighter @types/react-syntax-highlighter parse-numeric-range
## https://stackoverflow.com/a/65483206

echo "
// see:
// https://stackoverflow.com/a/65483206/1697878
declare module '*.md' {
  const value: string; // markdown is just a string
  export default value;
}
">>./src/react-app-env.d.ts && cat ./src/react-app-env.d.ts

# Relative imports outside of src/ are not supported.
# You can either move it inside src/, or add a symlink to it from project's node_modules/.
mkdir -p ./node_modules/project-files/ && cd "$_" && npm init -y && cd - || exit
## you need to use full paths to create working symbolic link
## see: https://askubuntu.com/a/193683
ln -sf  $(pwd)/README.md $(pwd)/node_modules/project-files/project_readme.md && cat ./node_modules/project-files/project_readme.md

# (*)
# install axios
# https://github.com/axios/axios
# https://axios-http.com/
# Docs: https://axios-http.com/docs/intro
npm install --save-dev axios
## see: Accessing Set-Cookie value from response.headers in axios
# https://stackoverflow.com/questions/70972629/accessing-set-cookie-value-from-response-headers-in-axios
# https://www.npmjs.com/package/axios-cookiejar-support

# cookie
npm install --save-dev js-cookie @types/js-cookie

# countries list
# https://github.com/annexare/Countries
npm install countries-list

## Blueprint
## https://blueprintjs.com/docs/#blueprint
## https://github.com/palantir/blueprint
npm install --save-dev @blueprintjs/core @blueprintjs/icons @blueprintjs/select @blueprintjs/table @blueprintjs/timezone @blueprintjs/popover2 @blueprintjs/docs-theme