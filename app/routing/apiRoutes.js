var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var user = req.body;
        var friendDiffs = [];
        var diff = 0;
        // var maxIndex=0;
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
            diff=0;

        }
        console.log(friendDiffs);
        var max = Math.min(...friendDiffs);
      
        console.log("Max : " + max);
        var maxIndex = friendDiffs.indexOf(max);
        console.log("Max index: " + maxIndex);
        console.log("Best Friend: " + JSON.stringify(friends[maxIndex]));
        res.send(friends[maxIndex]);

    });
}
