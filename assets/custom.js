/**
 * DEVELOPER DOCUMENTATION
 *
 * Include your custom JavaScript here.
 *
 * The theme Focal has been developed to be easily extensible through the usage of a lot of different JavaScript
 * events, as well as the usage of custom elements (https://developers.google.com/web/fundamentals/web-components/customelements)
 * to easily extend the theme and re-use the theme infrastructure for your own code.
 *
 * The technical documentation is summarized here.
 *
 * ------------------------------------------------------------------------------------------------------------
 * BEING NOTIFIED WHEN A VARIANT HAS CHANGED
 * ------------------------------------------------------------------------------------------------------------
 *
 * This event is fired whenever a the user has changed the variant in a selector. The target get you the form
 * that triggered this event.
 *
 * Example:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   let variant = event.detail.variant; // Gives you access to the whole variant details
 *   let form = event.target;
 * });
 *
 * ------------------------------------------------------------------------------------------------------------
 * MANUALLY CHANGE A VARIANT
 * ------------------------------------------------------------------------------------------------------------
 *
 * You may want to manually change the variant, and let the theme automatically adjust all the selectors. To do
 * that, you can get the DOM element of type "<product-variants>", and call the selectVariant method on it with
 * the variant ID.
 *
 * Example:
 *
 * const productVariantElement = document.querySelector('product-variants');
 * productVariantElement.selectVariant(12345);
 *
 * ------------------------------------------------------------------------------------------------------------
 * BEING NOTIFIED WHEN A NEW VARIANT IS ADDED TO THE CART
 * ------------------------------------------------------------------------------------------------------------
 *
 * This event is fired whenever a variant is added to the cart through a form selector (product page, quick
 * view...). This event DOES NOT include any change done through the cart on an existing variant. For that,
 * please refer to the "cart:updated" event.
 *
 * Example:
 *
 * document.addEventListener('variant:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 * });
 *
 * ------------------------------------------------------------------------------------------------------------
 * BEING NOTIFIED WHEN THE CART CONTENT HAS CHANGED
 * ------------------------------------------------------------------------------------------------------------
 *
 * This event is fired whenever the cart content has changed (if the quantity of a variant has changed, if a variant
 * has been removed, if the note has changed...). This event will also be emitted when a new variant has been
 * added (so you will receive both "variant:added" and "cart:updated"). Contrary to the variant:added event,
 * this event will give you the complete details of the cart.
 *
 * Example:
 *
 * document.addEventListener('cart:updated', function(event) {
 *   var cart = event.detail.cart; // Get the updated content of the cart
 * });
 *
 * ------------------------------------------------------------------------------------------------------------
 * REFRESH THE CART/MINI-CART
 * ------------------------------------------------------------------------------------------------------------
 *
 * If you are adding variants to the cart and would like to instruct the theme to re-render the cart, you cart
 * send the cart:refresh event, as shown below:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 *
 * ------------------------------------------------------------------------------------------------------------
 * USAGE OF CUSTOM ELEMENTS
 * ------------------------------------------------------------------------------------------------------------
 *
 * Our theme makes extensive use of HTML custom elements. Custom elements are an awesome way to extend HTML
 * by creating new elements that carry their own JavaScript for adding new behavior. The theme uses a large
 * number of custom elements, but the two most useful are drawer and popover. Each of those components add
 * a "open" attribute that you can toggle on and off. For instance, let's say you would like to open the cart
 * drawer, whose id is "mini-cart", you simply need to retrieve it and set its "open" attribute to true (or
 * false to close it):
 *
 * document.getElementById('mini-cart').open = true;
 *
 * Thanks to the power of custom elements, the theme will take care automagically of trapping focus, maintaining
 * proper accessibility attributes...
 *
 * If you would like to create your own drawer, you can re-use the <drawer-content> content. Here is a simple
 * example:
 *
 * // Make sure you add "aria-controls", "aria-expanded" and "is" HTML attributes to your button:
 * <button type="button" is="toggle-button" aria-controls="id-of-drawer" aria-expanded="false">Open drawer</button>
 *
 * <drawer-content id="id-of-drawer">
 *   Your content
 * </drawer-content>
 *
 * The nice thing with custom elements is that you do not actually need to instantiate JavaScript yourself: this
 * is done automatically as soon as the element is inserted to the DOM.
 *
 * ------------------------------------------------------------------------------------------------------------
 * THEME DEPENDENCIES
 * ------------------------------------------------------------------------------------------------------------
 *
 * While the theme tries to keep outside dependencies as small as possible, the theme still uses third-party code
 * to power some of its features. Here is the list of all dependencies:
 *
 * "vendor.js":
 *
 * The vendor.js contains required dependencies. This file is loaded in parallel of the theme file.
 *
 * - custom-elements polyfill (used for built-in elements on Safari - v1.0.0): https://github.com/ungap/custom-elements
 * - web-animations-polyfill (used for polyfilling WebAnimations on Safari 12, this polyfill will be removed in 1 year - v2.3.2): https://github.com/web-animations/web-animations-js
 * - instant-page (v5.1.0): https://github.com/instantpage/instant.page
 * - tocca (v2.0.9); https://github.com/GianlucaGuarini/Tocca.js/
 * - seamless-scroll-polyfill (v2.0.0): https://github.com/magic-akari/seamless-scroll-polyfill
 *
 * "flickity.js": v2.2.0 (with the "fade" package). Flickity is only loaded on demand if there is a product image
 * carousel on the page. Otherwise it is not loaded.
 *
 * "photoswipe": v4.1.3. PhotoSwipe is only loaded on demand to power the zoom feature on product page. If the zoom
 * feature is disabled, then this script is never loaded.
 */



//WhatsApp Button related JS

$('.help-button').on('click', function(){
    $('.help-button-wrapper').toggleClass('expanded');
});

$('.qr-button').on('click', function(){
    $('.qr-img-wrapper').toggleClass('qr-open');
});

$('.wa-button').on('mouseenter', function(){
    $('.wa-wrapper').addClass('wa-open');
});

$('.wa-button').on('mouseleave', function(){
    $('.wa-wrapper').removeClass('wa-open');
});


//WhatsApp Button related JS over



//Change z-index of rewards button
$(document).ready(function() {
    checkElementAvailability('#smile-ui-lite-container', function() {
        // Code to be executed when the element with the specified ID is available
        $('#smile-ui-lite-container').css('z-index', '999998');
    });
});

function checkElementAvailability(selector, callback) {
    if ($(selector).length > 0) {
        // Element is available, execute the callback
        callback();
    } else {
        // Element is not available yet, wait and check again
        setTimeout(function() {
            checkElementAvailability(selector, callback);
        }, 1000); // Adjust the time interval as needed (in milliseconds)
    }
}


//Adding custom class name to apply CSS to newsletter block on home page

$(document).ready(function() {
    checkNewsletterAvailability();
});

function checkNewsletterAvailability() {
    const element = $('.klaviyo-form-RYb3RV');
    if (element.length > 0) {
        // Element is available, execute your code here
        element.closest('.content-box').addClass('klaviyo-news-letter');
    } else {
        // Element is not available yet, wait and check again
        setTimeout(checkNewsletterAvailability, 1000); // Adjust the time interval as needed (in milliseconds)
    }
}


/* START - Only display DE, US & GB FOR Orbe Popup */
document.addEventListener('DOMContentLoaded', function() {
    // Get all <li> elements
    const liElements = document.querySelectorAll('#orbeCountryList li');

    // Loop through the <li> elements
    liElements.forEach(function(liElement) {
        // Get the <a> element within each <li>
        const aElement = liElement.querySelector('a');

        // Check if the <a> element has data-country attribute not equal to "DE" or "US"
        if (aElement && aElement.getAttribute('data-country') !== 'DE' && aElement.getAttribute('data-country') !== 'US' && aElement.getAttribute('data-country') !== 'GB') {
            // Remove the <li> element if the condition is met
            liElement.remove();
        }
    });
});
/* END - Only display DE, US & GB FOR Orbe Popup */


/* START - Open Orbe Popup */
document.addEventListener('DOMContentLoaded', function() {
  // Get the element by its ID
  const btnChangeCountry = document.getElementById('btn-change-country');
  
  // Add a click event listener to the element
  btnChangeCountry.addEventListener('click', function() {
      // Your JavaScript code to execute when the element is clicked
      orbito.openAndRefreshModal();
      // You can perform any other actions you want here
  });
});
/* END - Open Orbe Popup */


/* START - Change country on selection change */
document.addEventListener('DOMContentLoaded', function() {
    const btnShopNowOrbe = document.getElementById('md-btn__form__onSubmit');

    btnShopNowOrbe.addEventListener('click', function(event) {
        
        const formSelectCountry = document.getElementById('md-form__select__country');
        const dataCountryValue = formSelectCountry.getAttribute('data-value');

        console.log('data-country value:', dataCountryValue);

        const imgChangeCountryElementUs = document.getElementById('img-change-country-us');
        const imgChangeCountryElementDe = document.getElementById('img-change-country-de');
        const imgChangeCountryElementUk = document.getElementById('img-change-country-uk');
        imgChangeCountryElementUs.css('display', 'none');
        imgChangeCountryElementDe.css('display', 'none');
        imgChangeCountryElementUk.css('display', 'none');
        if (dataCountryValue == "GB") {
            imgChangeCountryElementDe.style.display = 'block';
        } else if (dataCountryValue == "DE") {
            imgChangeCountryElementDe.style.display = 'block';
        } else {
            imgChangeCountryElementUs.style.display = 'block';
        }

        // Hide Pop up on next reload
        const closeButton = document.querySelector('.md-modal-closeButtonAction');
        // Check if the button was found
        if (closeButton) {
            // Programmatically click the button
            closeButton.click();
        }
    });
});
/* END - Change country on selection change */

/* START - Change country name */
document.addEventListener('DOMContentLoaded', function() {
    var ulElement = document.getElementById('orbeCountryList');
    if (ulElement) {
        var deLink = document.querySelector('a[data-country="DE"]');
        if (deLink) {
            var spanElement = deLink.querySelector('.md-form__select__span');
            if (spanElement) {
                spanElement.textContent = 'Deutschland (€)';
            }
        }

        var usLink = document.querySelector('a[data-country="US"]');
        if (usLink) {
            var spanElement = usLink.querySelector('.md-form__select__span');
            if (spanElement) {
                spanElement.textContent = 'USA ($)';
            }
        }

        var gbLink = document.querySelector('a[data-country="GB"]');
        if (gbLink) {
            var spanElement = gbLink.querySelector('.md-form__select__span');
            if (spanElement) {
                spanElement.textContent = 'Europe & UK (€)';
            }
        }
    }


    var buttonUSElement = document.querySelector('button#md-form__select__country[data-value="US"]');
    if (buttonUSElement) {
        var spanElement = buttonUSElement.querySelector('.md-form__select__span');
        if (spanElement) {
            spanElement.textContent = 'USA ($)';
        }
    }
    var buttonDEElement = document.querySelector('button#md-form__select__country[data-value="DE"]');
    if (buttonDEElement) {
        var spanElement = buttonDEElement.querySelector('.md-form__select__span');
        if (spanElement) {
            spanElement.textContent = 'Deutschland (€)';
        }
    }
    var buttonGBElement = document.querySelector('button#md-form__select__country[data-value="GB"]');
    if (buttonGBElement) {
        var spanElement = buttonGBElement.querySelector('.md-form__select__span');
        if (spanElement) {
            spanElement.textContent = 'Europe & UK (€)';
        }
    }
    
});
