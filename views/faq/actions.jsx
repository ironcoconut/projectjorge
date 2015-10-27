Faq.Actions = React.createClass({
  render: function() {
    return (
      <div className="actions">
        <a href="#/" className="button tall blue">
          <div className="center">
            <strong>Help Your Neighbors</strong>
            <br />
            <p>23 Homeless in Houston need help.</p>
          </div>
        </a>
        <a href="#" className="button tall green">
          <div className="center">
            <strong>Help Local Charities</strong>
            <br />
            <p>7 Houston Charities Need Volunteers.</p>
          </div>
        </a>
      </div>
    );
  }
});
