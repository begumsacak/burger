$(".devouredBtn").on ("click", function(event){
    event.preventDefault()
    // button has the attribute data-id
    var id = $(this).attr("data-id")
$.ajax ({
    url: "/api/burgers/" + id, 
    // updates the existing info
    method: "PUT"
}).then(function(results){
    location.reload()
})

})