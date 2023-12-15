const fs = require('fs');

fs.readFile('test.txt', 'utf8', function(err, data) {
    if (err) {
        console.log('An error occured while reading the file');
        console.log(err);
    } else {
        // Remove extra spaces
        let cleanedData = data.replace(/\s+/g, ' ').trim();

        // Write cleaned data back to the file
        fs.writeFile('test.txt', cleanedData, 'utf8', function(err) {
            if (err) {
                console.log('An error occured while writing to the file');
                console.log(err);
            } else {
                console.log('File has been cleaned');
            }
        });
    }
});
