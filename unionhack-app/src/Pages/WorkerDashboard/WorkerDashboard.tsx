import React from 'react';
import {
  RouteComponentProps
} from 'react-router-dom';

type Conversation = {
  id: number,
  date: string,
  organizer: string
}

type Params = {
  id: string;
}

interface Props extends RouteComponentProps<Params> {
}

interface State {
  name: string,
  conversations: Conversation[]
}

class WorkerDashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: 'Joe Worker',
      conversations: [
        {
          id: 1,
          date: '1/15/20',
          organizer: 'Jane A'
        },
        {
          id: 2,
          date: '3/15/20',
          organizer: 'Bernie Sanders'
        },
        {
          id: 3,
          date: '7/26/20',
          organizer: 'César Estrada Chávez'
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Worker Dashboard Page</h1>
        <div>name: {this.state.name}</div>

        conversations: 
        <ul>
        {this.state.conversations.map(conversation => {
          return (
            <li key={conversation.id}>
              <div>Date: {conversation.date}</div>
              <div>Met: {conversation.organizer}</div>
            </li>
          );
        })}
        </ul>
      </div>
  
    );
  }
}

export default WorkerDashboard;