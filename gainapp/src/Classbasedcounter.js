import { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      speacialCount: 5,
    };
    // this.increase = this.increase.bind(this);
    // this.decrease = this.decrease.bind(this);
  }
  //   increase() {
  //     this.setState({ speacialCount: this.state.speacialCount + 1 });
  //   }
  //   decrease() {
  //     this.setState({ speacialCount: this.state.speacialCount - 1 });
  //   }
//   increase = () => {
//     this.setState({ speacialCount: this.state.speacialCount + 1 });
//   };
//   decrease = () => {
//     this.setState({ speacialCount: this.state.speacialCount - 1 });
//   };

//
componentDidMount(){
    console.log("Component is Mounted");
}

componentWillMount(){
    console.log("Component unmounted");
}
increase=()=>{
    console.log(this);
    this.setState({specialCount: this.state.specialCount+1});
};
decrease=()=>{
    console.log(this);
    this.setState({specialCount: this.state.specialCount-1});
};


  render() {
    return (
      <div>
        <h1>{this.state.speacialCount}</h1>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    );
  }
}
export default Counter;