$().ready(function(){

    $("#applyForm").validate ({
        rules: { 
            firstname: "required",
            lastname: "required",
            confirm_email:{
                required:true,
                equalTo: "#email",
            },
            zipCode: {
                required: true,
                minlength: 5,
                maxlength: 20,
            },
            email: {
                required: true,
                email: true,
    }},
            messages: {
                firstname: "Please enter a valid name",
                lastname: "Please enter a valid name",

            confirm_email: {
                required: "valid email",
                equalTo: "emails need to match",
            },
            zipCode: {
                required: "Please put in a subject",
                length: "5-20 charachters please",
            },
           
        }
    }
    )
}
)