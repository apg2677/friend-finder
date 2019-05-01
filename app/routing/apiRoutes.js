var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var user = req.body;
        var friendDiffs = [];
        var diff = 0;
        var maxIndex=0;
        console.log(user);

        for (var i in user.scores) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        for (var i in friends) {
            for (var j in user.scores) {
                let tempDiff = user.scores[j] - friends[i].scores[j];
                diff += Math.abs(tempDiff);
            }
            console.log(friends[i].name + " Diff: " + diff);
            friendDiffs.push(diff);


        }
        console.log(friendDiffs);
        // var max = Math.max(...friendDiffs);
        for (var i in friendDiffs) {
            if(friendDiffs[i]>friendDiffs[i+1]) {
                maxIndex = i;
            }
        }

        console.log("Max : " + maxIndex);
        console.log("Max index: " + maxIndex);

    });
}
