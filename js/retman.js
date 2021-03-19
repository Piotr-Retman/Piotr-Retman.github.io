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

function loadPage(pageType){

    loadDefaultPage();

    setTimeout(function(){
        switch(pageType){
            case "about":
                loadAboutMePage()
                break;
            case "after":
                loadAfterHoursPage();
                break
            case "blog":
                loadBlogPage();
                break;
            case "contact":
                loadContactPage();
                break;
            default:
                loadWelcomePage();
                break
        }
        loadPersonalData();
    }, 2000)
}

function loadDefaultPage() {
    $("#content").load("htmls/defaultContent.html");
}

function loadAboutMePage(){
    $("#content").load("htmls/about.html");
}

function loadAfterHoursPage(){
    $("#content").load("htmls/after-hours.html");
}

function loadBlogPage(){
    $("#content").load("htmls/blog.html");
}

function loadContactPage(){
    $("#content").load("htmls/contact.html");
}

function loadWelcomePage(){
    $("#content").load("htmls/welcome.html");
}

function submitAndSendMail(){
    console.log("mail sending....")
}