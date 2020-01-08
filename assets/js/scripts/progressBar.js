$(".progress-bar").each(function(i)
{
  $(this).animate({
    width: $(this).attr('aria-valuenow') + '%'
  });

  $(this).prop('Counter', 0).animate({
    Counter: $(this).attr('aria-valuenow')
  }, {
    duration: 5000,
    step: function(now)
    {
      $(this).closest(".progress-wrapper")
          .find(".progressbar-number")
          .text(Math.ceil(now));
    }
  });
});