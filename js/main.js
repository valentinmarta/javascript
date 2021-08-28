// cuando ponemos el mouse sobre la info aparece
$(".informacion").mouseover(() => {
    $(".aparece").fadeIn(1500)
})

//cuando ponemos el mouse sobre el footer aparece la info de contacto
$("footer").mouseover(() => {
    $(".footer").fadeIn(1500)
})

//el titulo aparece lentamente
setTimeout(() => {
    $(".titulo1").fadeIn(1500)
}, 400)