/*var toastGroupTemplate = document.querySelector('#toastGroup');
//toastGroupTemplate.showToast = function() {
  document.querySelector('#toast').show();
}*/

  var tabs = document.querySelector('paper-tabs');
  var list = document.querySelector('core-pages');

  tabs.addEventListener('core-select', function() {
      list.selected = tabs.selected;
  });
