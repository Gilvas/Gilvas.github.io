(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'auto');

// Standard page view: localhost:5000/:id
ga('send', {
    hitType: 'pageview',
    page: location.pathname
    // 'hitCallback': function() {
    //     alert('Sent!!');
    // }
});

// Menu: Entre em Contato
$('a[href="http://www.dp6.com.br/contato/"]').click(function(e) { 
    e.preventDefault();
    var href = this.href;
    var linkClicked = false;

    var clickLink = function() {
        if (href && !linkClicked) {
            linkClicked = true;
            window.location.href = href;
        }
    };

    setTimeout(clickLink, 500);

    ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo', {
        'transport': 'beacon'
    });
});

// Menu: Download PDF
$('a[href="http://autos.dp6.com.br/autos_revista_vfinal.pdf"]').click(function(e) { 
    e.preventDefault();
    var href = this.href;
    var linkClicked = false;

    var clickLink = function() {
        if (href && !linkClicked) {
            linkClicked = true;
            window.location.href = href;
        }
    };

    setTimeout(clickLink, 500);
    
    ga('send', 'event', 'menu', 'download_pdf', 'download_pdf', {
        'transport': 'beacon'
    });
});

// Path: analise.html 
// Lorem Card
$('div[data-name="Lorem"]').click(function(e) {
    e.preventDefault();
    ga('send', 'event', 'analise', 'ver_mais', 'Lorem');     
});
// Ipsum Card
$('div[data-name="Ipsum"]').click(function(e) {
    e.preventDefault();
    ga('send', 'event', 'analise', 'ver_mais','Ipsum');
});
// Dolor Card
$('div[data-name="Dolor"]').click(function(e) {
    e.preventDefault();
    ga('send', 'event', 'analise', 'ver_mais','Dolor');
});

// Path: sobre.html
// Name input
$('#nome').on('change', function () {
    if( this.value == 0 ) {
        return;
      }
    ga('send', 'event', 'contato', 'nome','preencheu');
});
// Email input
$('#email').on('change', function () {
    if( this.value == 0 ) {
        return;
      }
    ga('send', 'event', 'contato', 'email','preencheu');
});
// Cell number input
$('#telefone').on('change', function () {
    if( this.value == 0 ) {
        return;
      }
    ga('send', 'event', 'contato', 'telefone','preencheu');
});
// Accept input
$('#aceito').on('change', function () {
    if ( this.checked ) {
        ga('send', 'event', 'contato', 'aceito','preencheu');
    }
});
// Submit Button Input
$('.contato button[type="submit"]').click(function (e) {  
    e.preventDefault();

    $('.contato button[type="submit"]').submit();
    
    ga('send', 'event', 'contato', 'enviado', 'enviado', {
        'tansport': 'beacon'
    });
});
