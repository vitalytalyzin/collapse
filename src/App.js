import React, { useState } from 'react';
import './App.css';
import Collapse from './components/Collapse/Collapse';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <Collapse
        isExpanded={isExpanded}
        onExpandedChange={() => setIsExpanded(!isExpanded)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet excepturi laboriosam molestiae totam veritatis? Ab amet architecto consequatur cum delectus doloremque, eveniet illum inventore maxime minima minus, neque nulla quas.
      </Collapse>
    </div>
  );
}

export default App;
