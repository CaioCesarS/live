function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function abrirDropDownMenu() {
    event.preventDefault();
    $(".text-dropdown-menu").toggle();
}

function openNavPro() {
  document.getElementById("mySidenavPro").style.width = "350px";
}

function closeNavPro() {
  document.getElementById("mySidenavPro").style.width = "0";
}