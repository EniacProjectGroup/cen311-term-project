$(function () {
  // jQuery UI Button Widget
  $("#submitButton").button();

  // Tooltip Widget: input and textare added tooltip.
  $("#contactForm input, #contactForm textarea").tooltip({
    position: {
      my: "left+15 center",
      at: "right center",
    },
  });

  // Form validation
  $("#contactForm").validate({
    submitHandler: function (form) {
      form.submit();
    },
  });
});
