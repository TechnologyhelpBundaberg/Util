!function(e){function t(e,t){return function(o){o.innerHTML="",o.disabled=!1;var l=document.createElement("option");l.value="",l.innerText="None",l.selected=!0,o.appendChild(l),t.forEach(function(t){var l=document.createElement("option");l.value=t.id,l.innerText=(e?"#":"")+t.name,o.appendChild(l)})}}function o(e){var t,o=document.querySelector("#tttie-dash-p").value,l=document.querySelector("#tttie-dash-mod").value,r=document.querySelector("#tttie-dash-fm").value;for(var a of document.querySelectorAll("select.tttie-dashboard-channel-picker#tttie-dash-fc option"))1==a.selected&&(t=a.value);var n,c,d=document.querySelector("#tttie-dash-wm").value;for(var a of document.querySelectorAll("select.tttie-dashboard-channel-picker#tttie-dash-wc option"))1==a.selected&&(n=a.value);for(var a of document.querySelectorAll("select.tttie-dashboard-channel-picker#tttie-dash-ac option"))1==a.selected&&(ac=a.value);for(var a of document.querySelectorAll("select.tttie-dashboard-role-picker#tttie-dash-mr option"))1==a.selected&&(c=a.value);e({prefix:o,modRole:l,farewellMessage:r,farewellChannelId:t,greetingMessage:d,greetingChannelId:n,agreeChannel:ac,memberRole:c})}function l(e){var t=document.querySelector("#tttie-dash-p"),o=document.querySelector("#tttie-dash-mod"),l=document.querySelector("#tttie-dash-fm"),r=document.querySelector("#tttie-dash-wm");document.querySelectorAll("select.tttie-dashboard-channel-picker > option"),document.querySelectorAll("select.tttie-dashboard-role-picker > option");for(var a of(t.value=e.prefix||"",o.value=e.modRole||"",l.value=e.farewellMessage||"",r.value=e.greetingMessage||"",document.querySelectorAll("select.tttie-dashboard-channel-picker#tttie-dash-fc option")))a.value===e.farewellChannelId&&(a.selected=!0);for(var a of document.querySelectorAll("select.tttie-dashboard-channel-picker#tttie-dash-wc option"))a.value===e.greetingChannelId&&(a.selected=!0);for(var a of document.querySelectorAll("select.tttie-dashboard-channel-picker#tttie-dash-ac option"))a.value===e.agreeChannel&&(a.selected=!0);for(var a of document.querySelectorAll("select.tttie-dashboard-role-picker#tttie-dash-mr option"))a.value===e.memberRole&&(a.selected=!0);t.disabled=!1,o.disabled=!1,l.disabled=!1,r.disabled=!1}window.addEventListener("load",function(){var r=document.querySelectorAll("select.tttie-dashboard-channel-picker"),a=document.querySelectorAll("select.tttie-dashboard-role-picker");e.ttbot.bindToSaveButton(document.querySelector("a.tttie-linkbutton#save"),l,o),e.ttbot.bindToResetButton(document.querySelector("a.tttie-linkbutton#reset"),l),e.ttbot.getAvailableChannels().then(function(o){r.forEach(t(!0,o)),e.ttbot.getAvailableRoles().then(function(o){a.forEach(t(!1,o.filter(function(t){return t.id!==e.ttbot.guildId})))})}).then(function(){e.ttbot.getConfig().then(l)})})}(window);