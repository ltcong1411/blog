import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Code from '@editorjs/code';
import SimpleImage from '@editorjs/simple-image';
import editorjsCodecup from '@calumk/editorjs-codecup';
import styles from './editor.module.css';
import editorjsHTML from 'editorjs-html';

const edjsParser = editorjsHTML();

const Editor = ({ onChange }) => {
  const editorInstance = useRef(null);

  useEffect(() => {
    if (!editorInstance.current) {
      editorInstance.current = new EditorJS({
        holder: 'editorjs',
        tools: {
          header: Header,
          code: editorjsCodecup,
          image: SimpleImage,
        },
        onChange: async () => {
          const content = await editorInstance.current.save();
          const htmlContent = edjsParser.parse(content).join('');
          onChange(htmlContent);
        },
      });
    }

    // Cleanup on unmount
    return () => {
      if (editorInstance.current) {
        editorInstance.current.destroy();
        editorInstance.current = null;
      }
    };
  }, [onChange]);

  return <div id="editorjs" className={styles.editor}></div>;
};

export default Editor;
