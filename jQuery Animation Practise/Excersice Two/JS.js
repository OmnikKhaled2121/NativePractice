$('.img-item').click(function (e) {
    var imageSrc = $(e.target).attr('src')
    console.log(imageSrc)
    $('#mainImage').attr('src', imageSrc)

})