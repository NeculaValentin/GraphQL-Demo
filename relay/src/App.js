import React from 'react';
import './App.css';
import fetchGraphQL from './fetchGraphQL';

const { useState, useEffect } = React;

function App() {
  const [repositories, setReposiories] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
    query {
      viewer {
        name
         repositories(last:5){
           nodes {
             name
           }
         }
       }
    }
    `).then(response => {
      if (!isMounted) {
        return;
      }
      const data = response.data;
      setReposiories(data.viewer.repositories.nodes);
    }).catch(error => {
      console.error(error);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  // Render "Loading" until the query completes
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {repositories != null ? `Repositories: ${repositories.map(e=>e.name)}` : "Loading"}
        </p>
      </header>
    </div>
  );
}

export default App;