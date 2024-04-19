function searchROMs() {
  var input, filter, roms, romBox, romName, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.trim().toUpperCase();
  roms = document.getElementsByClassName('rom-box');

  if (filter.trim() === '') {
    for (var i = 0; i < roms.length; i++) {
        roms[i].style.display = 'none';
    }
    return;
}

  for (i = 0; i < roms.length; i++) {
    romBox = roms[i].getElementsByClassName('rom-info')[0];
    romName = romBox.getElementsByTagName('h3')[0];
    txtValue = romName.textContent || romName.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1 || filter === 'ALL') {
      roms[i].style.display = '';
    } else {
      roms[i].style.display = 'none';
    }
  }
}

function searchOnType() {
  searchROMs();
}


function searchOnEnter(event) {
  if (event.key === 'Enter') {
    searchROMs();
  }
}

window.onload = function() {
  var roms = document.getElementsByClassName('rom-box');
  for (var i = 0; i < roms.length; i++) {
      roms[i].style.display = 'none';
  }
};


document.getElementById('searchInput').addEventListener('input', searchOnType);
document.getElementById('searchInput').addEventListener('keypress', searchOnEnter);