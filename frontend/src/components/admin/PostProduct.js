
import './PostProduct.scss';
import React, { useState, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
import { getAllProductSelected, createMarkDown } from '../../services/userService';
import { alert, confirm } from 'react-bootstrap-confirmation';


const mdParser = new MarkdownIt(/* Markdown-it options */);
const PostProduct = () => {
    const [contentHTML, setContentHTML] = useState('');
    const [contentMarkdown, setContentMarkdown] = useState('');
    const [selected, setSelected] = useState('');

    const [selectAllProduct, setSelectAllProduct] = useState([]);

    useEffect(() => {
        const fetch = async (e) => {
            const res = await getAllProductSelected();
            if (res && res.errCode === 0) {
                const dataFormat = await formatArrSelect(res.data)
                setSelectAllProduct(dataFormat);
            }
        };
        fetch()
    }, []);
    const formatArrSelect = (data) => {
        let results = []
        data.map((item) => {
            let object = {}
            object.label = item.nameItem
            object.value = item.id
            results.push(object)
        })
        return results
    };
    const handleEditorChange = ({ html, text }) => {
        setContentHTML(html)
        setContentMarkdown(text)
    }
    const handleChangeSelected = (selectedValue) => {
        setSelected(selectedValue.value)
    };
    const handleCreateMarkdown = async () => {
        const isConfirm = await confirm("Bạn có muốn tạo bài đăng không?");
        if (isConfirm) {
            const res = await createMarkDown({
                contentHTML,
                contentMarkdown,
                productId: selected,
            })
            if (res && res.errCode === 0) {
                alert('Bạn đã tạo bài đăng thành công')
            }
        }


    };
    return (
        <div className="manage__post-container">
            <Select
                value={selected.label}
                onChange={handleChangeSelected}
                options={selectAllProduct && selectAllProduct.length > 0 && selectAllProduct}
                className={`select`}
            />
            <MdEditor
                value={contentMarkdown}
                style={{ height: '300px' }}
                renderHTML={text => mdParser.render(text)}
                onChange={handleEditorChange}
                className={`markdown`}
            />
            <button className='btn btn-primary'
                onClick={handleCreateMarkdown}
            >Tạo bài đăng</button>
        </div>
    );
}

export default PostProduct;