Donee.Info = React.createClass({
  getInitialState: function() {
    return { 
      showResults: false,
      moreLess: 'More'
    };
  },
  onClick: function() {
    this.setState({
      showResults: !this.state.showResults,
      moreLess: (this.state.moreLess == 'More' ? 'Less' : 'More')
    });
  },
  render: function() {
    return (
      <div className="info">
        <p onClick={this.onClick}>Meet Jorge. He needs your help. He has been homeless since he was 19. <a href="#">{this.state.moreLess}.</a></p>
        <Donee.MoreInfo show={this.state.showResults} />
      </div>
    );
  }
});

Donee.MoreInfo = React.createClass({
  render: function () {
    return (
      <div className={this.props.show ? '' : 'hidden'}>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
      </div>
    );
  }
});
