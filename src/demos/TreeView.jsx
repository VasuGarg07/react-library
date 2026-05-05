import React from 'react'
import TreeNode from '../components/TreeNode';

const treeStructure = [
  {
    key: "src",
    name: "src",
    children: [
      { key: "main", name: "Main.jsx" },
      {
        key: "hooks", name: "Hooks", children: [
          { key: "useDebounce", name: "useDebounce.js" },
          { key: "useInfiniteScroll", name: "useInfiniteScroll.js" },
          { key: "useLocalStorage", name: "useLocalStorage.js" },
          { key: "useThrottle", name: "useThrottle.js" },
        ]
      },
      {
        key: "components", name: "Components", children: [
          { key: "accordion", name: "Accordion.jsx" },
          { key: "carousel", name: "Carousel.jsx" },
          { key: "dialog", name: "Dialog.jsx" },
        ]
      },
      {
        key: "pages", name: "Pages", children: [
          { key: "virtual-list", name: "VirtualList.jsx" },
          { key: "star-rating", name: "StarRating.jsx" },
        ]
      },
      { key: "app", name: "App.jsx" },
      { key: "index", name: "index.css" },
    ]
  }
];

const TreeView = () => {
  return (
    <>
      {treeStructure.map(node => (
        <TreeNode key={node.key} node={node} level={0} />
      ))}
    </>
  )
}

export default TreeView