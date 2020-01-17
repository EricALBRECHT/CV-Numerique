function progressBar(){
$(".progress-bar").each(function(i)
{
  $(this).animate({
    width: $(this).attr('aria-valuenow') + '%'
  });

  $(this).prop('Counter', 0).animate({
    Counter: $(this).attr('aria-valuenow')
  }, {
    duration: 2000,
    step: function(now)
    {
      $(this).closest(".progress-bar")
          .find(".progressbar-number")
          .text(Math.ceil(now)+'%');
    }
  });
});
};