var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var user = req.body;

        var diff=0;
        console.log(user);

        for (var i in user.scores) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        for(var i in user.scores) {
            let tempDiff = user.scores[i] - friends[0].scores[i];
            diff += Math.abs(tempDiff);
        }
        console.log("Diff: " + diff);


    });
}
