import React from 'react';
import {
  Link
} from 'react-router-dom';
// import './App.css';

type Campaign = {
  id: number,
  name: string,
}

interface DashboardProps {
}

interface DashboardState {
  campaigns: Campaign[]
}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: any) {
    super(props);

    this.state = {
      campaigns: [
        {
          id: 1,
          name: 'Campaign A',
        },
        {
          id: 2,
          name: 'Campaign B',
        },
        {
          id: 3,
          name: 'Campaign C',
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        Your campaigns:
        <ul>
          {this.state.campaigns.map((campaign) => {
            return (
              <li key={campaign.id}>
                <Link to={`/campaign/${campaign.id}`}>{campaign.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
  
    );
  }
}

export default Dashboard;