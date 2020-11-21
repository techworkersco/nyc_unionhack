import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Nav } from "../../../Nav";
import "./Conversations.css";

type Organizer = {
  id: number;
  name: string;
}

type Worker = {
  id: string;
  name: string;
};

type Conversation = {
  id: number;
  date: string;
  score: number;
  worker: Worker;
  organizer: Organizer;
};

type Params = {
  id: string;
};

interface Props extends RouteComponentProps<Params> {}

interface State {
  conversations: Conversation[];
}

class WorkerDashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      conversations: [{
        id: 1,
        date: "June 18th, 2021",
        score: 3,
        organizer: {
          id: 1,
          name: 'Jane McAlevey'
        },
        worker: {
          id: '1',
          name: 'John Worker'
        }
      },
      {
        id: 2,
        date: "Feb 18th, 2021",
        score: 3,
        organizer: {
          id: 1,
          name: 'Jane McAlevey'
        },
        worker: {
          id: '1',
          name: 'John Worker'
        },
      },
      {
        id: 3,
        date: "Jan 18th, 2021",
        score: 3,
        organizer: {
          id: 1,
          name: 'Jane McAlevey'
        },
        worker: {
          id: '1',
          name: 'John Worker'
        },
      }]
    };
  }

  render() {
    return (
      <>
        <Nav title="Conversations" />
        <ul className='pt-4'>
          {this.state.conversations.map(conversation => {
            const { date, score, organizer, worker } = conversation;
            return (
              <li key={conversation.id}>
                <div className="conversation-header">
                  <div className="conversation-date">{date}</div>
                  <div className="conversation-score">{score}</div>
                </div>
                <div className="conversation-card">
                  <div>
                    <div className="conversation-card-title">Participants</div>
                    <ul className="conversation-participant-list">
                      <li>
                        <Link to={`/worker/${worker.id}`} className="conversation-participant">{worker.name}</Link>
                      </li>
                      <li>
                        <a href="" className="conversation-participant">{organizer.name}</a>
                      </li>
                    </ul>
                  </div>
                  <div className="conversation-notes">
                    <div className="conversation-card-title"><img src="/lock.svg" className="lock-icon" alt=""/> Private Notes</div>
                    <div className="conversation-notes-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default WorkerDashboard;
