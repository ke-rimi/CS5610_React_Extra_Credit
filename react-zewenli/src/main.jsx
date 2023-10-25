import React from 'react'
import ReactDOM from 'react-dom'
import FBN from './additivePersistence.jsx'


function Main() {
  return (
    <div className="Main">
      <FBN/>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));