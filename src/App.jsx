import "./App.css";
import APPS_LIST from './ComponentsList';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [activeIndex, setActiveIndex] = useLocalStorage("activeIndex", 0);
  const component = APPS_LIST[activeIndex];
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
                {(index + 1) + ". " + app.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Component Body */}
        <div className='App-container-content'>
          <h3>{activeIndex + 1}. {component.name}</h3>
          {component.component}
        </div>
      </div>
    </div>
  )
}

export default App
