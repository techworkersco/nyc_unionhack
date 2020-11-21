import React from 'react';
import * as _ from "lodash";
import {
  Link, RouteComponentProps
} from 'react-router-dom';

import "./WorkersTable.css"
import { Nav } from "../../Nav";

const styles = {
  table: {
    paddingLeft: "10px",
    paddingTop: "10px",
    border: "0px",
  }, 
  td: {
    width: "300px",
  },
  oddRow: {
    backgroundColor: "#161616",
  },
}

type Worker = {
  id: number,
  name: string,
  team: string,
  engagement_level: number,
  conversation_count: number,
}

type WorkerByType = {
  [key: string]: Worker[];
}

type Params = {
  id: string;
}

interface Props extends RouteComponentProps<Params> {
}

interface State {
  selectedTeam: string,
  teams: String[],
  workers: Worker[],
  knownWorkersCount: number,
  knownTeamsCount: number,
}

class WorkerDashboard extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    const workers: Worker[] = [{
        id: 1, 
        name: "Joe Worker",
        engagement_level: 3,
        conversation_count: 3,
        team: "Marketing",
      },
      {
        id: 2, 
        name: "Sally Worker",
        engagement_level: 3,
        conversation_count: 1,
        team: "Marketing",
      },
      {
        id: 3, 
        name: "Ashley Worker",
        engagement_level: 3,
        conversation_count: 2,
        team: "Design",
      },
      ]
    
    const teams =_.uniq(_.map(workers, 'team'));

    this.state = {
      workers, 
      selectedTeam: '',
      teams, 
      knownWorkersCount: workers.length,
      knownTeamsCount: teams.length,
    }
  }

  render() {
    const { workers, selectedTeam, teams, knownTeamsCount, knownWorkersCount } = this.state;

    // const workersByTeam: WorkerByType = _.groupBy(workers, 'team');

    return (
      <div className="worker-list">
        <Nav title="Worker List" />

        <section className="worker-list-header">
          <div className="worker-metadata">{knownWorkersCount} Known Workers</div>
          <div className="worker-metadata">{knownTeamsCount} Teams</div>
        </section>

        <table className="worker-table" style={styles.table}>
            <tbody>
              <tr className="worker-table-row" key="header">
                 <td></td>
                 <td className="worker-table-header">Name</td>
                 <td className="worker-table-header">Number of Conversations</td>
                 <td></td>
              </tr> 
              {workers.map( worker => {
                return(
                    <tr className="worker-table-row" style={worker.id % 2 > 0 ? styles.oddRow : {}}  key={worker.id}>
                      <td className="worker-table-score">{worker.engagement_level}</td>
                      <td style={styles.td}>{worker.name}</td>
                      <td style={styles.td}>{worker.conversation_count}</td>
                      <td style={styles.td}><Link to={`/worker/${worker.id}`}><span className="link-arrow">&gt;</span></Link></td>
                    </tr>
                );
              })}
            </tbody>
        </table>
          
      </div>
    );
  }
}

export default WorkerDashboard;