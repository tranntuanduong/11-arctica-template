$(function(){
    filterItems = $('.grid__row').isotope({
        itemSelector: '.grid__col',
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
