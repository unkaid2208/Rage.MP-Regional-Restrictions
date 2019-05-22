var geoip = require('geoip-lite');

var country_ban = [
    "US",
    "A1",
    "A2",
    "O1",
    "TR",
    "NL",
    "DE"
];

mp.events.add('playerJoin', player => {
    var allowed = true;
    var geo = geoip.lookup(player.ip);
    var countryID = geo.country;

    if(country_ban.indexOf(countryID) >= 0) {
        allowed = false; 
    }
    if(!allowed) {
        console.log(`[CountryBan Check]: Player: ${player.ip} (${countryID}) can not join due to regional restrictions.`);
        player.kick('!');
    } 
});
