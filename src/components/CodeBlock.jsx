import { useMemo } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

const CodeBlock = ({ inline, children, className, ...props }) => {
    if (inline) {
        return <code className={className} {...props}>{children}</code>;
    }

    const rawCode = children ? String(children).trim() : '';

    const language = className ? className.replace('language-', '') : 'plaintext';

    const highlightedCode = useMemo(() => {
        if (rawCode) {
            try {
                const result = hljs.highlight(rawCode, { language, ignoreIllegals: true });
                return result.value;
            } catch (error) {
                console.error(`Highlight.js failed for language ${language}:`, error);
                // Fallback: return the raw code string as plain text
                return rawCode;
            }
        }
        return '';
    }, [rawCode, language]);

    return (
        <pre className={className} {...props}>
            <code
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
                className={className}
            />
        </pre>
    );
};

export default CodeBlock;