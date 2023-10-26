// Import deps
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Import components
import { TeamsList } from './teams-list'

// Import styles
import '../../src/css/teams.css'

// Create Teams component
export const Teams = () => {
  // Prepare states
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch all teams on initial render
  useEffect(() => {
    fetchTeams()
  }, [])

  // Fetch all teams
  const fetchTeams = async () => {
    // Send GET request to 'teams/all' endpoint
    axios
      .get('http://localhost:4001/teams/all')
      .then(response => {
        // Update the teams state
        setTeams(response.data)

        // Update loading state
        setLoading(false)
      })
      .catch(error => console.error(`There was an error retrieving the team list: ${error}`))
  }

  return (
    <div className="team-list-wrapper">
      {/* Render team list component */}
      <TeamsList teams={teams} loading={loading} />
    </div>
  )
}