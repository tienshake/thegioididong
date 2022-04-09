
import './PostProduct.scss';
import React, { useState, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';


const mdParser = new MarkdownIt(/* Markdown-it options */);
const PostProduct = () => {
    const [contentHTML, setContentHTML] = useState('');
    const [contentMarkdown, setContentMarkdown] = useState('');

    const handleEditorChange = ({ html, text }) => {
        setContentHTML(html)
        setContentMarkdown(text)
    }
    return (
        <div className="manage__post-container">
            <MdEditor
                value={contentMarkdown}
                style={{ height: '300px' }}
                renderHTML={text => mdParser.render(text)}
                onChange={handleEditorChange}
                className={`markdown`}
            />
            {/* <h1>Tao la post</h1>
            <textarea
                className="textarea"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></textarea>
            <ReactMarkdown children={input} className="markdown" remarkPlugins={[remarkGfm]} /> */}
        </div>
    );
}

export default PostProduct;