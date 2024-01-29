import React, { useState } from 'react';
import './text-editor.css'; // Import your CSS file for styling
import { useEffect } from 'react';
import { useRef } from 'react';

const GrammarlyPopoverExample = () => {
  // const[fixedCount, setFixedCount] = useState(0);
  const fixedCount = useRef(0);
  const [issues, setIssues] = useState([
    { id: 1, text: 'example', suggestion: 'consider using "an" instead of "a"', replacement: 'an exampleggg' },
    { id: 2, text: 'cor', suggestion: 'consider using "correct" instead of "cor"', replacement: 'correct' },
    // Additional issues can be added to this array
  ]);

  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const [selectedIssue, setSelectedIssue] = useState(null);

  const showPopover = (issueId, position) => {
    setSelectedIssue(issueId);
    setPopoverPosition(position);
  };

  const hidePopover = () => {
    setSelectedIssue(null);
  };

  const handleMouseOver = (event, issueId) => {
    const rect = event.target.getBoundingClientRect();
    const position = {
      top: rect.bottom + window.scrollY + 5,
      left: rect.left + window.scrollX,
    };
    if (fixedCount.current !== issues.length) {
      showPopover(issueId, position);
    }
  };

  const handleMouseOut = () => {
    // hidePopover();
  };

  const handleFix = () => {

  }





  return (
    <div>
      <p>
        This is an{' '}
        <span
          id='1'
          className="grammarly-issue"
          onMouseOver={(event) => handleMouseOver(event, 1)}
          onMouseOut={handleMouseOut}
        >
          example
        </span>{' '}
        <span
          id='2'
          className="grammarly-issue"
          onMouseOver={(event) => handleMouseOver(event, 2)}
          onMouseOut={handleMouseOut}
        >
          cor {' '}
        </span>
        sentence.
      </p>

      {console.log('check selectedIssue', selectedIssue)}

      {selectedIssue !== null && (
        <div className="popover" style={{ top: popoverPosition.top, left: popoverPosition.left }}>
          {issues.find((issue) => issue.id === selectedIssue)?.suggestion}
          <button onClick={() => {
            issues.forEach((issue) => {
              if(issue.id === selectedIssue) {
                 document.getElementById(issue.id).innerText = issue.replacement+ ' ';
                 document.getElementById(issue.id).classList.remove('grammarly-issue');
                 hidePopover();
                 fixedCount.current = fixedCount.current + 1;

              }
            })
          }}>Fix</button>
        </div>
      )}
      {console.log('check ', fixedCount.current, issues.length)}
      {
        // fixedCount.current === issues.length && hidePopover()
      }
     
    </div>
  );
};

export default GrammarlyPopoverExample;
