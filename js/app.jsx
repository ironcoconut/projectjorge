var routes = {
  '/': function(){
    React.render(
      <Donee />, 
      document.getElementById("bodycontainer")
    );
  },
  '/faq': function(){
    React.render(
      <Faq />, 
      document.getElementById("bodycontainer")
    );
  }
};

var router = Router(routes)
router.init('/');
