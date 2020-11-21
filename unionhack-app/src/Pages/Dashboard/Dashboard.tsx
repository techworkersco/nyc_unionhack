import React from 'react';
import {
  Link
} from 'react-router-dom';
import {Nav} from '../../Nav';
import {ProgressBar} from '../../Components/ProgressBar'
// import './App.css';

type StatusUnion = 'green' | 'blue' | 'purple' | 'yellow' | 'red' | 'grey'

type Conversation = {
  id: number,
  name: string,
  lastContact: string,
  status: StatusUnion,
}

type StructureTest = {
  id: number,
  title: string,
  date: string,
  adherenceRate: number,
  status: StatusUnion,
}

interface DashboardProps {
}

interface DashboardState {
  conversations: Conversation[],
  structureTests: StructureTest[]
}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: any) {
    super(props);

    this.state = {
      conversations: [
        {
          id: 1,
          name: 'John Doe',
          lastContact: 'Nov 21',
          status: 'green',
        },
        {
          id: 2,
          name: 'Jane Doe',
          lastContact: 'Nov 20',
          status: 'blue',
        },
        {
          id: 3,
          name: 'Hostile Worker',
          lastContact: 'Nov 20',
          status: 'red',
        }
      ],
      structureTests: [
        {
          id: 1,
          title: 'Mock Card Check',
          date: 'Nov 21',
          adherenceRate: 77,
          status: 'green',
        },
        {
          id: 2,
          title: 'Sign Letter',
          date: 'Nov 20',
          adherenceRate: 60,
          status: 'blue',
        },
        {
          id: 3,
          title: 'Wear Pin',
          date: 'Nov 20',
          adherenceRate: 44,
          status: 'red',
        }
      ]
    }
  }

  render() {
    return (
      <>
        <Nav title="Campaign A" />
        <div className='pb-3 pt-4'>
          <div className="p-3 mb-3">
            <h2 className='mb-3'>4 Workers away from Goal</h2>
            <ProgressBar className='mb-4' percentage={62} />

            <div className="flex mt-3">
              <div className="col">
                <div className="grey fsSmall uppercase mb-2">Current Support</div>
                <div className='fs1'>62%</div>
                <div className="grey">Union Card Signing</div>
              </div>
              <div className="col">
                <div className="grey fsSmall uppercase mb-2">Goal</div>
                <div className='grey fs1'>85%</div>
                <div className="grey">Union Card Signing</div>
              </div>
            </div>
          </div>

          {/* @TODO pull conversations/structure tests list from API */}
          <div className="mb-4">
            <div className='p-3 flex items-center'>
              <h3 className='col'>Recent Conversations</h3>
              <Link to="">View All</Link>
            </div>
            <ul>
              {this.state.conversations.map(conversation => (
                <li
                  className='bg-grey-2 p-3 flex'
                  key={conversation.id}>
                  <div className='col flex items-center'>
                    <span
                      className={`bg-${conversation.status} p-2 circle mr-2`}
                    />
                    {conversation.name}
                  </div>
                  <span className='o-5'>
                    {conversation.lastContact}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pb-4 mb-4">
            <div className='p-3 flex items-center'>
              <h3 className='col'>Structure Tests</h3>
              <Link to="">View All</Link>
            </div>
            <ul>
              {this.state.structureTests.map(test => (
                <li
                  className='bg-grey-2 p-3 flex'
                  key={test.id}>
                  <div className='col flex items-center'>
                    <span className={`${test.status} mr-2`}>
                      {test.adherenceRate}%
                    </span>
                    {test.title}
                  </div>
                  <span className='o-5'>
                    {test.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
