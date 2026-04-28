import React, { Fragment, useState } from 'react'

const tabsData = [
  {
    id: "html",
    label: "HTML",
    content: "This is an HTML content div"
  },
  {
    id: "css",
    label: "CSS",
    content: "This is an CSS content div"
  },
  {
    id: "js",
    label: "Javascript",
    content: "This is an Javascript content div"
  },
];

const Accordion = ({ data = tabsData }) => {
  const [active, setActive] = useState(data[0].id);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "8px",
      flexDirection: "column",
      padding: "4px",
      borderRadius: "4px",
      border: "2px solid #585858"
    }}>
      {data.map(item => (
        <Fragment key={item.id}>
          <button
            onClick={() => setActive(item.id)}
            style={{ backgroundClip: active === item.id ? "#4d95cf" : "#fff" }}>
            {item.label}
          </button>
          <p
            style={{ display: active === item.id ? "block" : "none" }}>
            {item.content}
          </p>
        </Fragment>
      ))}
    </div>
  )
}

export default Accordion