$(function () {
    $('#link_reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    $('#link_login').on('click', function () {
        $('.reg-box').hide()
        $('.login-box').show()
    })
})



$('#form_reg').on('submit', function (e) {
    e.preventDefault()
    var data = {
        username: $('#form_reg [name=username]').val(),
        password: $('#form——reg[name=password]').val()
    }

})