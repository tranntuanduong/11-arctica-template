$(function(){
    filterItems = $('.iso-list').isotope({
        itemSelector: '.iso-item',
        layoutMode: 'fitRows'
    })

    $('.menus-filter-navigation-btn').click(function() {
        $('.menus-filter-navigation-btn').removeClass('menus-filter-navigation-btn--active')
        $(this).addClass('menus-filter-navigation-btn--active')
        data = $(this).data('filter'); 
        filterItems.isotope({ filter:  data })
        return false ;      
    });
})  

// Shop detail JS
var reviewSelector = document.querySelectorAll('.shop-detail__content-review .reviews-title__item');
var elementShowList = document.querySelectorAll('.hide-show-element');
for (var i = 0; i < reviewSelector.length; i++) {
    
    reviewSelector[i].onclick = function () {
        // for btn
        console.log(this.getAttribute('data-type'))
        for (var i = 0; i < reviewSelector.length; i++) {
            reviewSelector[i].classList.remove('reviews-title__item--active');
        }
        this.classList.add('reviews-title__item--active');
        
        // for content
        for (var i = 0; i < elementShowList.length; i++) {
            elementShowList[i].classList.remove('shop-detail__content-review--active');
        }
        var elementShow = document.querySelector(this.getAttribute('data-type'));
        elementShow.classList.add('shop-detail__content-review--active');
    }
}

// Shop detail: rating
var ratingElement = document.querySelectorAll('.send-comment__input-rating');
for (var i = 0; i < ratingElement.length; i++) {
    ratingElement[i].onclick = function () {
        for (var i = 0; i < ratingElement.length; i++) {
            ratingElement[i].classList.remove('send-comment__input-rating--active');
        }
        this.classList.add('send-comment__input-rating--active');
    }
}