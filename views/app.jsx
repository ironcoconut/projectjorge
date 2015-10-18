var BodyContainer = React.createClass({
  getInitialState: function() {
    return { 
      pictureIndex: 0,
      pictureUrls: [ 'assets/hamburger.jpg' ]
    };
  },
  componentDidMount: function() {
  },
  render: function() {
    var url = this.state.pictureUrls[this.state.pictureIndex];
    return (
      <div className="container">
        <Header />
        <Media />
        <Info />
        <Actions />
        <Footer />
      </div>
    );
  }
});

React.render(
  <BodyContainer />,
  document.getElementById('bodycontainer')
);
