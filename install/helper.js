window.EagerSisyphusHelper = function(options) {
  if (!document.querySelectorAll) return;

  if (options.apply === 'all') {
    var forms = document.querySelectorAll('form');
    if (!forms) return;

  } else if (options.apply === 'specified') {
    var forms = [];

    for (var i = 0; i < options.forms.length; i++) {
      var els = document.querySelectorAll(options.forms[i]);
      if (els) {
        forms.push.apply(forms, els);
      }
    }
  }

  for (var i = 0; i < forms.length; i++) {
    if (forms[i].getAttribute('name') === null){
      // Sisyphus uses the name to differentiate between forms
      forms[i].setAttribute('name', 'sisyphus-form-' + (i + 1))
    }

    jQuery(forms[i]).sisyphus();
  }
}
