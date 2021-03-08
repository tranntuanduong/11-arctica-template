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
