function letterFinder (word, match){
    for (var i = 0; i < match.length; i++ )
        if (match[i] == word) {
            console.log('found the ',word, 'at ', i);
        }
        else {
            console.log("---No match found at", i)
        }
}

letterFinder("test", "t")