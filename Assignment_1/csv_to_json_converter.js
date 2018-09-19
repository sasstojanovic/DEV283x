var fs = require("fs");
var options = {
    encoding: "utf8",
    flag: "r"
};

fs.readFile("customer-data.csv", options, function (err, data) {
    if (err) {
        console.error("Failed to open CSV file");
    } else {
        console.log("CSV Loaded");

        var all = [];
        var properties = null;
        var lines = data.split(/\r?\n|\r/);

        for (var i = 0; i < lines.length - 1; i++) {
            if (i === 0) {
                properties = lines[0].split(",");
            } else {
                var tempObj = {};
                var tempValues = lines[i].split(",");

                for (var ii = 0; ii < properties.length; ii++) {
                    var tempValues = lines[i].split(",");
                    tempObj[properties[ii]] = tempValues[ii];
                }

                all.push(tempObj);
            }
        }

        var dataToWrite = JSON.stringify(all, null, 4);

        fs.writeFile("customer-data.json", dataToWrite, {
            encoding: "utf8",
            flag: "w"
        }, function (err) { 
            if (err) {
                console.error("Failed to write JSON file");
            } else { 
                console.log("JSON Saved");
            }
        });

    }
});