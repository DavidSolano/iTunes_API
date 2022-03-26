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
                        <h3>${data.results[i].trackName}</h3>
                        <p>By: ${data.results[i].artistName}</p>
                        <br>
                   `);
                }
            },
            // return type expected
            'json' // or html, text, xml
        )
    });

    // this code after the request would run before the results are returned
})
