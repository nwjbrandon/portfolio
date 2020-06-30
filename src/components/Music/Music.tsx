import React from 'react';

import PlasticMemoriesMusic from 'assets/music/plastic_memories.mp3';

import './Music.scss';

function App() {
  const ref = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    if (ref !== null && ref.current != null) {
      ref.current.play();
    }
  }, []);

  return (
    <audio
      className="music__controller"
      controls={true}
      autoPlay={true}
      loop={true}
      ref={ref}
    >
      <source src={PlasticMemoriesMusic} type="audio/mpeg"></source>
    </audio>
  );
}

export default App;
