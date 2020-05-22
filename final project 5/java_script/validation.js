
// Validates entries for Apply Form
$("#applyForm").validate({
    rules: {
        firstname: {
            required: true,
        },

        lastname: {
            required: true,
        },

        email: {
            required: true,
            email: true
        },

        email_confirm: {
            required: true,
            email: true,
            equalTo: "#email",
            equalTo: email
        },
        tel: {
            digits: true,
            rangelength: [9, 9],
        }
    }
});




