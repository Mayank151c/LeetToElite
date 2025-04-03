import 'react';
import Header from '../components/Header';
import Tab from '../components/Tab';

export default function ShowTopics() {
  return <>
    <Header path={'Topic wise Problems'}/>
    <Tab>
      <>
        <div>Array</div>
        <div>String</div>
        <div>Linked List</div>
        <div>Stack</div>
        <div>Queue</div>
        <div>Tree</div>
        <div>Graph</div>
        <div>Dynamic Programming</div>
        <div>Backtracking</div>
        <div>Tries</div>
      </>
    </Tab>
  </>
}