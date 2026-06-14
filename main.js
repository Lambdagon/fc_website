function credit(name, imageUrl, role, socials, font="Default") {
    var credUnit = document.createElement("div"); credUnit.classList = "credunit";
    var credTitle = document.createElement("div"); credTitle.classList = "credtitle";
    var credTitleText = document.createElement("span"); credTitleText.classList = "credtitletext" + " " + font; credTitleText.innerText = name;
    var breaklol = document.createElement("br");
    var credImg = document.createElement("div"); credImg.classList = "credimg"; credImg.style.backgroundImage = "url('"+ imageUrl +"')"
    var credRole = document.createElement("div"); credRole.classList = "credrole"; credRole.innerText = role;
    var credSocials = document.createElement("div"); credSocials.classList = "credsocials";
    // do socials shit here
    credTitle.appendChild(credTitleText)
    credUnit.appendChild(credTitle); credUnit.appendChild(breaklol); credUnit.appendChild(credImg); credUnit.appendChild(credRole); // credSocials.appendChild(credSocials);
    return credUnit;
}

function blogGoback() {
    location.hash = "#blog";
    location.search = "";
}