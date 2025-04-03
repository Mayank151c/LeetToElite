import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

export default function AddSolution() {
  const [content, setContent] = useState({
    title: '',
    approach: '',
    code: '',
  });
  useEffect(() => {
    console.log(content);
  }, [content]);

  const setTitle = (title: string) => setContent({...content, title});
  const setApproach = (approach: string) => setContent({...content, approach});
  const setCode = (code: string) => setContent({...content, code});
  
  return (
    <div className='content'>
        <h3>Add a Problem</h3>
        <LabelField>Solution Title:</LabelField>
        <InputField type='text' setValue={setTitle} value={content.title} />
        <LabelField>Approach:</LabelField>
        <InputField type='textarea' setValue={setApproach} value={content.approach} />
        <LabelField>Code:</LabelField>
        <InputField type='textarea' setValue={setCode} value={content.code} />
        <Button variant='contained' color='success' onClick={() => console.log(content)}>Submit</Button>
    </div>
  )
}

function LabelField(props: { children: string }) {
  return <div className='label'>{props.children}</div>
}

function InputField(props: { value: string; type: string; setValue: (value: string) => void }) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault(); // Prevent focus change

      const { selectionStart, selectionEnd } = e.currentTarget;
      const newValue = props.value.substring(0, selectionStart) + "  " + props.value.substring(selectionEnd); // Insert 2 spaces

      props.setValue(newValue);

      // Move cursor after inserted spaces
      setTimeout(() => {
        e.currentTarget.selectionStart = e.currentTarget.selectionEnd = selectionStart + 4;
      }, 0);
    }
  };

  if(props.type === 'text') {
    return (
      <input
        className="input"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
    );
  } else if(props.type === 'textarea') {
    return (
      <textarea
        className="input"
        value={props.value}
        rows={props.value.split('\n').length}
        onChange={(e) => props.setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    );
  }
}

