// Import deps
import React from 'react'

// Import components
import { TeamsListRow } from './teams-list-row'

// Import styles
import '../../src/css/teams-list.css'

// Create interfaces
interface TeamUI {
    id: number;
    name: string;
    category: string;
    modality: string;
    members: string;
    description: string;
    classes: string;
}

interface TeamsListUI {
  teams: TeamUI[];
  loading: boolean;
}

// Create TeamsList component
export const TeamsList = (props: TeamsListUI) => {
  // Show loading message
  if (props.loading) return <p>Leaderboard table is loading...</p>

  return (
    <table className="table">
        <thead>
          <tr>
            <th className="table-head-item" />

            <th className="table-head-item">Name</th>

            <th className="table-head-item">Category</th>

            <th className="table-head-item">Members</th>

            <th className="table-head-item">Modality</th>

            <th className="table-head-item">Description</th>

            <th className="table-head-item">Classes</th>

            <th className="table-head-item" />
          </tr>
        </thead>

        <tbody className="table-body">
          {props.teams.length > 0 ? (
            props.teams.map((team: TeamUI, idx) => (
              <TeamsListRow
                team={team}
                key={team.id}
                position={idx + 1}
              />
              )
            )
          ) : (
            <tr className="table-row">
              <td className="table-item" style={{ textAlign: 'center' }} colSpan={6}>There are no teams to show. Create one!</td>
            </tr>
          )
        }
        </tbody>
    </table>
  )
}