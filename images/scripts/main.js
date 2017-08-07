$(document).ready(function() {

    "use strict";

    // Возвращает функцию, которая не будет срабатывать, пока продолжает вызываться.
    // Она сработает только один раз через N миллисекунд после последнего вызова.
    // Если ей передан аргумент `immediate`, то она будет вызвана один раз сразу после
    // первого запуска.
    function debounce(func, wait, immediate) {

        var timeout;

        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };

            var callNow = immediate && !timeout;

            clearTimeout(timeout);
            timeout = setTimeout(later, wait);

            if (callNow) func.apply(context, args);
        };
    };

    /**
     * определение версии IE 10 или 11
     *
     * @returns {Number} 10, 11, или 0 если это не IE
     */
    function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        // If IE, return version number.
        if (Idx > 0)
            return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

        // If IE 11 then look for Updated user agent string.
        else if ( !! navigator.userAgent.match(/Trident\/7\./))
            return 11;

        else
            return 0; //It is not IE
    }

    /**
     * определение существования элемента на странице
     */
    $.exists = function(selector) {
        return ($(selector).length > 0);
    }

});