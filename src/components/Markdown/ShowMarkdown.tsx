import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// see:
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/479#issuecomment-1267772279
import type {CodeProps} from 'react-markdown/lib/ast-to-react';
//

// https://github.com/react-syntax-highlighter/react-syntax-highlighter#light-build
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import shell from 'react-syntax-highlighter/dist/esm/languages/prism/shell-session';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
// themes
import {
    oneLight,
    oneDark,
    dark,
    darcula,
    ghcolors,
    prism,
    materialDark,
    materialLight
} from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage('shell', shell);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('js', javascript);
SyntaxHighlighter.registerLanguage('javascript', javascript);

/*
* Syntax Highlight Code in Markdown
* see:
* https://amirardalan.com/blog/syntax-highlight-code-in-markdown
* https://github.com/remarkjs/remark/discussions/714
* https://www.copycat.dev/blog/react-markdown/
* */

type ShowMarkdownProps = {
    markdownFilePath: string
};


const ShowMarkdown: React.FC<ShowMarkdownProps> = (props) => {

    const [markdownCodeBlockTheme, setMarkdownCodeBlockTheme] = useState(darcula);

    const [markdownFile, setMarkdownFile] = useState<string>();

    useEffect(() => {

            fetch(props.markdownFilePath)
                .then(res => {
                    return res.text();
                })
                .then((text) => {
                    // console.log(text);
                    setMarkdownFile(text);
                })
                .catch(error => {
                    console.error(error);
                })
        },
        [props.markdownFilePath]
    );

    const components = {
        code({node, inline, className, children, style, ...props}: CodeProps) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <SyntaxHighlighter
                    style={markdownCodeBlockTheme}
                    language={match[1]}
                    PreTag="div"
                    children={String(children).replace(/\n$/, '')}
                    {...props}
                />
            ) : (
                <code className={className} {...props} />
            )
        }
    };

    const markdownBlock = markdownFile ?
        <ReactMarkdown
            children={markdownFile}
            remarkPlugins={[remarkGfm]}
            components={components}
        />
        : null;

    return (
        <>
            {markdownBlock}
        </>
    );
}

export default ShowMarkdown;