$(function(){
    let page = 0;
    $('#fetch').on('click', function(e){
        e.preventDefault();

        let word = $("input#searchBar").val();
        let searchWord = word.replace(/ /g,"+");

        $.get(
            // the endpoint
            'https://itunes.apple.com/search',
            // query params
            {
                term: searchWord,
                media: 'music',
                entity: 'musicArtist, musicTrack',
                limit: 10,
            },
            // function to call when a result is returned
            function(data){
                // data is what you see in postman
                for(i in data.results){
                    $('#show').append(`
                        <div class="card" style="width: 18rem;">
                            <img src="${data.results[i].artworkUrl100}" class="card-img-top" alt="image artwork">
                            <div class="card-body">
                                <h5>${data.results[i].trackName}</h5>
                                <p class="card-text">By: ${data.results[i].artistName}</p>
                            </div>
                        </div>
                        <hr>
                   `);
                }
            },
            // return type expected
            'json' // or html, text, xml
        )
    });

    // this code after the request would run before the results are returned
})

