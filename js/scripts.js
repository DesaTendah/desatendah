/*!
* Start Bootstrap - Clean Blog v6.0.8 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/

let API_KEY= 'AIzaSyDf4DuhCO6A_daXIiDQTMuaGn195IvEsxs'
let BLOG_ID = '3713311454211046969'

URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?fetchImages=true&key=${API_KEY}`


$(document).ready(function() {
    $.ajax({
        url: URL,
    
        dataType: "jsonp",
        success: function( response ) {
            // console.log( response.items); // server response
            for (let data = 0; data < response.items.length; data++) {
                const element = response.items[data];
                console.log( element.url)
                console.log( element.title)
                console.log( element.updated)
                console.log( element.images[0].url)
                console.log( element)

                div = document.createElement('div')
                div.setAttribute('id',`preview${data}`)
                div.setAttribute('class','post-preview')

                anchor = document.createElement('a')
                anchor.setAttribute('href', element.url)
                anchor.setAttribute('class','post-title')
                anchor.innerHTML = element.title


                img = document.createElement('img')
                img.setAttribute('class','img-thumbnail')
                img.setAttribute('src', element.images[0].url)

                p = document.createElement('p')
                p.setAttribute('class','post-meta')
                p.innerHTML = element.updated

                $('#berita').append(div)
                $(`#preview${data}`).append(anchor)
                $(`#preview${data}`).append("<br></br>")
                $(`#preview${data}`).append(img)
                $(`#preview${data}`).append(p)
                $('#berita').append("<hr class='my-4' />")


                
            }
        }
    
    });
});

window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})
