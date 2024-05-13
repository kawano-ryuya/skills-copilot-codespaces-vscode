import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');
    const data = [
        { name: 'John' },
        { name: 'Jane' },
        { name: 'Alice' },
        { name: 'Bob' },
    ];

    const names = data.map(item => item.name);
    console.log(names);

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };


    const reverseSentence = (sentence) => {
        const reversed = sentence.split(' ').reverse().join(' ');
        return reversed.charAt(0).toUpperCase() + reversed.slice(1);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{reverseSentence(markdown)}</ReactMarkdown>
        </div>
    );
};


export default MarkdownEditor;
const names = data.flatMap(arr => arr.map(item => item.name));
console.log(names);