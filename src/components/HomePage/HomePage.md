
## Show markdown in React 

See: [How to safely render Markdown using react-markdown](https://blog.logrocket.com/how-to-safely-render-markdown-using-react-markdown/)

Install [react-markdown](https://github.com/remarkjs/react-markdown) with [remark plugin](https://github.com/remarkjs/remark-gfm):

```bash
# install
npm install --save-dev react-markdown remark-gfm

## declare module 
## see: https://stackoverflow.com/a/65483206
echo "// see: https://stackoverflow.com/a/65483206/1697878
declare module '*.md' {
  const value: string; // markdown is just a string
  export default value;
}
" >>./src/react-app-env.d.ts && cat ./src/react-app-env.d.ts 
```







