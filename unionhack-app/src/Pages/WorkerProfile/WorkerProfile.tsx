import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Nav } from "../../Nav";
import "./WorkerProfile.css";

type Conversation = {
  id: string;
  date: string;
  organizer: string;
};

type Worker = {
  id: string;
  name: string;
  conversations: Conversation[];
  score: number;
  team: string;
  title: string;
};

type Params = {
  id: string;
};

interface Props extends RouteComponentProps<Params> {}

interface State {
  worker: Worker;
}

class WorkerDashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      worker: {
        id: this.props.match.params.id,
        name: "Joe Worker",
        score: 3,
        team: "Growth",
        title: "Software Engineer",
        conversations: [
          {
            id: "1",
            date: "1/15/20",
            organizer: "Jane A",
          },
          {
            id: "2",
            date: "3/15/20",
            organizer: "Bernie Sanders",
          },
          {
            id: "3",
            date: "7/26/20",
            organizer: "César Estrada Chávez",
          },
        ],
      },
    };
  }

  render() {
    const { conversations, id, name, score, title } = this.state.worker;

    return (
      <div className="worker-profile">
        <Nav title="Worker Details" />
        <section className="worker-header">
          <div>
            <div className="mini-title">Overview</div>
            <div className="worker-name">{name}</div>
            <div className="worker-level">Core Member</div>
          </div>
          <div className="worker-header-score">
            <div className="mini-title">Readiness Score</div>
            <div className="worker-score">{score}</div>
          </div>
        </section>

        <section className="worker-bio">
          <div className="worker-bio-data">
            <div className="mini-title">Full Name</div>
            <div className="worker-bio-info">{name}</div>
          </div>
          <div className="worker-bio-data">
            <div className="mini-title">Time With Company</div>
            <div className="worker-bio-info">3 years</div>
          </div>
          <div className="worker-bio-data">
            <div className="mini-title">Title</div>
            <div className="worker-bio-info">{title}</div>
          </div>
          <div className="worker-bio-data">
            <div className="mini-title">Team</div>
            <div className="worker-bio-info">Growth</div>
          </div>
          <div className="worker-bio-data">
            <div className="mini-title">DOB</div>
            <div className="worker-bio-info">July 26, 1985</div>
          </div>
          <div className="worker-bio-data">
            <div className="mini-title">Experience</div>
            <div className="worker-bio-info">10 years in industry</div>
          </div>
        </section>

        <section className="links">
          <Link to={`/worker/${id}/conversations/${id}`}>
            <span className="link-count">{conversations.length}</span>
            <span>Converstions</span>
            <span className="link-arrow">&gt;</span>
          </Link>
          <Link to={`/worker/${id}/structure-tests/${id}`}>
            <span className="link-count">5</span>
            <span>Structure Tests</span>
            <span className="link-arrow">&gt;</span>
          </Link>
        </section>
      </div>
    );
  }
}

export default WorkerDashboard;
