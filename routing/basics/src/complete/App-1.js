import React from 'react';

class App extends React.Component {
 render() {
   return(<div className='ui text container'>
     <h2 className='ui dividing header'>
       With body of water?
     </h2>
     <ul>
       <li>
         <a href='/atlantic'>
           <code>/atlantic</code>
         </a>
       </li>
       <li>
         <a href='/pacific'>
           <code>/atlantic</code>
         </a>
       </li>
       <hr />

     </ul>
   </div>)
 }
}

export default App;

const Atlantic = () => (
  <div>
    <h3>Atlantic Ocean</h3>
    <p>
    The Atlantic Ocean covers approximately 1/5th of the
    surface of the earth.
    </p>
  </div>
)

const Pacific = () => (
  <div>
    <h3>Pacific Ocean</h3>
    <p>
      Ferdinand Magellan, a Portuguese explorer, named the ocean
      'mar pacifico' in 1521, which means peaceful sea.
    </p>
  </div>
)