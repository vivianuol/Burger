//??? \/ $(function(){}) 为什么要加上这行才work
$(function () {
    $(".devouredBurger").on("click", function(event) {
        var id = $(this).data("id");
    
        var nowdevourState = {
          devoured: 1
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: nowdevourState
        }).then(
          function() {
            console.log("changed devoured to", nowdevourState);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

    $("#submit").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log("clicked")

        var newBurger = {
            name: $("#burgerName").val().trim(),
            devoured: 0
        };

        console.log(newBurger)

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});