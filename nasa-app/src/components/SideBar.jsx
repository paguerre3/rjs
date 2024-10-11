import React from 'react'

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="bgOverlay"></div>
        <div className="sidebarContents">
            <h2>Mars Lands</h2>
            <div className="descriptionContainer">
                <p className="descriptionTitle">Title</p>
                <p>Explataion</p>
            </div>
            <button>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
  )
}
