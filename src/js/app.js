// doc ready
$(function (){
    // Initialize select2
    $('.select2-select').each(function (){
        const current = $(this);
        const options = {};
        options.placeholder = current.data('placeholder');
        if (current.hasClass('select2-select--tags')) {
            options.tags = true;
            options.tokenSeparators = [',', ' '];
            options.closeOnSelect = false;
        }
        current.select2(options);
    });
});