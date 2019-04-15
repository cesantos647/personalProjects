var cheerio = require('cheerio');

var fs = require('fs'); 

fs.readFile('/Users/arcma/Desktop/GitHub/Scrapper/ig_followers.html', function(err, data) {

    if (err) throw err;

    var $ = cheerio.load(data);

    var arr = $('a.FPmhX.notranslate._0imsa').get();

    var names = [];

    for(i=0; i<arr.length; i++) {

    	names.push(arr[i].attribs.title);

    }

   fs.appendFileSync('followers.txt', names);

});



fs.readFile('/Users/arcma/Desktop/GitHub/Scrapper/ig_following.html', function(err, data) {

    if (err) throw err;

    var $ = cheerio.load(data);

    var arr = $('a.FPmhX.notranslate._0imsa').get();

    var names = [];

    for(i=0; i<arr.length; i++) {

    	names.push(arr[i].attribs.title);

    }

    fs.appendFileSync('following.txt', names);

});


