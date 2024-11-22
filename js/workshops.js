$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var title = button.data('title')
  let content = button.data('content')
  let instructor = button.data('instructor')
  let difficulty = button.data('difficulty')

  var modal = $(this)
  modal.find('.modal-title').text(title)
  modal.find('#modal-content').html(content)
  modal.find('#modal-instructor').text(instructor)
  modal.find('#modal-difficulty').text(difficulty)
})();
