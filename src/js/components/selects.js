const selects = document.querySelectorAll('.form-field__select');
selects.forEach(el => {
  console.log(el)
  new Choices(el, {
    shouldSort: false,
    position: 'bottom',
    searchEnabled: false,
  });
})
