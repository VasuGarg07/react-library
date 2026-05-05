import React, { useState } from 'react';
import "./TreeNode.css"

const TreeNode = ({ node, level }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isFolder = node.hasOwnProperty('children') && Array.isArray(node.children);

    const getIcon = () => {
        if (!isFolder) return "📄";
        return isExpanded ? "📂" : "📁"
    }

    if (node.children) {
        node.children.sort((a, b) => {
            if(!a.children && b.children) return 1;
            if (a.children && !b.children) return -1;

            return a.key.localeCompare(b.key)
        })
    }

    return (
        <>
            <div
                className='tree-node'
                onClick={() => setIsExpanded(prev => !prev)}
                style={{
                    marginLeft: level * 24
                }}
            >
                <span>{getIcon()}</span>
                <span>{node.name}</span>
            </div>
            {node.children && isExpanded && node.children.map(node => (
                <TreeNode key={node.key} node={node} level={level + 1} />
            ))}
        </>

    )
}

export default TreeNode