var options =  {
    onKeyPress: function(cep, e, field, options) {
        if (cep.indexOf('+') == 0){ 
            mask = '5340000000000';
        }
        else if (cep.indexOf('3') == 0){ 
            mask = '540000000000';
        }
        else if (cep.indexOf('8') == 0){  
            mask = '50000000000';
        }
        else if (cep.indexOf('0') == 0 || cep.indexOf('(') == 0){ 
            mask = '5000000000';
        } 
        for (var i = 0; i < cep.split(/[\s\-\(\)]/).length - 1; i++) {
           mask = mask + '0';
        }
        field.mask(mask, options);
    },
    translation: {
        '0': {pattern: /[\(\)\s\-\d]/},
        '5': {pattern: /[038+]/},
        '3': {pattern: /[3\-\s]/},
        '4': {pattern: /[8\-\s]/},
        '9': {pattern: /[\(\)\s\-\+\d]/}
    }
};  
elements = $('.slide-4 [name=phone]');
var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
function matches( node, selector ) {
    var nativeMatches = ( node.matches || node.msMatchesSelector );
    try {
        return( nativeMatches.call( node, selector ) );
    } catch ( error ) {
        return( false );
    }
}
if(iOS) {
    elements.on('input', function () {
        setTimeout(() => {  console.log(matches(this, ':-webkit-autofill'));
            if (matches(this, ':-webkit-autofill') && this.value[0] !== '+' && this.value[0] !== '3' && $('input[name=phone]')[0].value[0] !== '8' && this.value[0] !== '0' && this.value.length == 9) {
                this.value = '+380' + this.value;
            }
        }, 20);
    });
    elements.mask("9000000000000"); 
} else {
    elements.mask("50000000000000000", options); 
}