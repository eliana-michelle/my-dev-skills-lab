
$('#add-skill').on('click', function(){
  let newSkill = $('#user-input').val();
  $('table').append(`<tr><td><button class = "remove">X</button>${newSkill}</td></tr>`);
  $('#user-input').val("");
})

$('table').on('click', '.remove', function (){
  $(this).closest('tr').remove();
});
