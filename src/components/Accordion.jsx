import React, { Fragment, useState } from 'react'
import "./Accordion.css";

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
    <div className='accordion-container'>
      {data.map(item => (
        <Fragment key={item.id}>
          <button
            onClick={() => setActive(item.id)}
            className={`accordion-tab`}>
            {item.label}
          </button>
          <p className={`accordion-content ${active === item.id ? "show": "hide"}`}>
            {item.content}
          </p>
        </Fragment>
      ))}
    </div>
  )
}

export default Accordion