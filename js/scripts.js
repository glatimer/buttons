$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!<li>");
    $("ul#webpage").prepend("<li>Why hello there!");
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!<li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!<li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.");
  });
});
