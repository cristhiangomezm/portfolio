$('#contact').on('submit',function(e){
    //optional validation code here


    e.preventDefault();

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyYfoVY2NLeZwMl5XGHV5wWi5ED3i0_QwqpvUmNp9zNoYUu6z2l/exec",
        method: "POST",
        dataType: "json",
        data: $("#contact").serialize(),
        success: function(response) {
            
            console.log(response.result);
            if(response.result == "success") {
                $('#contact')[0].reset();
                alert('Thank you for contacting us.');
                return true;
            }
            else {
                console.log("First");
                alert("Something went wrong. Please try again.")
            }
        },
        error: function() {
            console.log("Second");
            alert("Something went wrong. Please try again.")
        }
    })
});