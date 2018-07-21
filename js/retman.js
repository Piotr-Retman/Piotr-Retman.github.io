let actualPageLoaded = '';
let pagesList = ['who', 'what', 'how', 'contact'];
let widthOfBrowserWindow = $(window).width();
let expanded = false;
let lang = '';

function showMeWelcomeBanner() {

    if (widthOfBrowserWindow < 850) {
        $('#navigation').hide();
        $('#footer').hide();
        $('#vertical-expand').removeClass('hidden-div');
        $('#navigation').removeClass('topnav');
        $('#navigation').addClass('vertical-menu');
    }
    setTimeout(function () {
        $('#hello-div').removeClass('hidden-div');
        $('#hello-div').addClass('animated flipInY')
        setTimeout(function () {
            $('#hello-div').removeClass('flipInY');
            $('#hello-div').addClass('animated bounceIn')
        }, 2000)
    }, 1000)

}

function showMePage(language) {
    lang = language;
    setTimeout(function () {
        $('#big-welcome').addClass('animated rollOut');
        $('#hello-container').addClass('hidden-div');
        setTimeout(function () {
            $('#big-welcome').addClass('hidden-div');
            $('#hello-container').addClass('hidden-div');
            setTimeout(function () {
                $('#container').addClass('animated flipInY');
                $('#footer').removeClass('hidden-div');
                $('#container').removeClass('hidden-div');
                $('#footer').addClass('animated flipInY');
                setTimeout(function () {
                    if (lang === 'en') {
                        $('#navigation').append(`<li id="mainMenuItem" onclick="loadPage('main')">piotrretmanczyk.pl</li>
            <li id="whoMenuItem" onclick="loadPage('who')">Who am I?</li>
            <li id="whatMenuItem" onclick="loadPage('what')">What do I do?</li>
            <li id="howMenuItem" onclick="loadPage('how')">How did I get here?</li>
            <li id="contactMenuItem" onclick="loadPage('contact')">How to meet me?</li>`)
                    } else {
                        $('#navigation').append(`<li id="mainMenuItem" onclick="loadPage('main')">piotrretmanczyk.pl</li>
            <li id="whoMenuItem" onclick="loadPage('who')">Kim jestem?</li>
            <li id="whatMenuItem" onclick="loadPage('what')">Co robię?</li>
            <li id="howMenuItem" onclick="loadPage('how')">Jak do tego doszedłem?</li>
            <li id="contactMenuItem" onclick="loadPage('contact')">Jak pogadać?</li>`)
                    }
                    switch (lang) {
                        case 'pl':
                            loadPage('main_pl');
                            break;
                        case 'en':
                            loadPage('main_en');
                            break;
                    }
                }, 500)
            }, 500);
        }, 500)
    }, 1000);
}


function loadPage(nameOfPage) {
    actualPageLoaded = nameOfPage;
    let page = '';
    setTimeout(function () {
        $('#content').addClass('hidden-div');
        switch (nameOfPage) {
            case 'main_pl':
                $("#content").load("htmls/main-page.html");
                break;
            case 'main_en':
                $("#content").load("html_en/main-page.html");
                break;
            case 'who':
                if (lang === 'en') {
                    page = "html_en/who.html";
                } else {
                    page = "htmls/who.html";
                }
                $("#content").load(page, function () {
                    loadPersonalData();
                });
                break;
            case 'what':
                if (lang === 'en') {
                    page = "html_en/what.html";
                } else {
                    page = "htmls/what.html";
                }
                $('#typewriter').remove();
                $("#content").load(page, function () {
                    setTimeout(function () {
                        $('#typewriter').append('<div class="console-header">retman@cmd: <div class="command">langs --everyday --work</div></div>');
                        if (lang === 'en') {
                            $('#typewriter').append('<h1 id="first-header">In everyday coding I use languages like ' +
                                'Java or JS.</h1>');
                        } else {
                            $('#typewriter').append('<h1 id="first-header">Na codzień używam języków programowania ' +
                                'takich jak Java czy JS.</h1>');
                        }
                        setTimeout(function () {
                            $('#first-header').css('border-right', '0px');
                            setTimeout(function () {
                                $('#typewriter').append(' <div class="console-header">retman@cmd: <div class="command">langs --private</div></div>');
                                if (lang === 'en') {
                                    $('#typewriter').append('<h1 id="sec-head">Additionally I write code in C++.</h1>');
                                } else {
                                    $('#typewriter').append('<h1 id="sec-head">Dodatkowo w domu programuję także dla przyjemności w języku C++.</h1>');
                                }
                                setTimeout(function () {
                                    $('#sec-head').css('border-right', '0px');
                                }, 7000);
                                setTimeout(function () {
                                    $('#sec-head').css('border-right', '0px');
                                    $('#typewriter').append(' <div class="console-header">retman@cmd: <div class="command">langs --happened</div></div>');
                                    if (lang === 'en') {
                                        $('#typewriter').append('<h1 id="third-head">I wrote some stuff even in Python and PHP.</h1>');
                                    } else {
                                        $('#typewriter').append('<h1 id="third-head">Pisałem także w językach takich jak Python czy PHP.</h1>');
                                    }
                                    setTimeout(function () {
                                        $('#third-head').css('float', 'left');
                                    }, 500);
                                }, 8000);
                            }, 6000);
                        }, 6000);
                    }, 1500);
                });
                break;
            case 'how':
                if (lang === 'en') {
                    page = "html_en/how.html";
                } else {
                    page = "htmls/how.html";
                }
                $("#content").load(page, function () {
                    $('.timeline').timeline();
                    setTimeout(function () {
                        $('.timeline').removeClass('hidden-div');
                        $('.timeline__content').each(function () {
                            $(this).addClass('animated flipInY');
                        })
                    }, 2000);
                });
                break;
            case 'contact':
                if (lang === 'en') {
                    page = "html_en/contact.html";
                } else {
                    page = "htmls/contact.html";
                }
                $("#content").load(page, function () {
                    setTimeout(function () {
                        $('.contact-possibilities div img').each(function () {
                            $(this).removeClass('hidden-div');
                            $(this).addClass('animated jackInTheBox');
                        })
                    }, 1500);
                });
                break;

        }
        setTimeout(function () {
            $('#content').removeClass('hidden-div');
            $('#content').addClass('animated fadeInRight');
            activateMenuItem(nameOfPage);
        }, 500);
    }, 500);
}

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

window.addEventListener('wheel', function (e) {
    if (widthOfBrowserWindow > 800) {
        let indexOfActualPage = pagesList.indexOf(actualPageLoaded);
        if (e.deltaY < 0) {
            indexOfActualPage--;
            if (indexOfActualPage === -1) {
                loadPage(pagesList[3]);
            } else {
                loadPage(pagesList[indexOfActualPage]);
            }
        }
        if (e.deltaY > 0) {
            indexOfActualPage++;
            if (indexOfActualPage === 4) {
                loadPage(lang === 'en' ? 'main_en' : 'main_pl');
            } else {
                loadPage(pagesList[indexOfActualPage]);
            }
        }
    }
});

function activateMenuItem(actualPage) {
    pagesList.forEach(pageName => {
        if (pageName === actualPage) {
            $('#' + actualPage + 'MenuItem').addClass('active');
        } else {
            $('#' + pageName + 'MenuItem').removeClass('active');
        }
    });
}

function expandOrHideMenu() {
    $('#navigation').slideToggle();
}

function fitContent() {
    widthOfBrowserWindow = $(window).width();
    if (widthOfBrowserWindow < 850) {
        $('#navigation').hide();
        $('#footer').hide();
        $('#vertical-expand').removeClass('hidden-div');
        $('#navigation').removeClass('topnav');
        $('#navigation').addClass('vertical-menu');
    } else {
        $('#navigation').show();
        if (actualPageLoaded.length > 0) {
            $('#footer').show();
        }
        $('#vertical-expand').addClass('hidden-div');
        $('#navigation').addClass('topnav');
        $('#navigation').removeClass('vertical-menu');
    }
}