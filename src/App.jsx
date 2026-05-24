import { Suspense, useState } from "react";
import "./App.css";
import APPS_LIST, { CATEGORIES } from './ComponentsList';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
    const [activeIndex, setActiveIndex] = useLocalStorage("activeIndex", 0);
    const [collapsed, setCollapsed] = useState({});

    const safeIndex = activeIndex >= 0 && activeIndex < APPS_LIST.length ? activeIndex : 0;
    const ActiveComponent = APPS_LIST[safeIndex].component;

    const toggleSection = (category) => {
        setCollapsed(prev => ({ ...prev, [category]: !prev[category] }));
    }

    return (
        <div className='App'>
            <div className='header'>
                <h1 className='title'>React Components & Hooks Library</h1>
                <a href="https://github.com/VasuGarg07/react-library" target="_blank" rel="noopener noreferrer" className="github-link">
                    <svg height="18" width="18" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    GitHub
                </a>
            </div>

            <div className='App-container'>
                <div className='App-container-list'>
                    {CATEGORIES.map(category => {
                        const items = APPS_LIST
                            .map((app, i) => ({ ...app, index: i }))
                            .filter(app => app.category === category);

                        return (
                            <div key={category} className="sidebar-group">
                                <button className="sidebar-category-label" onClick={() => toggleSection(category)}>
                                    <span className={`chevron ${collapsed[category] ? '' : 'open'}`}>›</span>
                                    {category}
                                    <span className="sidebar-count">{items.length}</span>
                                </button>
                                {!collapsed[category] && (
                                    <ul>
                                        {items.map(({ name, index }) => (
                                            <li
                                                key={index}
                                                onClick={() => setActiveIndex(index)}
                                                className={index === safeIndex ? 'active' : ''}>
                                                {name}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className='App-container-content'>
                    <Suspense fallback={<p style={{ color: '#6e6e73' }}>Loading...</p>}>
                        <ActiveComponent />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default App;
