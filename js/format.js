PJ.register('Format',{
  register: function(name, element) {
    if (this[name]) throw "Element already exists: " + name;
    this[name] = element;
  }
});
