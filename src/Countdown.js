import React from 'react';

export default function Countdown() {
    const [seconds, setSeconds] = React.useState(30);
  
    React.useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setSeconds('BOOOOM!');
      }
    });

    function restartTimer(){
        setSeconds(30)
    }

  
    return (
      <div className="App">
        <div>
          {seconds}
          <button onClick={() => restartTimer()}>Click here to restart</button>
        </div>
      </div>
    );
  }
