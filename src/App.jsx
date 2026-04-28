import { act, useRef, useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage';
import { useSessionStorage } from './hooks/useSessionStorage';
import { useDebounce } from './hooks/useDebounce';
import { useThrottle } from './hooks/useThrottle';
import Modal from './Modal';
import { useWindowSize } from './hooks/useWindowSize';
import { useCopyToClipboard } from './hooks/useCopyToClipboard';
import { useCopied } from './hooks/useCopied';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { useScrollPosition } from './hooks/useScrollPosition';
import StarRating from './components/StarRating';
import Tabs from './components/Tabs';
import Typeahead from './components/Typeahead';
import { useToast } from './components/useToast';
import ProgressBar from './components/ProgressBar';
import Accordion from './components/Accordion';
import "./App.css"
import APPS_LIST from './ComponentsList';

function App() {
  const [activeIndex, setActiveIndex] = useLocalStorage("activeIndex",0);
  const component = APPS_LIST[activeIndex];

  
  const [text2, setText2] = useState("");
  const throttledFn = useThrottle(val => setText2(val), 500);
  const [open, setOpen] = useState(false);

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

          <h5>14. Typeahead search</h5>
          <Typeahead />

          <h5>13. Tabs</h5>
          <Tabs />

          <h5>12. Star Rating</h5>
          <StarRating initial={5} total={10} />

          <h5>11. useScrollPosition hook</h5>
          <p>Scroll Position - {scrollPositon}</p>

          <h5>10. useOnlineStatus hook</h5>
          <p>Is system online? {online}</p>

          <h5>9. useCopied hook</h5>
          <input type='text' onChange={(e) => setText(e.target.value)} />
          <button onClick={() => copyToClipboard(text)}>{copied ? "Copied!" : "Copy to Clipboard"}</button>

          <h5>8. useWindowSize hook</h5>
          <p>Window Width: {width} & window height: {height}</p>

          <h5>7. useClickOutside hook</h5>
          <button onClick={() => handleModalOpen(true)}>Open Modal</button>
          {open && <Modal onClose={() => handleModalOpen(false)} />}

          <h5>6. useThrottle hook</h5>
          <input type='text' onChange={(e) => throttledFn(e.target.value)} />

          <h5>5. useSessionStorage hook</h5>
          <p>Current Value: {sessionValue}</p>
          <button onClick={() => setSessionValue((prev) => prev + 1)}>Update</button>

          <h3>Throttled Input - {text2}</h3>*/}
        </div>
      </div>
    </div>
  )
}

export default App
