import React, { act, useState } from 'react'

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
    <>
      <div style={{
        display:"flex",
        alignItems:"center",
        gap:"8px"
      }}>
        {data.map(item => (
          <button key={item.id}
            onClick={() => setActive(item.id)}
            style={{backgroundClip: active === item.id ? "#4d95cf": "#fff"}}>
              {item.label}
          </button>
        ))}
      </div>

      {data.map(item => (
          <p key={item.id}
            style={{display: active === item.id ? "block": "none"}}>
              {item.content}
          </p>
        ))}
    </>
  )
}

export default Tabs