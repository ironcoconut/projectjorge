var Actions = React.createClass({
  render: function() {
    return (
      <div className="actions">
        <a href="#" className="button tall blue">
          <div className="center">
            <strong>Donate</strong>
            <br />
            $1573 of $2000 per month raised
          </div>
        </a>
        <a href="#" className="button tall green">
          <div className="center">
            <strong>Support</strong>
            <br />
            Share Jorge's story.
          </div>
        </a>
        <a href="#" className="button short gray">
          <div className="center">Skip</div>
        </a>
      </div>
    );
  }
});
