import React from 'react';
import {
  Link
} from 'react-router-dom';
import {Nav} from '../../Nav';
import dashboard from '../../assets/dashboard.png'
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
      <>
        <Nav title="Campaign A" />
      </>
    );
  }
}

export default Dashboard;
