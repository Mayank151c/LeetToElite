import 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Headers.css';
import lteLogo from '/lte.png';
import { Home, KeyboardArrowRight } from '@mui/icons-material';

export default function Header(props: { path?: string }) {
  const Navigate = useNavigate();
  return (
    <>
      <div className='header'>
          <img className='logo' src={lteLogo} alt='LTE logo'/>
          <div className='path'>
            <Home 
              sx={{mr: 0, ":hover": {cursor: 'pointer', color: '#d90'}}} 
              onClick={() => Navigate('/home')}
            />
            {props.path ? <KeyboardArrowRight/> : ''}
            {props.path ? props.path : ' Home'}
          </div>
      </div>
      <hr/>
    </>
  );
}