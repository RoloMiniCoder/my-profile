import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../components/CodeBlock';

const MarkdownRenderer = ({ markdownText }) => {
  return (
    <div className="markdown-container">
      <ReactMarkdown
        components={{
          code: CodeBlock,
        }}
      >
        {markdownText}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;