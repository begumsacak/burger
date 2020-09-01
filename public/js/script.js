$(".devouredBtn").on("click", function (event) {
    event.preventDefault()
    // button has the attribute data-id
    var id = $(this).attr("data-id")
    $.ajax({
        url: "/api/burgers/" + id,
        // updates the existing info
        method: "PUT"
    }).then(function (results) {
        location.reload()
    })

})

$(".delete-burger").on("click", function (event) {
    event.preventDefault()
    var id = $(this).attr("data-id");

    // Send the DELETE request.
    $.ajax({
        url: "/api/burgers/" + id,
        method: "DELETE",
        data: { "id": id },
    }).then(function (results) {
        console.log("successfully deleted")
        // Reload the page to get the updated list
    })
});

