(function() {
  var PaymentButton = React.createClass({
    componentDidMount: function() {
      var handler = this.stripe_handler;
      $(window).on('popstate', function() {
        handler.close();
      });
    },
    stripe_handler: StripeCheckout.configure({
      key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
      locale: 'auto',
      token: function(token) {
        console.log('Token: ' + token);
      }
    }),
    handle_click: function (e) {
      this.stripe_handler.open({
        name: 'Stripe.com',
        description: '2 widgets',
        amount: 2000
      });
      e.preventDefault();
    },
    render: function() {
      var children = [ React.createElement('strong', {key: 'strong'}, this.props.title) ],
          attributes = $.extend({id: 'payment_button', onClick: this.handle_click}, this.props.attributes);

      if (this.props.subtitle) {
        children.push(React.createElement('br', {key: 'break'}));
        children.push(React.createElement('span', {key: 'span'}, this.props.subtitle));
      }

      return React.createElement('a', attributes, children);
    }
  });

  PJ.register('payment_button', PaymentButton);
})();
