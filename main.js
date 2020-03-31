
// primo click, appare il menù;

$('.hamburger-menu').fadeOut();

var statoHamburgerMenu = 0;

$ ('ul').click(
  function(){
    if(statoHamburgerMenu === 0) {
      $('.hamburger-menu').fadeIn(2000);
      statoHamburgerMenu = 1;
    }else{
      $('.hamburger-menu').fadeOut(2000);
      statoHamburgerMenu = 0;
    }
  }
);






// se cliccko che è già visibile, invece scompare.
