import React from 'react'

const QCard = (props) => {
  return (
    <div className="card">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">
          {props.title}
        </span>
        {props.children}
      </div>
    </div>
  )
}

export default QCard