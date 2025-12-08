import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../components/CodeBlock';
import { useEffect } from 'react';

const MarkdownRenderer = ({ markdownText }) => {

  // In case an image isn't found, replaces it with a generic message
  // instead of default icon
  useEffect(() => {
    const imgs = document.querySelectorAll('.markdown_container img');
    imgs.forEach(img => {
      img.onerror = () => {
        img.style.display = 'none';

        const placeholder = document.createElement('div');
        //placeholder.textContent = img.alt || 'Image not found';
        placeholder.textContent = 'Image not found';
        placeholder.innerHTML = `
  <div style="
    padding: 20px;
    text-align: center;
    background: #2a2a2a;
    border-radius: 10px;
    border: 1px dashed #555;
    color: #ccc;
  ">
    📷 Image unavailable
  </div>
`;
        placeholder.style.textAlign = 'center';
        placeholder.style.padding = '20px';
        placeholder.style.background = '#333';
        placeholder.style.borderRadius = '8px';
        placeholder.style.color = '#aaa';
        placeholder.style.fontStyle = 'italic';

        img.parentNode.insertBefore(placeholder, img.nextSibling);
      };
    });
  }, []);

  return (
    <div className="markdown_container">
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