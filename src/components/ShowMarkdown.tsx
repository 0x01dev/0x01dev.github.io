import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// see:
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/479#issuecomment-1267772279
import type {CodeProps} from 'react-markdown/lib/ast-to-react';
//

import rangeParser from 'parse-numeric-range';

// https://github.com/react-syntax-highlighter/react-syntax-highlighter#light-build
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import shell from 'react-syntax-highlighter/dist/esm/languages/prism/shell-session';
// themes
import {oneLight, oneDark, dark, darcula} from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage('shell', shell);


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

    const syntaxTheme = oneLight; //

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
    };

    return (
        <>
            {markdownFile ?
                <ReactMarkdown
                    children={markdownFile}
                    remarkPlugins={[remarkGfm]}
                    components={components}
                />
                : null
            }
        </>
    );
}

export default ShowMarkdown;