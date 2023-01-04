// import logo from './logo.svg';
import './App.css';
import { ChildA } from './components/Context/ContextChildren';
import { ContextParent } from './components/Context/ContextParent';
import { ArrayUseState } from './components/ImmutableState/ArrayUseState';
// import UseState from './components/UseState/UseState';
// import { UseReducer } from './components/UseReducer/UseReducer';
import { ObjectUseState } from './components/ImmutableState/ObjectUseState';
import ParentFour from './components/incorrect optimization/ParentFour';
import ParentThree from './components/incorrect optimization/ParentThree';
import { ChildOne } from './components/Optimization/ChildOne';
import { GrandParent } from './components/Optimization/GrandParent';
import ParentOne from './components/Optimization/ParentOne';
import ParentTwo from './components/Optimization/ParentTwo';
import Parent from './components/ParentChild/Parent';

function App() {
  return (
    <div className="App">
      <ContextParent>
        <ChildA />
      </ContextParent>
      {/* <ParentFour /> */}
      {/* <ParentThree /> */}
      {/* <ParentTwo /> */}
      {/* <GrandParent /> */}
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <Parent /> */}
      {/* <ObjectUseState />
      <ArrayUseState /> */}
      {/* <UseReducer /> */}
      {/* <UseState /> */}
    </div>
  );
}

export default App;
