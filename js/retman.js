function loadPersonalData() {
    let curYear = new Date().getFullYear();
    let wasBorn = curYear - 1991;
    let amateurYears = curYear - 2012;
    let commercial = curYear - 2014;
    $('#born').text(wasBorn);
    $('#tool').text('IntelliJ IDEA');
    $('#movie').text('Scarface (1983)');
    $('#lang').text('Java');
    $('#amateur').text(amateurYears);
    $('#commercial').text(commercial);
}

function loadPage(pageType, lang){

    loadDefaultPage(lang);

    setTimeout(function(){
        switch(pageType){
            case "about":
                loadAboutMePage(lang)
                break;
            case "after":
                loadAfterHoursPage(lang);
                break
            case "blog":
                loadBlogPage(lang);
                break;
            case "contact":
                loadContactPage(lang);
                break;
            default:
                loadWelcomePage(lang);
                break
        }
        loadPersonalData();
    }, 2000)
}

function loadDefaultPage(lang) {
    $("#content").load(lang === 'pl' ? 'defaultContent.html' : "htmls/defaultContent.html");
}

function loadAboutMePage(lang){
    $("#content").load(lang === 'pl' ? 'about.html' : "htmls/about.html");
}

function loadAfterHoursPage(lang){
    $("#content").load(lang === 'pl' ? 'after-hours.html' : "htmls/after-hours.html");
}

function loadBlogPage(lang){
    $("#content").load(lang === 'pl' ? 'blog.html' : "htmls/blog.html");
}

function loadContactPage(lang){
    $("#content").load(lang === 'pl' ? 'contact.html' : "htmls/contact.html");
}

function loadWelcomePage(lang){
    $("#content").load(lang === 'pl' ? 'welcome.html' : "htmls/welcome.html");
}

function submitAndSendMail(){
    console.log("mail sending....")
}