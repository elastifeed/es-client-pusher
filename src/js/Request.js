// import fetch from 'fetch';


function buildPageObject(url){
    return {
        url: url,
        screenshot: 'http://placehold.it/500x500'
    };
}

function buildFeedObject(url){
    return {
        url: url,
        posts: [
            {
                title: 'RSS-Item Title 1',
                content: 'Lorem ipsum dolor sit amet, consetetur'
            },
            {
                title: 'RSS-Item Title 2',
                content: 'Lorem ipsum dolor sit amet, consetetur'
            },
            {
                title: 'RSS-Item Title 3',
                content: 'Lorem ipsum dolor sit amet, consetetur'
            }
        ]
    }
}


export default function(url){

    // @todo Sends to central application to detemine type and get all necessary data
    // fetch.fetchUrl(url, this.processRequest);
    let isFeed = Math.random()*10 > 5; // tmp
    isFeed = false;


    // Output
    if (isFeed){
        return {
            type: 'feed',
            data: buildFeedObject(url)
        }
    }
    else{
        return {
            type: 'page',
            data: buildPageObject(url)
        }
    }
};