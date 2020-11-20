import React from 'react';
import {
  Link,
  RouteComponentProps
} from 'react-router-dom';

// import './App.css';

type Worker = {
  id: number;
  name: string;
}

type Params = {
  id: string;
}

interface Props extends RouteComponentProps<Params> {
}

interface State {
  name: string;
  workers: Worker[];
}

class Campaign extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: `Campaign ${props.match.params.id}`,
      workers: [
        {
          id: 1,
          name: 'Joe Plumber'
        },
        {
          id: 2,
          name: 'Jane Programmer'
        },
        {
          id: 3,
          name: 'Elliot Designer'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Campaign {this.props.match.params.id} Page</h1>
        workers: 
        <ul>
          {this.state.workers.map(worker => {
            return (
              <li key={worker.id}>
                <Link to={`/worker/${worker.id}`}>{worker.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
  
    );
  }
}

export default Campaign;