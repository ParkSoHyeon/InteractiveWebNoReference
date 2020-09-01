$('#email').on('keyup', function (e) {
    let email = this.value;
    let isRegx = (email.indexOf('@') !== -1) && email.indexOf('@') < email.indexOf('.');

    if (isRegx) {
        $(this.nextElementSibling).addClass('active')
    }
    else {
        $(this.nextElementSibling).removeClass('active')
    }
});