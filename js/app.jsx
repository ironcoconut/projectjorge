var routes = {
  '/': function(){
    React.render(
      <Index url="mock_data/donee.json" />, 
      document.getElementById("bodycontainer")
    );
  },
  '/faq': function(){
    React.render(
      <Index url="mock_data/faq.json" />, 
      document.getElementById("bodycontainer")
    );
  }
};

var router = Router(routes)
router.init('/');
