import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Nav } from "../../../Nav";
import "./Conversations.css";

type Organizer = {
  id: number;
  name: string;
}

type Conversation = {
  id: number;
  date: string;
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
        date: "Jan 18th, 2021",
        organizer: {
          id: 1,
          name: 'Jane McAlevey'
        },
      },
      {
        id: 2,
        date: "Feb 18th, 2021",
        organizer: {
          id: 1,
          name: 'Jane McAlevey'
        },
      },
      {
        id: 3,
        date: "June 18th, 2021",
        organizer: {
          id: 1,
          name: 'Jane McAlevey'
        },
      }]
    };
  }

  render() {

    return (
      <div>
        <Nav title="Conversations" />

      </div>
    );
  }
}

export default WorkerDashboard;
