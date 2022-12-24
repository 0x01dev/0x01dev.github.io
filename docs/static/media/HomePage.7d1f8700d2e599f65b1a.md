--------------------

#### This is a markdown <h4> header

Using [react-markdown](https://github.com/remarkjs/react-markdown)
with [remark plugin](https://github.com/remarkjs/remark-gfm)

See: [How to safely render Markdown using react-markdown](https://blog.logrocket.com/how-to-safely-render-markdown-using-react-markdown/)

Render code block from markdown file:

##### shell script:

```shell
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

##### JavaScript:

```js
const x = {
    one: 1,
    two: 2,
}
```

##### typescript jsx:

```jsx
const components = {
    code({node, inline, className, children, style, ...props}: CodeProps) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter
                style={syntaxTheme}
                language={match[1]}
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                {...props}
            />
        ) : (
            <code className={className} {...props} />
        )
    }
}

const markdownBlock = markdownFile ?
    <ReactMarkdown
        children={markdownFile}
        remarkPlugins={[remarkGfm]}
        components={components}
    />
    : null;
```

--------------------









