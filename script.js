$(document).ready(function () {
  $("#resizingSelectTag").change(function () {
    $("#widthTempOption").html($("#resizingSelectTag option:selected").text());
    $(this).width($("#selectTagWidth").width());
  });
});

$(document).ready(function () {
  $("#rresizingSelectTag").change(function () {
    $("#wwidthTempOption").html(
      $("#rresizingSelectTag option:selected").text()
    );
    $(this).width($("#sselectTagWidth").width());
  });
});

$(document).ready(function () {
    $("#rrresizingSelectTag").change(function () {
      $("#wwwidthTempOption").html(
        $("#rrresizingSelectTag option:selected").text()
      );
      $(this).width($("#ssselectTagWidth").width());
    });
  });
  
