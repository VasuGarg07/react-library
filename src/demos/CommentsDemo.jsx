import React from 'react'
import CommentsProvider from '../components/CommentsContext'
import CommentsPanel from '../components/CommentsPanel'

const CommentsDemo = () => {
  return (
    <CommentsProvider>
        <CommentsPanel />
    </CommentsProvider>
  )
}

export default CommentsDemo