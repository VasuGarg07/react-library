import { act, useRef, useState } from 'react'
import { useWindowSize } from './hooks/useWindowSize';
import { useCopyToClipboard } from './hooks/useCopyToClipboard';
import { useCopied } from './hooks/useCopied';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { useScrollPosition } from './hooks/useScrollPosition';
import { useToast } from './components/useToast';
import ProgressBar from './components/ProgressBar';
import "./App.css"
import APPS_LIST from './ComponentsList';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [activeIndex, setActiveIndex] = useLocalStorage("activeIndex",0);
  const component = APPS_LIST[activeIndex];
  
  // const {copyToClipboard} = useCopyToClipboard();
  const [copied, copyToClipboard] = useCopied();
  const online = useOnlineStatus();
  // const scrollPositon = useScrollPosition();

  const handleModalOpen = (val) => {
    console.log(val);
    setOpen(val);
  }

  const { width, height } = useWindowSize();

  const [progress, setProgress] = useState(67);

  const { ToastComponent, trigger } = useToast();
  const handleProgress = (value) => {
    let val = parseInt(value);
    if (isNaN(val)) {
      setProgress(0);
      return;
    }

    if (val > 100) {
      setProgress(100);
    } else if (val < 0) {
      setProgress(0);
    } else {
      setProgress(val)
    }
  }
  return (
    <div className='App'>
      {/* Header */}
      <div className='header'>
        <h1 className='title'>React Components & Hooks Library</h1>
      </div>

      {/* Container */}
      <div className='App-container'>

        {/* Component List */}
        <div className='App-container-list'>
          <h3>Components List</h3>
          <ul>
            {APPS_LIST.map((app, index) => (
              <li
                key={index} onClick={() => setActiveIndex(index)}
                style={{
                  background: index === activeIndex ? "#0071e3" : "#ffffff",
                  color: index === activeIndex ? "#ffffff" : "#1d1d1f",
                  borderColor: index === activeIndex ? "#0071e3" : "#d2d2d7"
                }}>
                {app.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Component Body */}
        <div className='App-container-content'>
          <h3>{activeIndex+1}. {component.name}</h3>
          {component.component}
          {/* 
          <Accordion />

          <h5>16. Progress Bar</h5>
          <input
            type='number'
            placeholder='Enter Progress Bar Value'
            min={1}
            max={100}
            step={1}
            onChange={(e) => handleProgress(e.target.value)}
            value={progress}
            style={{ width: "200px", marginBottom: "8px" }}
          />
          <ProgressBar value={progress} />

          <h5>15. Toast</h5>
          <button onClick={() => {
            trigger("success", "This is a success Message")
          }}>
            Show Success
          </button>
          <button onClick={() => {
            trigger("error", "This is an error Message")
          }}>
            Show Error
          </button>
          {ToastComponent}

          <h5>11. useScrollPosition hook</h5>
          <p>Scroll Position - {scrollPositon}</p>

          <h5>10. useOnlineStatus hook</h5>
          <p>Is system online? {online}</p>

          <h5>9. useCopied hook</h5>
          <input type='text' onChange={(e) => setText(e.target.value)} />
          <button onClick={() => copyToClipboard(text)}>{copied ? "Copied!" : "Copy to Clipboard"}</button>

          <h5>8. useWindowSize hook</h5>
          <p>Window Width: {width} & window height: {height}</p>
*/}
        </div>
      </div>
    </div>
  )
}

export default App
