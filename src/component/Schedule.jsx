import React, { useEffect } from 'react'

function Schedule() {
    const storedTeams = JSON.parse(localStorage.getItem("teams"));
    console.log(storedTeams)
  return (
    <div>
        <div>
            <span>{storedTeams[0].teamName}</span>
            <span> win </span>
            <span> L </span>
            
        </div>
        <div>
            <span>team name</span>
            <span> win </span>
            <span> L </span>
            
        </div>
    </div>
  )
}

export default Schedule