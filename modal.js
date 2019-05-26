const body_wrapper = document.querySelector('[data-js=body_wrapper]');
const wrapper = document.querySelector('[data-js="wrapper"]');
const filter_wrapper = document.querySelector('[data-js="filter_wrapper"]');
const modal_outer_wrapper = document.querySelector('[data-js="modal_outer_wrapper"]');
const open_modal_button = document.querySelector('[data-js="open_modal_button"]');
const close_modal_button = document.querySelector('[data-js="close_modal_button"]');


function showModalWindow(){
	filter_wrapper.classList.remove('is_none');
	modal_outer_wrapper.classList.remove('is_none');
};

function hiddenModalWindow(){
	modal_outer_wrapper.classList.add('is_none');
	filter_wrapper.classList.add('is_none');
};


open_modal_button.addEventListener( 'click', showModalWindow, false );
close_modal_button.addEventListener( 'click', hiddenModalWindow, false );