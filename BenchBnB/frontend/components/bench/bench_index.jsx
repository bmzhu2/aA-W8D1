import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    return (
      <ul>
        {this.props.benches.map( bench => {
          return <BenchIndexItem key={bench.id} description={bench.description}/>
        })}
      </ul>
    )
  }
}

export default BenchIndex;