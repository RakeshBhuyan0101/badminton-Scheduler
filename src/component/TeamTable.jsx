import React from 'react';
import Schedule from './Schedule';

function TeamTable({ teams }) {  // Use 'teams' prop instead of 'teamCount'

    return (
        <div>
            <h3>Teams List</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Team Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Wins</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Losses</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>PCT</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>PF</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>PA</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>PD</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{team.teamName}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{team.win}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{team.los}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{team.PCT}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{team.PF}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{team.PA}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{team.PD}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Schedule />
        </div>
    );
}

export default TeamTable;