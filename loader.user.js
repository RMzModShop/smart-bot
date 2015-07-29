// ==UserScript==
// @name        RageLoader
// @namespace   RageLoader
// @description Grabs latest versions of the bot scripts automatically.
// @include     http://agar.io/
// @version     1
// @grant       none
// @editor      http://youtube.com/Ragemoddzz
// ==/UserScript==

var aposLoaderVersion = 1;

var sha = "efde0488cc2cc176db48dd23b28a20b90314352b";
function getLatestCommit() {
    window.jQuery.ajax({
            url: "https://api.github.com/repos/rmzmodshop/smart-bot/git/refs/heads/master",
            cache: false,
            dataType: "jsonp"
        }).done(function(data) {
            console.dir(data["data"])
            console.log("hmm: " + data["data"]["object"]["sha"]);
            sha = data["data"]["object"]["sha"];
            ;

            window.jQuery.get('https://raw.githubusercontent.com/rmzmodshop/smart-bot/master/launcher.user.js?' + Math.floor((Math.random() * 1000000) + 1), function(data) {
                var latestVersion = data.replace(/(\r\n|\n|\r)/gm, "");
                latestVersion = latestVersion.substring(latestVersion.indexOf("// @version") + 11, latestVersion.indexOf("// @grant"));

                latestVersion = parseFloat(latestVersion + 0.0000);
                var script1 = "https://cdn.rawgit.com/rmzmodshop/smart-bot/" + sha + "/launcher.user.js";
                console.log("Script: " + script1);
                window.jQuery("body").append('<script type="text/javascript" src="' + script1 + '"></script>');
                
            });
            window.jQuery.get('https://raw.githubusercontent.com/rmzmodshop/smart-bot/master/bot.user.js?' + Math.floor((Math.random() * 1000000) + 1), function(data) {
                var latestVersion = data.replace(/(\r\n|\n|\r)/gm, "");
                latestVersion = latestVersion.substring(latestVersion.indexOf("// @version") + 11, latestVersion.indexOf("// @grant"));

                latestVersion = parseFloat(latestVersion + 0.0000);
                var script2 = "https://cdn.rawgit.com/rmzmodshop/smart-bot/" + sha + "/bot.user.js";
                console.log("Script: " + script2);
                window.jQuery("body").append('<script type="text/javascript" src="' + script2 + '"></script>');
            });

            window.jQuery.get('https://raw.githubusercontent.com/rmzmodshop/smart-bot/master/loader.user.js?' + Math.floor((Math.random() * 1000000) + 1), function(data) {
                var latestVersion = data.replace(/(\r\n|\n|\r)/gm, "");
                latestVersion = latestVersion.substring(latestVersion.indexOf("// @version") + 11, latestVersion.indexOf("// @grant"));

                latestVersion = parseFloat(latestVersion + 0.0000);
                var myVersion = parseFloat(aposLoaderVersion + 0.0000);

                if (latestVersion > myVersion) {
                    update("aposLoader", "loader.user.js", "https://github.com/rmzmodshop/smart-bot/blob/master/loader.user.js/");
                }
                console.log('Current loader.user.js Version: ' + myVersion + " on Github: " + latestVersion);
            });
        }).fail(function() {});
}

getLatestCommit();
