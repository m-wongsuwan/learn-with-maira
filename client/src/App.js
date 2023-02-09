import './App.css';
import EditGroup from './components/EditGroup';
import GroupDisplay from './components/GroupDisplay';
import IndividualDisplay from './components/IndividualDisplay';
import SubmitGroup from './components/SubmitGroup';
import SubmitIndividual from './components/SubmitIndividual';


function App() {
  return (
    <div className="App">
      <h1>Test Page</h1>
      <SubmitGroup />
      <SubmitIndividual />
      <GroupDisplay />
      <EditGroup />
      <IndividualDisplay />
    </div>
  );
}

export default App;