import React, { useEffect, useRef } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/clike/clike';

const CodeEditor = ({ code, onChange }) => {
    const editorRef = useRef();

    useEffect(() => {
        const editor = editorRef.current;

        editor.setValue(code);

        editor.on('change', (editor, data, value) => {
            onChange(value);
        });
    }, [code, onChange]);

    return (
        <CodeMirror
            ref={editorRef}
            value={code}
            options={{
                mode: 'text/x-java',
                theme: 'default',
                lineNumbers: true,
            }}
            onBeforeChange={(editor, data, value) => {
                // Do nothing to handle code changes in useEffect
            }}
        />
    );
};

export default CodeEditor;