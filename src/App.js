import React , {Component} from 'react';
import './App.css';
import Form from './componrnts/Form/Form';
class App extends Component{
  
  state={
    entries : []
  }
  
  updateEntries=(entry)=>{
    this.setState(state=>({
      entries: state.entries.concat(entry)
    }))
  }
  deleteEntry=(i)=>{
    this.setState(state=>({
      ...state,
      entries : state.entries.filter((entry,index)=>index!==i)
    }))
  }
  render(){
    const {entries} = this.state
  return (
    <div className="App">
      <Form update={this.updateEntries}/>
      
      <div className='entries'>
      <h2>ENTRIES : </h2>
      {entries.length > 0 
        ? (
          <div className='entries-container'>
           
          {entries.map((entry,i)=>
            <div className='entry-container'>
              <div className='entry'>
              <p><strong>Analytical ID :</strong>{entry.analytical_id}</p>
              <p><strong>Target Residue Type :</strong>{entry.target_residue_type}</p>
              <p><strong>Reason : </strong>{entry.reason}</p>
              </div>
              <button className="delete" onClick={()=>this.deleteEntry(i)}>DELETE</button>
          </div>)}
          </div>
        )
        :<p className="message">Sorry! No  
          Entries to Show. Add Some!
        </p>}
      </div>
      
    </div>
  );
  }
}

export default App;
