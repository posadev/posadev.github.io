
var mr = (function ($, window, document){
    "use strict";

    var mr         = {},
        components = {documentReady: [],documentReadyDeferred: [], windowLoad: [], windowLoadDeferred: []};


    $(document).ready(documentReady);
    $(window).on("load", windowLoad);

    function documentReady(context){
        
        context = typeof context === typeof undefined ? $ : context;
        components.documentReady.concat(components.documentReadyDeferred).forEach(function(component){
            component(context);
        });
    }

    function windowLoad(context){
        
        context = typeof context === "object" ? $ : context;
        components.windowLoad.concat(components.windowLoadDeferred).forEach(function(component){
           component(context);
        });
    }

    mr.setContext = function (contextSelector){
        var context = $;
        if(typeof contextSelector !== typeof undefined){
            return function(selector){
                return $(contextSelector).find(selector);
            };
        }
        return context;
    };

    mr.components    = components;
    mr.documentReady = documentReady;
    mr.windowLoad    = windowLoad;

    return mr;
}(jQuery, window, document));


//////////////// Utility Functions
mr = (function (mr, $, window, document){
    "use strict";
    mr.util = {};

    mr.util.requestAnimationFrame    = window.requestAnimationFrame || 
                                       window.mozRequestAnimationFrame || 
                                       window.webkitRequestAnimationFrame ||
                                       window.msRequestAnimationFrame;

    mr.util.documentReady = function($){
        var today = new Date();
        var year = today.getFullYear();
        $('.update-year').text(year);
    };

    mr.util.getURLParameter = function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [undefined, ""])[1].replace(/\+/g, '%20')) || null;
    };


    mr.util.capitaliseFirstLetter = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    mr.util.slugify = function(text, spacesOnly){
        if(typeof spacesOnly !== typeof undefined){
            return text.replace(/ +/g, '');
        }else{
            return text
                .toLowerCase()
                .replace(/[\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\]\[\}\{\'\"\;\\\:\?\/\>\<\.\,]+/g, '')
                .replace(/ +/g, '-');
        }
    };

    mr.util.sortChildrenByText = function(parentElement, reverse){
        var $parentElement = $(parentElement);
        var items          = $parentElement.children().get();
        var order          = -1;
        var order2         = 1;
        if(typeof reverse !== typeof undefined){order = 1; order2 = -1;}

        items.sort(function(a,b){
          var keyA = $(a).text();
          var keyB = $(b).text();

          if (keyA < keyB) return order;
          if (keyA > keyB) return order2;
          return 0;
        });
        
        // Append back into place
        $parentElement.empty();
        $(items).each(function(i, itm){
          $parentElement.append(itm);
        });
    };
    
    // Set data-src attribute of element from src to be restored later
    mr.util.idleSrc = function(context, selector){
        
            selector  = (typeof selector !== typeof undefined) ? selector : '';
            var elems = context.is(selector+'[src]') ? context : context.find(selector+'[src]');

        elems.each(function(index, elem){
            elem           = $(elem);
            var currentSrc = elem.attr('src'),
                dataSrc    = elem.attr('data-src');

            // If there is no data-src, save current source to it
            if(typeof dataSrc === typeof undefined){
                elem.attr('data-src', currentSrc);
            }

            // Clear the src attribute
            elem.attr('src', '');    
            
        });
    };

    // Set src attribute of element from its data-src where it was temporarily stored earlier
    mr.util.activateIdleSrc = function(context, selector){
        
        selector     = (typeof selector !== typeof undefined) ? selector : '';
        var elems    = context.is(selector+'[src]') ? context : context.find(selector+'[src]');

        elems.each(function(index, elem){
            elem = $(elem);
            var dataSrc    = elem.attr('data-src');

            // If there is no data-src, save current source to it
            if(typeof dataSrc !== typeof undefined){
                elem.attr('src', dataSrc);
            }
        });
    };

    mr.util.pauseVideo = function(context){
        var elems = context.is('video') ? context : context.find('video');

        elems.each(function(index, video){
            var playingVideo = $(video).get(0);
            playingVideo.pause();
        });
    };

    // Take a text value in either px (eg. 150px) or vh (eg. 65vh) and return a number in pixels.
    mr.util.parsePixels = function(text){
        var windowHeight = $(window).height(), value;
        
        // Text text against regular expression for px value.
        if(/^[1-9]{1}[0-9]*[p][x]$/.test(text)){
            return parseInt(text.replace('px', ''),10);
        }
        // Otherwise it is vh value.
        else if(/^[1-9]{1}[0-9]*[v][h]$/.test(text)){
            value = parseInt(text.replace('vh', ''),10);
            // Return conversion to percentage of window height.
            return windowHeight * (value/100);
        }else{
            // If it is not proper text, return -1 to indicate bad value.
            return -1;
        }
    };

    mr.components.documentReady.push(mr.util.documentReady);
    return mr;

}(mr, jQuery, window, document));


//////////////// Scroll Functions
mr = (function (mr, $, window, document){
    "use strict";

    mr.scroll           = {};
    mr.scroll.listeners = [];
    mr.scroll.y         = 0;
    mr.scroll.x         = 0;

     var documentReady = function($){
        
        // Check if scroll-assist is on
        if($('body').hasClass('scroll-assist')){
            mr.scroll.assisted = true;
        }

        //////////////// Capture Scroll Event and fire scroll function
        
        addEventListener('scroll', function(evt) {        
                //if(!mr.scroll.assisted){
                    window.mr.scroll.y = window.pageYOffset;
                //}
                window.mr.scroll.update(evt);
        }, false);
        
    };

    mr.scroll.update = function(event){
        // Loop through all mr scroll listeners
        for (var i = 0, l = mr.scroll.listeners.length; i < l; i++) {
           mr.scroll.listeners[i](event);
        }
    };

    mr.scroll.documentReady = documentReady;

    mr.components.documentReady.push(documentReady);

    return mr;

}(mr, jQuery, window, document));


//////////////// Scroll Class Modifier
mr = (function (mr, $, window, document){
    "use strict";

    mr.scroll.classModifiers = {};
    // Globally accessible list of elements/rules
    mr.scroll.classModifiers.rules = [];

    mr.scroll.classModifiers.parseScrollRules = function(element){
        var text  = element.attr('data-scroll-class'),
            rules = text.split(";");

        rules.forEach(function(rule){
            var ruleComponents, scrollPoint, ruleObject = {};
            ruleComponents = rule.replace(/\s/g, "").split(':');
            if(ruleComponents.length === 2){
                scrollPoint = mr.util.parsePixels(ruleComponents[0]);
                if(scrollPoint > -1){
                    ruleObject.scrollPoint = scrollPoint;
                    if(ruleComponents[1].length){
                        var toggleClass = ruleComponents[1];
                        ruleObject.toggleClass = toggleClass;
                        // Set variable in object to indicate that element already has class applied
                        ruleObject.hasClass = element.hasClass(toggleClass);
                        ruleObject.element = element.get(0);
                        mr.scroll.classModifiers.rules.push(ruleObject);
                    }else{
                        // Error: toggleClass component does not exist.
                        //console.log('Error - toggle class not found.');
                        return false;
                    }
                }else{
                    // Error: scrollpoint component was malformed
                    //console.log('Error - Scrollpoint not found.');
                    return false;
                }
            }   
        });
        
        if(mr.scroll.classModifiers.rules.length){
            return true;
        }else{
            return false;
        }
    };

    mr.scroll.classModifiers.update = function(event){
        var currentScroll = mr.scroll.y,
            scrollRules   = mr.scroll.classModifiers.rules,
            l             = scrollRules.length,
            currentRule;
        
        // Given the current scrollPoint, check for necessary changes 
        while(l--) {
            
            currentRule = scrollRules[l];
            
            if(currentScroll > currentRule.scrollPoint && !currentRule.hasClass){
                // Set local copy and glogal copy at the same time;
                currentRule.element.classList.add(currentRule.toggleClass);
                currentRule.hasClass = mr.scroll.classModifiers.rules[l].hasClass = true;
            }
            if(currentScroll < currentRule.scrollPoint && currentRule.hasClass){
                // Set local copy and glogal copy at the same time;
                currentRule.element.classList.remove(currentRule.toggleClass);
                currentRule.hasClass = mr.scroll.classModifiers.rules[l].hasClass = false;
            }
        }
    };

    var fixedElementSizes = function(){
        $('.main-container [data-scroll-class*="pos-fixed"]').each(function(){
            var element = $(this);
            element.css('max-width',element.parent().outerWidth());
            element.parent().css('min-height',element.outerHeight());
        });
    };

    var documentReady = function($){
        // Collect info on all elements that require class modification at load time
        // Each element has data-scroll-class with a formatted value to represent class to add/remove at a particular scroll point.
        $('[data-scroll-class]').each(function(){
            var element  = $(this);
                
            // Test the rules to be added to an array of rules.
            if(!mr.scroll.classModifiers.parseScrollRules(element)){
                console.log('Error parsing scroll rules on: '+element);
            }
        });

        // For 'position fixed' elements, give them a max-width for correct fixing behaviour
        fixedElementSizes();
        $(window).on('resize', fixedElementSizes);
        
        // If there are valid scroll rules add classModifiers update function to the scroll event processing queue.
        if(mr.scroll.classModifiers.rules.length){
            mr.scroll.listeners.push(mr.scroll.classModifiers.update);
        }
    };

    mr.components.documentReady.push(documentReady);
    mr.scroll.classModifiers.documentReady = documentReady;    

    

    return mr;

}(mr, jQuery, window, document));


//////////////// Accordions
mr = (function (mr, $, window, document){
    "use strict";
    
    var documentReady = function($){
        $('.accordion__title').on('click', function(){
            var accordion = $(this).closest('.accordion');
            var li = $(this).closest('li');
            if(li.hasClass('active')){
                li.removeClass('active');      
            }else{
                if(accordion.hasClass('accordion--oneopen')){
                    var wasActive = accordion.find('li.active');
                    wasActive.removeClass('active');
                    li.addClass('active');
                }else{
                    li.addClass('active');
                }
            }
        });

        $('.accordion').each(function(){
            var accordion = $(this);
            var minHeight = accordion.outerHeight(true);
            accordion.css('min-height',minHeight);
        });
    };

    mr.accordions = {
        documentReady : documentReady        
    };

    mr.components.documentReady.push(documentReady);
    return mr;

}(mr, jQuery, window, document));


//////////////// Backgrounds
mr = (function (mr, $, window, document){
    "use strict";
    
    var documentReady = function($){
        
        //////////////// Append .background-image-holder <img>'s as CSS backgrounds

	    $('.background-image-holder').each(function() {
	        var imgSrc = $(this).children('img').attr('src');
	        $(this).css('background', 'url("' + imgSrc + '")').css('background-position', 'initial').css('opacity','1');
	    });
    };

    mr.backgrounds = {
        documentReady : documentReady        
    };

    mr.components.documentReady.push(documentReady);
    return mr;

}(mr, jQuery, window, document));

//////////////// Bars
mr = (function (mr, $, window, document){
    "use strict";
    
    var documentReady = function($){
        $('.nav-container .bar[data-scroll-class*="fixed"]:not(.bar--absolute)').each(function(){
            var bar = $(this),
                barHeight = bar.outerHeight(true);
            bar.closest('.nav-container').css('min-height',barHeight);
        });
    };

    mr.bars = {
        documentReady : documentReady        
    };

    mr.components.documentReady.push(documentReady);
    return mr;

}(mr, jQuery, window, document));

//////////////// Cookies
mr = (function (mr, $, window, document){
    "use strict";
    
    mr.cookies = {

        getItem: function (sKey) {
            if (!sKey) { return null; }
            return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        },
        setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
            if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
                var sExpires = "";
                if (vEnd) {
                  switch (vEnd.constructor) {
                    case Number:
                      sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                      break;
                    case String:
                      sExpires = "; expires=" + vEnd;
                      break;
                    case Date:
                      sExpires = "; expires=" + vEnd.toUTCString();
                      break;
                }
            }
            document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
            return true;
        },
        removeItem: function (sKey, sPath, sDomain) {
            if (!this.hasItem(sKey)) { return false; }
            document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
            return true;
        },
        hasItem: function (sKey) {
            if (!sKey) { return false; }
            return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
        },
        keys: function () {
            var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
            for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
            return aKeys;
        }
    };

    return mr;

}(mr, jQuery, window, document));

//////////////// Countdown
mr = (function (mr, $, window, document){
    "use strict";
    
    var documentReady = function($){

        $('.countdown[data-date]').each(function(){
            var element      = $(this),
                date         = element.attr('data-date'),
                daysText     = "days",
                fallback;

            if(typeof element.attr('data-date-fallback') !== typeof undefined){
                fallback = element.attr('data-date-fallback');
            }

            if(typeof element.attr('data-days-text') !== typeof undefined){
                daysText = element.attr('data-days-text');
            }

            element.countdown(date, function(event) {
                if(event.elapsed){
                    element.text(fallback);
                }else{
                    element.text(
                      event.strftime('%D '+daysText+' %H:%M:%S')
                    );
                }
            });
        });
        
    };

    mr.countdown = {
      documentReady : documentReady        
    };

    mr.components.documentReadyDeferred.push(documentReady);
    return mr;

}(mr, jQuery, window, document));

//////////////// Dropdowns
mr = (function (mr, $, window, document){
    "use strict";
    mr.dropdowns = {};
    mr.dropdowns.done = false;
    
    var documentReady = function($){

        var rtl = false;

        if($('html[dir="rtl"]').length){
            rtl = true;
        }

        if(!mr.dropdowns.done){
            jQuery(document).on('click','body:not(.dropdowns--hover) .dropdown:not(.dropdown--hover), body.dropdowns--hover .dropdown.dropdown--click',function(event){
                var dropdown = jQuery(this);
                if(jQuery(event.target).is('.dropdown--active > .dropdown__trigger')){
                    dropdown.siblings().removeClass('dropdown--active').find('.dropdown').removeClass('dropdown--active');
                    dropdown.toggleClass('dropdown--active');
                }else{
                    $('.dropdown--active').removeClass('dropdown--active');
                    dropdown.addClass('dropdown--active');
                }
            });
            jQuery(document).on('click touchstart', 'body', function(event){
                if(!jQuery(event.target).is('[class*="dropdown"], [class*="dropdown"] *')){
                    $('.dropdown--active').removeClass('dropdown--active');
                }
            });

            // Append a container to the body for measuring purposes
            jQuery('body').append('<div class="container containerMeasure" style="opacity:0;pointer-events:none;"></div>');

            mr.dropdowns.done = true;
        }

         //////////////// Menu dropdown positioning

        if(rtl === false){
            repositionDropdowns($);
        }else{
            repositionDropdownsRtl($);
        }
        
        jQuery(window).resize(function(){
            //repositionDropdowns($);
        });

    };

    function repositionDropdowns($){
        $('.dropdown__container').each(function(){
            var container       = jQuery(this),
                containerOffset = container.offset().left,
                masterOffset    = jQuery('.containerMeasure').offset().left,
                menuItem        = container.closest('.dropdown').offset().left,
                content         = '';
                
                container.css('left',((-containerOffset)+(masterOffset)));

                if(container.find('.dropdown__content:not([class*="-12"])').length){
                    content = container.find('.dropdown__content');
                    content.css('left', ((menuItem)-(masterOffset)));
                }
                
        });
        $('.dropdown__content').each(function(){
            var dropdown    = jQuery(this),
                offset      = dropdown.offset().left,
                width       = dropdown.outerWidth(true),
                offsetRight = offset + width,
                winWidth    = jQuery(window).outerWidth(true),
                leftCorrect = jQuery('.containerMeasure').outerWidth() - width;

            if(offsetRight > winWidth){
                dropdown.css('left', leftCorrect);
            }

        });
    }

    function repositionDropdownsRtl($){

        var windowWidth = jQuery(window).width();

        $('.dropdown__container').each(function(){
            var container       = jQuery(this),
                containerOffset = windowWidth - (container.offset().left + container.outerWidth(true)),
                masterOffset    = jQuery('.containerMeasure').offset().left,
                menuItem        = windowWidth - (container.closest('.dropdown').offset().left + container.closest('.dropdown').outerWidth(true)),
                content         = '';
                
                container.css('right',((-containerOffset)+(masterOffset)));

                if(container.find('.dropdown__content:not([class*="-12"])').length){
                    content = container.find('.dropdown__content');
                    content.css('right', ((menuItem)-(masterOffset)));
                }
        });
        $('.dropdown__content').each(function(){
            var dropdown    = jQuery(this),
                offset      = windowWidth - (dropdown.offset().left + dropdown.outerWidth(true)),
                width       = dropdown.outerWidth(true),
                offsetRight = offset + width,
                winWidth    = jQuery(window).outerWidth(true),
                rightCorrect = jQuery('.containerMeasure').outerWidth() - width;

            if(offsetRight > winWidth){
               dropdown.css('right', rightCorrect);
            }

        });
    }

    mr.dropdowns.documentReady = documentReady;
    

    mr.components.documentReady.push(documentReady);
    return mr;

}(mr, jQuery, window, document));

//////////////// Forms
mr = (function (mr, $, window, document){
    "use strict";
    
    mr.forms = {};

    var documentReady = function($){
        
        //////////////// Checkbox Inputs

        $('.input-checkbox').on('click', function() {
            var checkbox = $(this);
            checkbox.toggleClass('checked');
            
            var input = checkbox.find('input');
            if (input.prop('checked') === false) {
                input.prop('checked', true);
            } else {
                input.prop('checked', false);
            }
            return false;
        });

        //////////////// Radio Buttons

        $('.input-radio').on('click', function() {
            var radio = $(this);
            radio.closest('form').find('.input-radio').removeClass('checked');
            radio.addClass('checked').find('input').prop('checked', true);
            return false;
        });

        //////////////// File Uploads

        $('.input-file .btn').on('click',function(){
            $(this).siblings('input').trigger('click');
            return false;
        });
        
        //////////////// Handle Form Submit

        $('form.form-email, form[action*="list-manage.com"], form[action*="createsend.com"]').attr('novalidate', true).off('submit').on('submit', mr.forms.submit);

        //////////////// Handle Form Submit
        $(document).on('change, input, paste, keyup', '.attempted-submit .field-error', function(){
            $(this).removeClass('field-error');
        });

    };

    mr.forms.documentReady = documentReady;
    
    mr.forms.submit = function(e){
        // return false so form submits through jQuery rather than reloading page.
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;

        var body          = $('body'),
            thisForm      = $(e.target).closest('form'),
            formAction    = typeof thisForm.attr('action') !== typeof undefined ? thisForm.attr('action') : "",
            submitButton  = thisForm.find('button[type="submit"], input[type="submit"]'),
            error         = 0,
            originalError = thisForm.attr('original-error'),
            successRedirect, formError, formSuccess, errorText, successText;

        body.find('.form-error, .form-success').remove();
        submitButton.attr('data-text', submitButton.text());
        errorText = thisForm.attr('data-error') ? thisForm.attr('data-error') : "Please fill all fields correctly";
        successText = thisForm.attr('data-success') ? thisForm.attr('data-success') : "Thanks, we'll be in touch shortly";
        body.append('<div class="form-error" style="display: none;">' + errorText + '</div>');
        body.append('<div class="form-success" style="display: none;">' + successText + '</div>');
        formError = body.find('.form-error');
        formSuccess = body.find('.form-success');
        thisForm.addClass('attempted-submit');

        // Do this if the form is intended to be submitted to MailChimp or Campaign Monitor
        if (formAction.indexOf('createsend.com') !== -1 || formAction.indexOf('list-manage.com') !== -1 ) {

            console.log('Mail list form signup detected.');
            if (typeof originalError !== typeof undefined && originalError !== false) {
                formError.html(originalError);
            }
            
            // validateFields returns 1 on error;
            if (mr.forms.validateFields(thisForm) !== 1) {
               
                thisForm.removeClass('attempted-submit');

                // Hide the error if one was shown
                formError.fadeOut(200);
                // Create a new loading spinner in the submit button.
                submitButton.addClass('btn--loading');
                
                try{
                    $.ajax({
                        url: thisForm.attr('action'),
                        crossDomain: true,
                        data: thisForm.serialize(),
                        method: "GET",
                        cache: false,
                        dataType: 'json',
                        contentType: 'application/json; charset=utf-8',
                        success: function(data){
                            // Request was a success, what was the response?

                            if (data.result !== "success" && data.Status !== 200) {
                                
                                // Got an error from Mail Chimp or Campaign Monitor

                                // Keep the current error text in a data attribute on the form
                                formError.attr('original-error', formError.text());
                                // Show the error with the returned error text.
                                formError.html(data.msg).stop(true).fadeIn(1000);
                                formSuccess.stop(true).fadeOut(1000);

                                submitButton.removeClass('btn--loading');
                            } else {
                                
                                // Got success from Mail Chimp or Campaign Monitor
                                
                                submitButton.removeClass('btn--loading');

                                successRedirect = thisForm.attr('data-success-redirect');
                                // For some browsers, if empty `successRedirect` is undefined; for others,
                                // `successRedirect` is false.  Check for both.
                                if (typeof successRedirect !== typeof undefined && successRedirect !== false && successRedirect !== "") {
                                    window.location = successRedirect;
                                }else{
                                    mr.forms.resetForm(thisForm);
                                    mr.forms.showFormSuccess(formSuccess, formError, 1000, 5000, 500);
                                }
                            }
                        }
                    });
                }catch(err){
                    // Keep the current error text in a data attribute on the form
                    formError.attr('original-error', formError.text());
                    // Show the error with the returned error text.
                    formError.html(err.message);
                    mr.forms.showFormError(formSuccess, formError, 1000, 5000, 500);

                    submitButton.removeClass('btn--loading');
                }
            

                
            } else {
                // There was a validation error - show the default form error message
                mr.forms.showFormError(formSuccess, formError, 1000, 5000, 500);
            }
        } else {
            // If no MailChimp or Campaign Monitor form was detected then this is treated as an email form instead.
            if (typeof originalError !== typeof undefined && originalError !== false) {
                formError.text(originalError);
            }

            error = mr.forms.validateFields(thisForm);

            if (error === 1) {
                mr.forms.showFormError(formSuccess, formError, 1000, 5000, 500);
            } else {

                thisForm.removeClass('attempted-submit');

                // Hide the error if one was shown
                formError.fadeOut(200);
                
                // Create a new loading spinner in the submit button.
                submitButton.addClass('btn--loading');

                jQuery.ajax({
                    type: "POST",
                    url: "mail/mail.php",
                    data: thisForm.serialize()+"&url="+window.location.href,
                    success: function(response) {
                        // Swiftmailer always sends back a number representing number of emails sent.
                        // If this is numeric (not Swift Mailer error text) AND greater than 0 then show success message.

                        submitButton.removeClass('btn--loading');

                        if ($.isNumeric(response)) {
                            if (parseInt(response,10) > 0) {
                                // For some browsers, if empty 'successRedirect' is undefined; for others,
                                // 'successRedirect' is false.  Check for both.
                                successRedirect = thisForm.attr('data-success-redirect');
                                if (typeof successRedirect !== typeof undefined && successRedirect !== false && successRedirect !== "") {
                                    window.location = successRedirect;
                                }

                                mr.forms.resetForm(thisForm);
                                mr.forms.showFormSuccess(formSuccess, formError, 1000, 5000, 500);
                            }
                        }
                        // If error text was returned, put the text in the .form-error div and show it.
                        else {
                            // Keep the current error text in a data attribute on the form
                            formError.attr('original-error', formError.text());
                            // Show the error with the returned error text.
                            formError.text(response).stop(true).fadeIn(1000);
                            formSuccess.stop(true).fadeOut(1000);
                        }
                    },
                    error: function(errorObject, errorText, errorHTTP) {
                        // Keep the current error text in a data attribute on the form
                        formError.attr('original-error', formError.text());
                        // Show the error with the returned error text.
                        formError.text(errorHTTP).stop(true).fadeIn(1000);
                        formSuccess.stop(true).fadeOut(1000);
                        submitButton.removeClass('btn--loading');
                    }
                });
            }
        }
        return false;
    };
    
    mr.forms.validateFields = function(form) {
        var body = $(body),
            error = false,
            originalErrorMessage,
            name;

            form = $(form);



        form.find('.validate-required[type="checkbox"]').each(function() {
            var checkbox = $(this);
            if (!$('[name="' + $(this).attr('name') + '"]:checked').length) {
                error = 1;
                name = $(this).attr('data-name') ||  'check';
                checkbox.parent().addClass('field-error');
                //body.find('.form-error').text('Please tick at least one ' + name + ' box.');
            }
        });

        $(form).find('.validate-required, .required, [required]').not('input[type="checkbox"]').each(function() {
            if ($(this).val() === '') {
                $(this).addClass('field-error');
                error = 1;
            } else {
                $(this).removeClass('field-error');
            }
        });

        $(form).find('.validate-email, .email, [name*="cm-"][type="email"]').each(function() {
            if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                $(this).addClass('field-error');
                error = 1;
            } else {
                $(this).removeClass('field-error');
            }
        });

        if (!form.find('.field-error').length) {
            body.find('.form-error').fadeOut(1000);
        }else{
            
            var firstError = $(form).find('.field-error:first');
            
            if(firstError.length){
                $('html, body').stop(true).animate({
                    scrollTop: (firstError.offset().top - 100)
                }, 1200, function(){firstError.focus();});
            }
        }

        return error;
    };

    mr.forms.showFormSuccess = function(formSuccess, formError, fadeOutError, wait, fadeOutSuccess){
        
        formSuccess.stop(true).fadeIn(fadeOutError);

        formError.stop(true).fadeOut(fadeOutError);
        setTimeout(function() {
            formSuccess.stop(true).fadeOut(fadeOutSuccess);
        }, wait);
    };

    mr.forms.showFormError = function(formSuccess, formError, fadeOutSuccess, wait, fadeOutError){
        
        formError.stop(true).fadeIn(fadeOutSuccess);

        formSuccess.stop(true).fadeOut(fadeOutSuccess);
        setTimeout(function() {
            formError.stop(true).fadeOut(fadeOutError);
        }, wait);
    };

    // Reset form to empty/default state.
    mr.forms.resetForm = function(form){
        form = $(form);
        form.get(0).reset();
        form.find('.input-radio, .input-checkbox').removeClass('checked');

    };

    mr.components.documentReady.push(documentReady);
    return mr;

}(mr, jQuery, window, document));

//////////////// Granim
mr = (function (mr, $, window, document){
    "use strict";
    
    var documentReady = function($){
    	$('[data-gradient-bg]').each(function(index,element){
    		var granimParent = $(this),
    			granimID 	 = 'granim-'+index+'',
				colours 	 = granimParent.attr('data-gradient-bg'),
				pairs        = [],
				tempPair     = [],
				count,
				passes,
				i;

			// Canvas element forms the gradient background
			granimParent.prepend('<canvas id="'+granimID+'"></canvas>');

            // Regular expression to match comma separated list of hex colour values
            passes = /^(#[0-9|a-f|A-F]{6}){1}([ ]*,[ ]*#[0-9|a-f|A-F]{6})*$/.test(colours);

            if(passes === true){
            	colours = colours.replace(' ','');
            	colours = colours.split(',');
            	count = colours.length;
            	// If number of colours is odd - duplicate last colour to make even array
            	if(count%2 !== 0){
            		colours.push(colours[count-1]);
            	}
            	for(i = 0; i < (count/2); i++){
                    tempPair = [];
                    tempPair.push(colours.shift());
                    tempPair.push(colours.shift());
                    pairs.push(tempPair);
            	}
            }

    		var granimElement = $(this);
    		var granimInstance = new Granim({
			    element: '#'+granimID,
			    name: 'basic-gradient',
			    direction: 'left-right',
			    opacity: [1, 1],
			    isPausedWhenNotInView: true,
			    states : {
			        "default-state": {
			            gradients: pairs
			        }
			    }
			});
    	});        
    };

    mr.granim = {
      documentReady : documentReady        
    };

    mr.components.documentReadyDeferred.push(documentReady);
    return mr;

}(mr, jQuery, window, document));

//////////////// Instagram
mr = (function (mr, $, window, document){
    "use strict";
    
    var documentReady = function($){
        
        if($('.instafeed').length){

            // Replace with your own Access Token and Client ID
            var token  = '4079540202.b9b1d8a.1d13c245c68d4a17bfbff87919aaeb14',
                client = 'b9b1d8ae049d4153b24a6332f0088686',
                elementToken, elementClient;

            if($('.instafeed[data-access-token][data-client-id]').length){
                elementToken = $('.instafeed[data-access-token][data-client-id]').first().attr('data-access-token');
                elementClient = $('.instafeed[data-access-token][data-client-id]').first().attr('data-client-id');

                if(elementToken !== ""){token = elementToken;}
                if(elementClient !== ""){client = elementClient;}
            }

            jQuery.fn.spectragram.accessData = {
                accessToken: token,
                clientID: client
            };  
        }

        $('.instafeed').each(function(){
            var feed   = $(this),
                feedID = feed.attr('data-user-name'),
                fetchNumber = 12;
            if(typeof feed.attr('data-amount') !== typeof undefined){
                fetchNumber = parseInt(feed.attr('data-amount'), 10);
            }
            feed.append('<ul></ul>');
            feed.children('ul').spectragram('getUserFeed', {
                query: feedID,
                max: fetchNumber
            });
        });
    };

    mr.instagram = {
        documentReady : documentReady        
    };

    mr.components.documentReadyDeferred.push(documentReady);
    return mr;

}(mr, jQuery, window, document));

//////////////// Maps
mr = (function (mr, $, window, document){
    "use strict";
    
    mr.maps = {};

    var documentReady = function($){
        // Interact with Map once the user has clicked (to prevent scrolling the page = zooming the map

        $('.map-holder').on('click', function() {
            $(this).addClass('interact');
        }).removeClass('interact');
        
        mr.maps.initAPI();
        mr.maps.init();
        
    };
    mr.maps.documentReady = documentReady;

    mr.maps.initAPI = function(){
        // Load Google MAP API JS with callback to initialise when fully loaded
        if(document.querySelector('[data-maps-api-key]') && !document.querySelector('.gMapsAPI')){
            if($('[data-maps-api-key]').length){
                var script = document.createElement('script');
                var apiKey = $('[data-maps-api-key]:first').attr('data-maps-api-key');
                apiKey = typeof apiKey !== typeof undefined ? apiKey : ''; 
                if(apiKey !== ''){
                    script.type = 'text/javascript';
                    script.src = 'https://maps.googleapis.com/maps/api/js?key='+apiKey+'&callback=mr.maps.init';
                    script.className = 'gMapsAPI';
                    document.body.appendChild(script);  
                }
            } 
        }
    };

    mr.maps.init = function(){
        if(typeof window.google !== "undefined"){
            if(typeof window.google.maps !== "undefined"){
                $('.map-container[data-maps-api-key]').each(function(){
                    var mapElement    = this,
                        mapInstance   = $(this),
                        mapJSON       = typeof mapInstance.attr('data-map-style') !== typeof undefined ? mapInstance.attr('data-map-style'): false,
                        mapStyle      = JSON.parse(mapJSON) || [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
                        zoomLevel     = (typeof mapInstance.attr('data-map-zoom') !== typeof undefined && mapInstance.attr('data-map-zoom') !== "") ? mapInstance.attr('data-map-zoom') * 1: 17,
                        latlong       = typeof mapInstance.attr('data-latlong') !== typeof undefined ? mapInstance.attr('data-latlong') : false,
                        latitude      = latlong ? 1 *latlong.substr(0, latlong.indexOf(',')) : false,
                        longitude     = latlong ? 1 * latlong.substr(latlong.indexOf(",") + 1) : false,
                        geocoder      = new google.maps.Geocoder(),
                        address       = typeof mapInstance.attr('data-address') !== typeof undefined ? mapInstance.attr('data-address').split(';'): [""],
                        markerImage   = typeof mapInstance.attr('data-marker-image') !== typeof undefined ? mapInstance.attr('data-marker-image'): 'img/mapmarker.png',
                        markerTitle   = "We Are Here",
                        isDraggable   = $(document).width() > 766 ? true : false,
                        map, marker,
                        mapOptions = {
                            draggable: isDraggable,
                            scrollwheel: false,
                            zoom: zoomLevel,
                            disableDefaultUI: true,
                            styles: mapStyle
                        };

                    if(typeof mapInstance.attr('data-marker-title') !== typeof undefined && mapInstance.attr('data-marker-title') !== "" )
                    {
                        markerTitle = mapInstance.attr('data-marker-title');
                    }

                    if(address !== undefined && address[0] !== ""){
                            geocoder.geocode( { 'address': address[0].replace('[nomarker]','')}, function(results, status) {
                                if (status === google.maps.GeocoderStatus.OK) {
                                var map = new google.maps.Map(mapElement, mapOptions); 
                                map.setCenter(results[0].geometry.location);
                                
                                address.forEach(function(address){
                                    var markerGeoCoder;
                                    
                                    markerImage = {url: typeof window.mr_variant === typeof undefined ? markerImage : '../img/mapmarker.png', scaledSize: new google.maps.Size(50,50)};
                                    if(/(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)/.test(address) ){
                                        var latlong = address.split(','),
                                        marker = new google.maps.Marker({
                                                        position: { lat: 1*latlong[0], lng: 1*latlong[1] },
                                                        map: map,
                                                        icon: markerImage,
                                                        title: markerTitle,
                                                        optimised: false
                                                    });
                                    }
                                    else if(address.indexOf('[nomarker]') < 0){
                                        markerGeoCoder = new google.maps.Geocoder();
                                        markerGeoCoder.geocode( { 'address': address.replace('[nomarker]','')}, function(results, status) {
                                            if (status === google.maps.GeocoderStatus.OK) {
                                                marker = new google.maps.Marker({
                                                    map: map,
                                                    icon: markerImage,
                                                    title: markerTitle,
                                                    position: results[0].geometry.location,
                                                    optimised: false
                                                });
                                            }
                                            else{
                                                console.log('Map marker error: '+status);
                                            }
                                        });
                                    }

                                });
                            } else {
                                console.log('There was a problem geocoding the address.');
                            }
                        });
                    }
                    else if(typeof latitude !== typeof undefined && latitude !== "" && latitude !== false && typeof longitude !== typeof undefined && longitude !== "" && longitude !== false ){
                        mapOptions.center   = { lat: latitude, lng: longitude};
                        map                 = new google.maps.Map(mapInstance, mapOptions); 
                        marker              = new google.maps.Marker({
                                                    position: { lat: latitude, lng: longitude },
                                                    map: map,
                                                    icon: markerImage,
                                                    title: markerTitle
                                                });

                    }

                }); 
            }
        }
    };

    mr.components.documentReady.push(documentReady);
    return mr;

}(mr, jQuery, window, document));


//////////////// Masonry
mr = (function (mr, $, window, document){
    "use strict";
    
    var documentReady = function($){

        $('.masonry').each(function(){
            var masonry = $(this);
            var masonryContainer = masonry.find('.masonry__container'),
                filters          = masonry.find('.masonry__filters'),
                // data-filter-all-text can be used to set the word for "all"
                filterAllText    = typeof filters.attr('data-filter-all-text') !== typeof undefined ? filters.attr('data-filter-all-text') : "All",
                filtersList;
            
            // If a filterable masonry item exists
            if(masonryContainer.find('.masonry__item[data-masonry-filter]').length){
                
                // Create empty ul for filters
                filters.append('<ul></ul>');
                filtersList = filters.find('> ul');

                // To avoid cases where user leave filter attribute blank
                // only take items that have filter attribute
                masonryContainer.find('.masonry__item[data-masonry-filter]').each(function(){
                    var masonryItem  = $(this),
                        filterString = masonryItem.attr('data-masonry-filter'),
                        filtersArray = [];

                    // If not undefined or empty
                    if(typeof filterString !== typeof undefined && filterString !== ""){
                        // Split tags from string into array 
                        filtersArray = filterString.split(',');
                    }
                    jQuery(filtersArray).each(function(index, tag){

                        // Slugify the tag

                        var slug = mr.util.slugify(tag);

                        // Add the filter class to the masonry item

                        masonryItem.addClass('filter-'+slug);

                        // If this tag does not appear in the list already, add it
                        if(!filtersList.find('[data-masonry-filter="'+slug+'"]').length){
                            filtersList.append('<li data-masonry-filter="'+slug+'">'+tag+'</li>');
                            
                        }
                    }); 
                });

                mr.util.sortChildrenByText($(this).find('.masonry__filters ul'));
                // Add a filter "all" option
                filtersList.prepend('<li class="active" data-masonry-filter="*">'+filterAllText+'</li>');

            }
            //End of "if filterable masonry item exists"
        });
        
    };

    var windowLoad = function(){

        $('.masonry').each(function(){
            var masonry = $(this).find('.masonry__container');

            masonry.on('layoutComplete',function(){
                masonry.addClass('masonry--active');
            });

            masonry.isotope({
              itemSelector: '.masonry__item',
              masonry: {
                columnWidth: '.masonry__item'
              }
            });

        });

        $('.masonry__filters li').on('click touchstart', function(){
            var masonryFilter = $(this);
            var masonryContainer = masonryFilter.closest('.masonry').find('.masonry__container');
            var filterValue = '*';
            if(masonryFilter.attr('data-masonry-filter') !== '*'){
                filterValue = '.filter-'+masonryFilter.attr('data-masonry-filter');
            }
            masonryFilter.siblings('li').removeClass('active');
            masonryFilter.addClass('active');
            masonryContainer.removeClass('masonry--animate');
            masonryContainer.isotope({ filter: filterValue });
        });
    };

    mr.masonry = {
        documentReady : documentReady,
        windowLoad : windowLoad        
    };

    mr.components.documentReady.push(documentReady);
    mr.components.windowLoad.push(windowLoad);
    return mr;

}(mr, jQuery, window, document));

//////////////// Modals
mr = (function (mr, $, window, document){
    "use strict";
    
    mr.modals = {};

    var documentReady = function($){
        var allPageModals = "<div class=\"all-page-modals\"></div>",
            mainContainer = $('div.main-container');

        if(mainContainer.length){
            jQuery(allPageModals).insertAfter(mainContainer);
            mr.modals.allModalsContainer = $('div.all-page-modals');
        }
        else{
            jQuery('body').append(allPageModals);
            mr.modals.allModalsContainer = jQuery('body div.all-page-modals');
        }

        $('.modal-container').each(function(){

            // Add modal close if none exists

            var modal        = $(this),
                $window      = $(window),
                modalContent = modal.find('.modal-content');
                
            
            if(!modal.find('.modal-close').length){
                modal.find('.modal-content').append('<div class="modal-close modal-close-cross"></div>');
            }

            // Set modal height
            
            if(modalContent.attr('data-width') !== undefined){
                var modalWidth = modalContent.attr('data-width').substr(0,modalContent.attr('data-width').indexOf('%')) * 1;
                modalContent.css('width',modalWidth + '%');
            }
            if(modalContent.attr('data-height') !== undefined){
                var modalHeight = modalContent.attr('data-height').substr(0,modalContent.attr('data-height').indexOf('%')) * 1;
                modalContent.css('height',modalHeight + '%');
            }

            // Set iframe's src to data-src to stop autoplaying iframes
            mr.util.idleSrc(modal, 'iframe');

        });


        $('.modal-instance').each(function(index){
            var modalInstance = $(this);
            var modal = modalInstance.find('.modal-container');
            var modalContent = modalInstance.find('.modal-content');
            var trigger = modalInstance.find('.modal-trigger');
            
            // Link modal with modal-id attribute
            
            trigger.attr('data-modal-index',index);
            modal.attr('data-modal-index',index);
            
            // Set unique id for multiple triggers
            
            if(typeof modal.attr('data-modal-id') !== typeof undefined){
                trigger.attr('data-modal-id', modal.attr('data-modal-id'));
            }
            

            // Attach the modal to the body            
            modal = modal.detach();
            mr.modals.allModalsContainer.append(modal);
        });
        

        $('.modal-trigger').on('click', function(){

            var modalTrigger = $(this);
            var uniqueID, targetModal;
            // Determine if the modal id is set by user or is set programatically
   
            if(typeof modalTrigger.attr('data-modal-id') !== typeof undefined){
                uniqueID = modalTrigger.attr('data-modal-id');
                targetModal = mr.modals.allModalsContainer.find('.modal-container[data-modal-id="'+uniqueID+'"]');    
            }else{
                uniqueID = $(this).attr('data-modal-index');
                targetModal = mr.modals.allModalsContainer.find('.modal-container[data-modal-index="'+uniqueID+'"]');
            }
            
            mr.util.activateIdleSrc(targetModal, 'iframe');
            mr.modals.autoplayVideo(targetModal);

            mr.modals.showModal(targetModal);

            return false;
        });

        jQuery(document).on('click', '.modal-close', mr.modals.closeActiveModal);

        jQuery(document).keyup(function(e) {
            if (e.keyCode === 27) { // escape key maps to keycode `27`
                mr.modals.closeActiveModal();
            }
        });

        $('.modal-container').on('click', function(e) { 
            if( e.target !== this ) return;
            mr.modals.closeActiveModal();
        });

        // Trigger autoshow modals
        $('.modal-container[data-autoshow]').each(function(){
            var modal = $(this);
            var millisecondsDelay = modal.attr('data-autoshow')*1;

            mr.util.activateIdleSrc(modal);
            mr.modals.autoplayVideo(modal);

            // If this modal has a cookie attribute, check to see if a cookie is set, and if so, don't show it.
            if(typeof modal.attr('data-cookie') !== typeof undefined){
                if(!mr.cookies.hasItem(modal.attr('data-cookie'))){
                    mr.modals.showModal(modal, millisecondsDelay);
                }
            }else{
                mr.modals.showModal(modal, millisecondsDelay);
            }
        });

        // Exit modals
        $('.modal-container[data-show-on-exit]').each(function(){
            var modal        = jQuery(this),
                exitSelector = modal.attr('data-show-on-exit'),
                delay = 0;

            if(modal.attr('data-delay')){
                delay = parseInt(modal.attr('data-delay'), 10) || 0;  
            } 

            // If a valid selector is found, attach leave event to show modal.
            if($(exitSelector).length){
                modal.prepend($('<i class="ti-close close-modal">'));
                jQuery(document).on('mouseleave', exitSelector, function(){
                    if(!$('.modal-active').length){
                        if(typeof modal.attr('data-cookie') !== typeof undefined){
                            if(!mr.cookies.hasItem(modal.attr('data-cookie'))){
                                mr.modals.showModal(modal, delay);
                            }
                        }else{
                            mr.modals.showModal(modal, delay);
                        }
                    }
                });
            }
        });


        // Autoshow modal by ID from location href
        if(window.location.href.split('#').length === 2){
            var modalID = window.location.href.split('#').pop();
            if($('[data-modal-id="'+modalID+'"]').length){
                mr.modals.closeActiveModal();
                mr.modals.showModal($('[data-modal-id="'+modalID+'"]'));
            }  
        }

        // Make modal scrollable
        $(document).on('wheel mousewheel scroll','.modal-content, .modal-content .scrollable', function(evt){
            if(evt.preventDefault){evt.preventDefault();}
            if(evt.stopPropagation){evt.stopPropagation();}
            this.scrollTop += (evt.originalEvent.deltaY); 
        });
    };
    ////////////////
    //////////////// End documentReady
    ////////////////

    mr.modals.documentReady = documentReady;

    mr.modals.showModal = function(modal, millisecondsDelay){
        
        var delay = (typeof millisecondsDelay !== typeof undefined) ? (1*millisecondsDelay) : 0;
        
        setTimeout(function(){
            modal.addClass('modal-active');
        },delay);
    };

    mr.modals.closeActiveModal = function(){
        var modal = jQuery('body div.modal-active');
        mr.util.idleSrc(modal, 'iframe');
        mr.util.pauseVideo(modal);

        // If this modal requires to be closed permanently using a cookie, set the cookie now.
        if(typeof modal.attr('data-cookie') !== typeof undefined){
            mr.cookies.setItem(modal.attr('data-cookie'), "true", Infinity);
        }

        modal.removeClass('modal-active');
    };

    mr.modals.autoplayVideo = function(modal){
        // If modal contains HTML5 video with autoplay, play the video
        if(modal.find('video[autoplay]').length){
            var video = modal.find('video').get(0);
            video.play();
        }
    };

    mr.components.documentReady.push(documentReady);
    return mr;

}(mr, jQuery, window, document));

//////////////// Newsletter Providers
mr = (function (mr, $, window, document){
    "use strict";
    
    mr.newsletters = {};

    var documentReady = function($){
  
  	var form,checkbox,label,id,parent,radio;
    
    // Treat Campaign Monitor forms
    $('form[action*="createsend.com"]').each(function(){
    	form = $(this);

        // Override browser validation and allow us to use our own
        form.attr('novalidate', 'novalidate');

    	// Give each text input a placeholder value

    	if(!form.is('.form--no-placeholders')){
            form.find('input:not([checkbox]):not([radio])').each(function(){
                var $input = $(this);
                if(typeof $input.attr('placeholder') !== typeof undefined){
                    if($input.attr('placeholder') === ""){
                        if($input.siblings('label').length){
                            $input.attr('placeholder', $input.siblings('label').first().text());
                            if(form.is('.form--no-labels')){   
                                $input.siblings('label').first().remove();
                            }
                        }
                    }
                }else if($input.siblings('label').length){
                    $input.attr('placeholder', $input.siblings('label').first().text()); 
                    if(form.is('.form--no-labels')){
                        $input.siblings('label').first().remove();
                    }
                }
                if($input.parent().is('p')){
                    $input.unwrap();
                }
            });
        }else{
            form.find('input[placeholder]').removeAttr('placeholder');
        }


    	// Wrap select elements in template code

    	form.find('select').wrap('<div class="input-select"></div>');

    	// Wrap radios elements in template code

    	form.find('input[type="radio"]').wrap('<div class="input-radio"></div>');

    	// Wrap checkbox elements in template code

    	form.find('input[type="checkbox"]').each(function(){
    		checkbox = $(this);
    		id = checkbox.attr('id');
    		label = form.find('label[for='+id+']');
    		
    		checkbox.before('<div class="input-checkbox" data-id="'+id+'"></div>');
    		$('.input-checkbox[data-id="'+id+'"]').prepend(checkbox);
    		$('.input-checkbox[data-id="'+id+'"]').prepend(label);
    		$('.input-checkbox[data-id="'+id+'"]').prepend('<div class="inner"></div>');
    	});

    	form.find('button[type="submit"]').each(function(){
            var button = $(this);
            button.addClass('btn');
            if(button.parent().is('p')){
                button.unwrap();
            }
        });
        
        form.find('[required]').attr('required', 'required').addClass('validate-required');

        form.addClass('form--active');

        mr.newsletters.prepareAjaxAction(form);

    });

    // Treat MailChimp forms
    $('form[action*="list-manage.com"]').each(function(){
    	form = $(this);

        // Override browser validation and allow us to use our own
        form.attr('novalidate', 'novalidate');

    	// Give each text input a placeholder value
        if(!form.is('.form--no-placeholders')){
        	form.find('input:not([checkbox]):not([radio])').each(function(){
        		var $input = $(this);
                if(typeof $input.attr('placeholder') !== typeof undefined){
                    if($input.attr('placeholder') === ""){
                        if($input.siblings('label').length){
                            $input.attr('placeholder', $input.siblings('label').first().text());
                            if(form.is('.form--no-labels')){   
                                $input.siblings('label').first().remove();
                            }
                        }
                    }
                }else if($input.siblings('label').length){
                    $input.attr('placeholder', $input.siblings('label').first().text()); 
                    if(form.is('.form--no-labels')){
                        $input.siblings('label').first().remove();
                    }
                }
        	});
        }else{
            form.find('input[placeholder]').removeAttr('placeholder');
        }

        if(form.is('.form--no-labels')){
            form.find('input:not([checkbox]):not([radio])').each(function(){
                var $input = $(this);
                if($input.siblings('label').length){
                    $input.siblings('label').first().remove();
                }
            });
        }

    	// Wrap select elements in template code

    	form.find('select').wrap('<div class="input-select"></div>');

    	// Wrap checboxes elements in template code

    	form.find('input[type="checkbox"]').each(function(){
    		checkbox = $(this);
    		parent = checkbox.parent();
    		label = parent.find('label');
    		checkbox.before('<div class="input-checkbox"><div class="inner"></div></div>');
    		parent.find('.input-checkbox').append(checkbox);
    		parent.find('.input-checkbox').append(label);
    	});

    	// Wrap radio elements in template code

    	form.find('input[type="radio"]').each(function(){
    		radio = $(this);
    		parent = radio.closest('li');
    		label = parent.find('label');
    		radio.before('<div class="input-radio"><div class="inner"></div></div>');
    		parent.find('.input-radio').prepend(radio);
    		parent.find('.input-radio').prepend(label);
    	});

        // Convert MailChimp input[type="submit"] to div.button

        form.find('input[type="submit"]').each(function(){
            var submit = $(this);
            
            var newButton = jQuery('<button/>').attr('type','submit').attr('class', submit.attr('class')).addClass('btn').text(submit.attr('value'));
            
            if(submit.parent().is('div.clear')){
                submit.unwrap();
            }

            newButton.insertBefore(submit);
            submit.remove();
        });

        form.find('input').each(function(){
            var input = $(this);
            if(input.hasClass('required')){
                input.removeClass('required').addClass('validate-required');
            }
        });

        form.find('input[type="email"]').removeClass('email').addClass('validate-email');

        form.find('#mce-responses').remove();

        form.find('.mc-field-group').each(function(){
            $(this).children().first().unwrap();
        });

        form.find('[required]').attr('required', 'required').addClass('validate-required');

        form.addClass('form--active');

        mr.newsletters.prepareAjaxAction(form);
     
    

    }); 

	// Reinitialize the forms so interactions work as they should

	mr.forms.documentReady(mr.setContext('form.form--active'));
		
  };

  mr.newsletters.documentReady = documentReady;

  mr.newsletters.prepareAjaxAction = function(form){
        var action = $(form).attr('action');

        // Alter action for a Mail Chimp-compatible ajax request url.
        if(/list-manage\.com/.test(action)){
           action = action.replace('/post?', '/post-json?') + "&c=?";
           if(action.substr(0,2) === "//"){
               action = 'http:' + action;
           }
        }

        // Alter action for a Campaign Monitor-compatible ajax request url.
        if(/createsend\.com/.test(action)){
           action = action + '?callback=?';
        }

        // Set action on the form
        $(form).attr('action', action);

    };



  mr.components.documentReady.push(documentReady);
  return mr;

}(mr, jQuery, window, document));

//////////////// Notifications
mr = (function (mr, $, window, document){
    "use strict";
    
    mr.notifications = {};

    var documentReady = function($){
        
        $('.notification').each(function(){
            var notification = $(this);
            if(!notification.find('.notification-close').length){
                notification.append('<div class="notification-close-cross notification-close"></div>');
            }
        });
    

        $('.notification[data-autoshow]').each(function(){
            var notification = $(this);
            var millisecondsDelay = notification.attr('data-autoshow') * 1;

            // If this notification has a cookie attribute, check to see if a cookie is set, and if so, don't show it.
            if(typeof notification.attr('data-cookie') !== typeof undefined){
                if(!mr.cookies.hasItem(notification.attr('data-cookie'))){
                    mr.notifications.showNotification(notification, millisecondsDelay);
                }
            }else{
                mr.notifications.showNotification(notification, millisecondsDelay);
            }
        });

        $('[data-notification-link]:not(.notification)').on('click', function(){
            var notificationID = jQuery(this).attr('data-notification-link');
            var notification = $('.notification[data-notification-link="'+notificationID+'"]');
            notification.removeClass('notification--dismissed');
            mr.notifications.showNotification(notification, 0);
            return false;
        });

        $('.notification-close').on('click', function(){
            var closeButton = jQuery(this);
            // Pass the closeNotification function a reference to the close button
            mr.notifications.closeNotification(closeButton);

            if(closeButton.attr('href') === '#'){
                return false;
            }
        });

        $('.notification .inner-link').on('click', function(){
            var notificationLink = jQuery(this).closest('.notification').attr('data-notification-link');
            mr.notifications.closeNotification(notificationLink);
        });
    
    };
    
    mr.notifications.documentReady = documentReady;

    mr.notifications.showNotification = function(notification, millisecondsDelay){
        var delay = (typeof millisecondsDelay !== typeof undefined) ? (1*millisecondsDelay) : 0;
        setTimeout(function(){
            notification.addClass('notification--reveal');
            notification.closest('nav').addClass('notification--reveal');
            if(notification.find('input').length){
                notification.find('input').first().focus();
            }
        },delay);
    };

    mr.notifications.closeNotification = function(notification){

        var $notification = jQuery(notification);
        
        notification = $notification.is('.notification-close') ? 
                       $notification.closest('.notification') : 
                       $('.notification[data-notification-link="'+notification+'"]');

        notification.addClass('notification--dismissed');
        notification.closest('nav').removeClass('notification--reveal');

        // If this notification requires to be closed permanently using a cookie, set the cookie now.
        if(typeof notification.attr('data-cookie') !== typeof undefined){
            mr.cookies.setItem(notification.attr('data-cookie'), "true", Infinity);
        }
    };

    mr.components.documentReady.push(documentReady);
    return mr;

}(mr, jQuery, window, document));

//////////////// Parallax
mr = (function (mr, $, window, document){
    "use strict";
    
    var documentReady = function($){
        
        var $window      = $(window); 
        var windowWidth  = $window.width();
        var windowHeight = $window.height();
        var navHeight    = $('nav').outerHeight(true);

        // Disable parallax on mobile

        if ((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
            $('section').removeClass('parallax');
        }

        if (windowWidth > 768) {
            var parallaxHero = $('.parallax:nth-of-type(1)'),
                parallaxHeroImage = $('.parallax:nth-of-type(1) .background-image-holder');

            parallaxHeroImage.css('top', -(navHeight));
            if(parallaxHero.outerHeight(true) === windowHeight){
                parallaxHeroImage.css('height', windowHeight + navHeight);
            }
        }
    };

    mr.parallax = {
        documentReady : documentReady        
    };

    mr.components.documentReady.push(documentReady);
    return mr;

}(mr, jQuery, window, document));

//////////////// Flickity
mr = (function (mr, $, window, document){
    "use strict";
    
    var documentReady = function($){

        $('.slider').each(function(index){
            
            var slider = $(this);
            var sliderInitializer = slider.find('ul.slides');
            sliderInitializer.find('>li').addClass('slide');
            var childnum = sliderInitializer.find('li').length;
            var arrows = false;
            var paging = false;
            var timing = 7000;
            var autoplay = true;
            var draggable = true;
            if(slider.attr('data-arrows') === 'true'){
                arrows = true;
            }else{
                arrows = false;
            }
            if(slider.attr('data-autoplay') === 'false'){
                autoplay = false;
            }else{
                autoplay = true;
            }
            if(slider.attr('data-paging') === 'true' && sliderInitializer.find('li').length > 1){
                paging = true;
            }else{
                paging = false;
            }
            if(slider.attr('data-timing')){
                timing = slider.attr('data-timing')*1;
            }
            // Set data attribute to inidicate the number of children in the slider
            slider.attr('data-children',childnum);

            if(childnum < 2){
                draggable = false;
            }

            $(sliderInitializer).flickity({
                cellSelector: '.slide',
                cellAlign: 'left',
                wrapAround: true,
                pageDots: paging,
                prevNextButtons: arrows,
                autoPlay: timing,
                draggable: draggable,
                imagesLoaded: true
            });

            $(sliderInitializer).on( 'scroll.flickity', function( event, progress ) {
              if(slider.find('.is-selected').hasClass('controls--dark')){
                slider.addClass('controls--dark');
              }else{
                slider.removeClass('controls--dark'); 
              }
            });
        });
        
    };

    mr.sliders = {
      documentReady : documentReady        
    };

    mr.components.documentReadyDeferred.push(documentReady);
    return mr;

}(mr, jQuery, window, document));

//////////////// Smoothscroll
mr = (function (mr, $, window, document){
    "use strict";
    
    mr.smoothscroll = {};
    mr.smoothscroll.sections = [];
    
    mr.smoothscroll.init = function(){
        mr.smoothscroll.sections = [];

        $('a.inner-link').each(function(){
            var sectionObject = {},
                link          = $(this),
                href          = link.attr('href');
            
            if($('body').find('section'+href).length){
                sectionObject.id     = href;
                sectionObject.top = Math.round($(href).offset().top);
                sectionObject.height = Math.round($(href).outerHeight());
                sectionObject.link   = link.get(0);
                sectionObject.active = false;

                mr.smoothscroll.sections.push(sectionObject);
            }
        });

        mr.smoothscroll.highlight();
    }

    mr.smoothscroll.highlight = function(){
        mr.smoothscroll.sections.forEach(function(section){
            if(mr.scroll.y >= section.top && mr.scroll.y < (section.top + section.height)){
                if(section.active === false){
                    section.link.classList.add("inner-link--active");
                    section.active = true;
                }
            }else{
                section.link.classList.remove("inner-link--active");
                section.active = false;
            }
        });
    };

    mr.scroll.listeners.push(mr.smoothscroll.highlight);

    var documentReady = function($){
        // Smooth scroll to inner links
        var innerLinks = $('a.inner-link');

        if(innerLinks.length){
            innerLinks.each(function(index){
                var link          = $(this),
                    href          = link.attr('href');
                if(href.charAt(0) !== "#"){
                    link.removeClass('inner-link');
                }
            });

            mr.smoothscroll.init();
            $(window).on('resize', mr.smoothscroll.init);

            var offset = 0;
            if($('body[data-smooth-scroll-offset]').length){
                offset = $('body').attr('data-smooth-scroll-offset');
                offset = offset*1;
            }
            
            smoothScroll.init({
                selector: '.inner-link',
                selectorHeader: null,
                speed: 750,
                easing: 'easeInOutCubic',
                offset: offset
            });
        }
    };

    mr.smoothscroll.documentReady = documentReady;

    mr.components.documentReady.push(documentReady);
    mr.components.windowLoad.push(mr.smoothscroll.init);
    return mr;

}(mr, jQuery, window, document));

//////////////// Tabs
mr = (function (mr, $, window, document){
    "use strict";
    
    var documentReady = function($){
        $('.tabs').each(function(){
            var tabs = $(this);
            tabs.after('<ul class="tabs-content">');
            tabs.find('li').each(function(){
                var currentTab      = $(this),
                    tabContent      = currentTab.find('.tab__content').wrap('<li></li>').parent(),
                    tabContentClone = tabContent.clone(true,true);
                tabContent.remove();
                currentTab.closest('.tabs-container').find('.tabs-content').append(tabContentClone);
            });
        });
        
        $('.tabs li').on('click', function(){
            var clickedTab    = $(this),
                tabContainer  = clickedTab.closest('.tabs-container'),
                activeIndex   = (clickedTab.index()*1)+(1),
                activeContent = tabContainer.find('> .tabs-content > li:nth-of-type('+activeIndex+')'),
                iframe;

            tabContainer.find('> .tabs > li').removeClass('active');
            tabContainer.find('> .tabs-content > li').removeClass('active');
            
            clickedTab.addClass('active');
            activeContent.addClass('active');
            

            // If there is an <iframe> element in the tab, reload its content when the tab is made active.
            iframe = activeContent.find('iframe');
            if(iframe.length){
                iframe.attr('src', iframe.attr('src'));
            }
        });
        
        $('.tabs li.active').trigger('click');
    };

    mr.tabs = {
        documentReady : documentReady        
    };

    mr.components.documentReady.push(documentReady);
    return mr;

}(mr, jQuery, window, document));

//////////////// Toggle Class
mr = (function (mr, $, window, document){
    "use strict";
    
    var documentReady = function($){
        $('[data-toggle-class]').each(function(){
        	var candidate     = $(this),
        		data          = candidate.attr('data-toggle-class'),
        		dataArray     = [],
        		toggleClass   = '',
        		toggleElement = '';
        	dataArray = data.split(";");

        	if(dataArray.length === 2){
        		toggleElement = dataArray[0];
        		toggleClass   = dataArray[1];
        		$(candidate).on('click',function(){
                    candidate.toggleClass('toggled-class');
        			$(toggleElement).toggleClass(toggleClass);
        			return false;
        		});
        	}else{
        		console.log('Error in [data-toggle-class] attribute. This attribute accepts an element, or comma separated elements terminated witha ";" followed by a class name to toggle');
        	}
        });
    };

    mr.toggleClass = {
        documentReady : documentReady        
    };

    mr.components.documentReady.push(documentReady);
    return mr;

}(mr, jQuery, window, document));

//////////////// Typed Headline Effect
mr = (function (mr, $, window, document){
    "use strict";
    
    var documentReady = function($){
        $('.typed-text').each(function(){
            var text = $(this);
            var strings = text.attr("data-typed-strings") ? text.attr("data-typed-strings").split(",") : [];
            $(text).typed({
                strings: strings,
                typeSpeed: 100,
                loop: true,
                showCursor: false
            });
        });
    };

    mr.typed = {
        documentReady : documentReady        
    };

    mr.components.documentReady.push(documentReady);
    return mr;

}(mr, jQuery, window, document));

//////////////// Twitter Feeds
mr = (function (mr, $, window, document){
    "use strict";
    
    var documentReady = function($){
        $('.tweets-feed').each(function(index) {
            $(this).attr('id', 'tweets-' + index);
        }).each(function(index) {
            var element = $('#tweets-' + index);
            var TweetConfig = {
               "domId": '',
               "maxTweets": element.attr('data-amount'),
               "enableLinks": true,
               "showUser": true,
               "showTime": true,
               "dateFunction": '',
               "showRetweet": false,
               "customCallback": handleTweets
            };

            if(typeof element.attr('data-widget-id') !== typeof undefined){
                TweetConfig.id = element.attr('data-widget-id');
            }else if(typeof element.attr('data-feed-name') !== typeof undefined && element.attr('data-feed-name') !== ""){
                TweetConfig.profile = {"screenName": element.attr('data-feed-name').replace('@', '')};
            }else{
                TweetConfig.profile = {"screenName": 'twitter'};
            }

            if(element.closest('.twitter-feed--slider').length){
                element.addClass('slider');
            }

            function handleTweets(tweets) {
                var x = tweets.length;
                var n = 0;
                var html = '<ul class="slides">';
                while (n < x) {
                    html += '<li>' + tweets[n] + '</li>';
                    n++;
                }
                html += '</ul>';
                element.html(html);
                
                // Initialize twitter feed slider
                if(element.closest('.slider').length){
                    mr.sliders.documentReady(mr.setContext());
                     
                    return html;
                }
            }
            twitterFetcher.fetch(TweetConfig);
        });
    };

    mr.twitter = {
        documentReady : documentReady
    };

    mr.components.documentReady.push(documentReady);

    return mr;

}(mr, jQuery, window, document));

//////////////// Video
mr = (function (mr, $, window, document){
    "use strict";
    
	  var documentReady = function($){
	      
			//////////////// Youtube Background

			if($('.youtube-background').length){
				$('.youtube-background').each(function(){
					var player = $(this);
					var vidURL = $(this).attr('data-video-url');
					var startAt = $(this).attr('data-start-at');
					player.attr('data-property','{videoURL:"'+vidURL+'",containment:"self",autoPlay:true, mute:true, startAt:'+startAt+', opacity:1}');
					player.closest('.videobg').append('<div class="loading-indicator"></div>');
					player.YTPlayer();
					player.on("YTPStart",function(){
				  		player.closest('.videobg').addClass('video-active');
					});	
				});
			}

			if($('.videobg').find('video').length){
				$('.videobg').find('video').closest('.videobg').addClass('video-active');
			} 

			//////////////// Video Cover Play Icons

			$('.video-cover').each(function(){
			    var videoCover = $(this);
			    if(videoCover.find('iframe').length){
			        videoCover.find('iframe').attr('data-src', videoCover.find('iframe').attr('src'));
			        videoCover.find('iframe').attr('src','');
			    }
			});

			$('.video-cover .video-play-icon').on("click", function(){
			    var playIcon = $(this);
			    var videoCover = playIcon.closest('.video-cover');
			    if(videoCover.find('video').length){
			        var video = videoCover.find('video').get(0);
			        videoCover.addClass('reveal-video');
			        video.play();
			        return false;
			    }else if(videoCover.find('iframe').length){
			        var iframe = videoCover.find('iframe');
			        iframe.attr('src',iframe.attr('data-src'));
			        videoCover.addClass('reveal-video');
			        return false;
			    }
			});
	  };

	  mr.video = {
	      documentReady : documentReady        
	  };

	  mr.components.documentReady.push(documentReady);
	  return mr;

}(mr, jQuery, window, document));