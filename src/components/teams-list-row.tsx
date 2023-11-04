// Import deps
import React from 'react'

// Create interfaces
interface TeamsListRowUI {
  position: number;
  team: {
    id: number;
    name: string;
    category: string;
    modality: string;
    members: string;
    description: string;
    classes: string;
  }
}

// Create TeamListRow component
export const TeamsListRow = (props: TeamsListRowUI) => (
  <tr className="table-row">
    <td className="table-item">
      {props.team.id}
    </td>

    <td className="table-item">
      {props.team.name}
    </td>

    <td className="table-item">
      {props.team.category}
    </td>

    <td className="table-item">
      {props.team.members}
    </td>

    <td className="table-item">
      {props.team.modality}
    </td>

    <td className="table-item">
      {props.team.description}
    </td>

    <td className="table-item">
      {props.team.classes}
    </td>
  </tr>
)