import 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Tab from '../components/Tab';

export default function Home() {
  const Navigate = useNavigate();
  return (
    <>
      <Header />
      <div className='content'>
        <h1>DSA Preperation</h1>
        <p>Our platform is designed to help you understand problems, identify the right approach, and implement optimal solutions</p>
        <p><b>🔹<u>Problems Categorized by Topics</u></b> - Master arrays, graphs, dynamic programming, and more.</p>
        <p><b>🔹<u>Step-by-Step Approaches</u></b> - Learn how to break down complex problems with intuitive explanations.</p>
        <p><b>🔹<u>Optimized Solutions</u></b> - From brute force to the most efficient algorithms.</p>
        <Tab>
          <>
            <div onClick={()=> Navigate('/problem/topics')}>Topic Wise Problems</div>
            <div onClick={()=> Navigate('/problem/add')}>Add a Problem</div>
            <div onClick={()=> Navigate('/solution/add')}>Add a Solution</div>
          </>
        </Tab>
      </div>
    </>
  );
}