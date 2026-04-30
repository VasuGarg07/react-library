import React, { act, useState } from 'react';
import "./Tabs.css"

const tabsData = [
  {
    id: "html",
    label:"HTML",
    content:"This is an HTML content div"
  },
  {
    id: "css",
    label:"CSS",
    content:"This is an CSS content div"
  },
  {
    id: "js",
    label:"Javascript",
    content:"This is an Javascript content div"
  },
];

const Tabs = ({data = tabsData}) => {
  const [active, setActive] = useState(data[0].id);

  return (
    <div className='tabs-container'>
      <div className='tabs-list'>
        {data.map(item => (
          <button 
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`tab ${active === item.id ? "active" : ""}`}>
              {item.label}
          </button>
        ))}
      </div>

      <div className='panel-container'>
        {data.map(item => (
          <p key={item.id}
            style={{display: active === item.id ? "block": "none"}}>
              {item.content}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Tabs