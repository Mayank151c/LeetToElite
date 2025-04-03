import { useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import '../styles/AddProblem.css';
import Header from '../components/Header';
import API from '../config';

export default function AddProblem() {
  const [content, setContent] = useState({
    title: '',
    desc: '',
  });

  const setTitle = (title: string) => setContent({...content, title});
  const setDesc = (desc: string) => setContent({...content, desc});

  const handleSubmit = () => {
    axios.post(API.BASE_URL(`/problem`), content, { withCredentials: true })
      .then(res => {
        console.log(res);
        alert('Problem added successfully');
        window.location.reload();
      })
      .catch(err => {
        console.log(err.response.data.message);
      });
  }
  
  return (
    <>
      <Header path='Add a Problem'/>
      <div className='content'>
          <div className='label'>Problem Title:</div>
          <InputField type='text' setValue={setTitle} value={content.title} />
          <div className='label'>Problem Description:</div>
          <InputField type='textarea' setValue={setDesc} value={content.desc} />
          {/* <InputField type='image' setValue={setDesc} value={content.img} /> */}
          <Button sx={{width: '10rem', m: 'auto'}} variant='contained' color='success' onClick={handleSubmit}>Submit</Button>
      </div>
    </>
  )
}


function InputField(props: { type: string; value: string; setValue: (value: string) => void }) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault(); // Prevent focus change

      const { selectionStart, selectionEnd } = e.currentTarget;
      const newValue = props.value?.substring(0, selectionStart) + "  " + props.value?.substring(selectionEnd); // Insert 2 spaces

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
        rows={Math.max(props.value.split('\n').length, 10)}
        onChange={(e) => props.setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    );
  } else if(props.type === 'image') {
    return (
      <button className='img' onClick={()=>{alert('Feature not yet implemented')}}>
        <AddPhotoAlternate sx={{ fontSize: '2.15rem' }}/>
      </button>
    )
  }
}

