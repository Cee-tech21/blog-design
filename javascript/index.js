let allPosts = theData;

callApiCreateArticles()

console.log(allPosts[0]);
// console.log(allPosts[0].canonical_url)
// console.log(allPosts[0].content.rendered)
// console.log("image url: ", allPosts[0].jetpack_featured_media_url)

// Get DOM elements
let theHeadline = getElement(".headline")
let headlineImg = getElement("#headline-image")
let featuredNews = getElement("#featured-News")


// Populate DOM elements with API data
async function callApiCreateArticles(){
    let theApiData = await makeApiCall();

    console.log("latest api data: ", theApiData)
    let headlineCreated = await createHeadlineNews(theApiData)
    let featuredCreated = await createFeaturedNews(theApiData)
}

// headline article
async function createHeadlineNews(freshData){
    theHeadline.innerHTML = freshData[0].excerpt.rendered
    theHeadline.innerHTML += `<div class="pt-half"> 
                                <a href="${freshData[0].guid.rendered}"
                                            class="fw-bold-one">
                                        Read full >> 
                                </a>
                            </div>`
    headlineImg.src = freshData[0].jetpack_featured_media_url
}

// Work with remaining articles for featured news
async function createFeaturedNews(freshData){
    for(let i = 1; i < allPosts.length; i++){
    // console.log(allPosts[i].excerpt.rendered)
    featuredNews.innerHTML += `<article class="card">
                                <img src="${freshData[i].jetpack_featured_media_url}" 
                                    class="featured__image" alt="article image">
                                <div class="pt-half pb-half">
                                    ${freshData[i].excerpt.rendered}
                                </div> 

                                <div> <a href="${freshData[i].guid.rendered}"
                                            class="fw-bold-one">
                                        Read full >> 
                                    </a>
                                </div>
                            </article>`
    }
}


async function makeApiCall() {
    let response = await fetch("https://techcrunch.com/wp-json/wp/v2/posts");  
    let data = await response.json()
    return data
}

// Function to get DOM elements
function getElement(ident){
    return document.querySelector(ident)
}