let allPosts = theData;

console.log(allPosts[0]);
// console.log(allPosts[0].canonical_url)
console.log(allPosts[0].content.rendered)
// console.log("image url: ", allPosts[0].jetpack_featured_media_url)
//console.log("the array length", allPosts.length)



// Target DOM elements
// Populate DOM elements with API data

let theHeadline = getElement(".headline")
let headlineImg = getElement("#headline-image")
theHeadline.innerHTML = allPosts[0].excerpt.rendered
headlineImg.src = allPosts[0].jetpack_featured_media_url

// Work with remaining articles
let featuredNews = getElement("#featured-News")

for(let i = 1; i < allPosts.length; i++){
    // console.log(allPosts[i].excerpt.rendered)
    featuredNews.innerHTML += `<article class="card">
                                <img src="${allPosts[i].jetpack_featured_media_url}" 
                                    class="featured__image" alt="article image">
                                <div class="pt-half pb-half">
                                    ${allPosts[i].excerpt.rendered}
                                </div> 

                                <div> <a href="${allPosts[i].guid.rendered}"
                                            class="fw-bold-one">
                                        Read full >> 
                                    </a>
                                </div>
                            </article>`
}


// Function to get DOM elements
function getElement(ident){
    return document.querySelector(ident)
}