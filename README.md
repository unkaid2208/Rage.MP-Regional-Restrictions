# Rage.MP-Regional-Restrictions

Simple solution to check incoming connections from unwanted countries.

I. Install geoip-Lite: npm i geoip-lite

II. Edit country_ban list with the specified country codes https://dev.maxmind.com/geoip/legacy/codes/iso3166/

III. Save and put this script to "server-files\packages" and add require('./countryBan'); in index.js
