window.EagerSisyphusHelper = function(options){
  if (!document.querySelectorAll) return;

  if (options.all){
    var forms = document.querySelectorAll('form');
    if (!forms) return;
  } else {
    var forms = [];

    for (var i=0; i < options.forms.length; i++){
      var els = document.querySelectorAll(options.forms[i]);
      if (els){
        forms.push.apply(forms, els);
      }
    }
  }

  for (var i=0; i < forms.length; i++){
    jQuery(forms[i]).sisyphus();
  }
}
