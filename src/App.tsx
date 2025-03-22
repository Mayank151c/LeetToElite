import 'react';
import './App.css';
import lteLogo from '/lte.png';

const problems = [
  {
    id: 1,
    title: 'Set Matrix Zeros',
    problemStatement: 'Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.',
    solution: `Set all the elements of the row and column to 0 and then set the corresponding element of the matrix to 0.`,
  }
]

function App() {
  return (
    <>
      <div className='header'>
        <img className='logo' src={lteLogo} alt='LTE logo'/>
        <div>LeetToElite</div>
      </div>
      <hr/>
      <div className='content'>
        <div>DSA Preperation</div>
        <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur voluptatum quod laborum ut quisquam repellendus, odit quis unde vel? Quisquam quod quam recusandae aliquid consequuntur totam architecto. Quidem, eum.</div>
        {
          problems.map((item) => {
            return (
              <div className='problem' key={item.id}>
                <div className='problem-title'><b>{item.id}. {item.title}</b></div>
                <div className='problem-content'>
                  <div><b>Problem Statement:</b></div>
                  <div>{item.problemStatement}</div>
                  <div><b>Solution:</b></div>
                  <div>{item.solution}</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='footer'></div>
    </>
  )
}

export default App
