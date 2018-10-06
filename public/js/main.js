$('#pre-selected-categories').multiSelect({
  selectableHeader: "<div class='custom-header font-weight-bold text-center'>Categories to Remove</div>",
  selectionHeader: "<div class='custom-header font-weight-bold text-center'>Categories to Keep</div>"
});

$('#pre-selected-businesses').multiSelect({
  selectableHeader: "<div class='custom-header font-weight-bold text-center'>Businesses to Remove</div>",
  selectionHeader: "<div class='custom-header font-weight-bold text-center'>Businesses to Keep</div>"
});

function selectAll(type) {
  if(type == 'categories') {
    $('#pre-selected-categories').multiSelect('select_all');
  } else {
    $('#pre-selected-businesses').multiSelect('select_all');
  }
};

function deselectAll(type) {
  if(type == 'categories') {
    $('#pre-selected-categories').multiSelect('deselect_all');
  } else {
    $('#pre-selected-businesses').multiSelect('deselect_all');
  }
};






function getState(listType){
  /*
  let keep = new Array();
  let discard = new Array();

  for(i = 0; i < categoryArray.length; i++) {
    let opId = 'option_' + listType + i + '';

    if(document.getElementById(opId).selected) {
      keep.push( $("#" + opId).val() );
    } else {
      discard.push( $("#" + opId).val() );
    }
  }

  return { "keep": keep, "discard": discard };
  */
};

function submitSelect() {
  /*
  let data = {
    "categories": getState('categories'),
    "businesses": getState('businesses')
  }

  document.getElementById('selectionValues').value = JSON.stringify(data);
  document.getElementById('categoryForm').submit();
  */
};
