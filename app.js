const list = document.getElementById('list');
 const nameInput = document.getElementById('nameInput');
 const addButton = document.getElementById('addButton');
 addButton.addEventListener('click', function () {
   if (nameInput.value !== '') {
   addRow();
   
}});
 
 nameInput.addEventListener('keyup', function (event) {
   if (nameInput.value !== '' && event.which == 13){
    addRow();
	
}});
  
   function addRow () {
     const li = document.createElement('li');
	 const initInput = document.createElement('input');
	 initInput.type = 'number';
	 initInput.classList.add('initInput');
	 const textEl = document.createElement('span');
	 const hpInput = document.createElement('input');
	 const killButton = document.createElement('img');
	 killButton.src = 'skull.svg';
	 killButton.classList.add('killButton');
	 killButton.addEventListener('click', function () {
		 li.classList.add('dead');
	 });
	 hpInput.type = 'number';
     textEl.textContent = nameInput.value;
     list.appendChild(li);
	 li.appendChild(initInput);
	 li.appendChild(textEl);
	 li.appendChild(hpInput);
	 li.appendChild(killButton);
	 nameInput.value = '';
   }
  
  let currentRound = 1;
  const nextButton = document.getElementById('nextButton');
 nextButton.addEventListener('click', function () {
  const rows = list.querySelectorAll('li');
  let highestInitiative;
  let highestInitiativeRow;
  const roundCount = document.getElementById('roundCount');
  roundCount.textContent = currentRound;
  for (let row of rows) {
	  if (row.classList.contains('current') || row.classList.contains('played') || row.classList.contains('dead')) {
		  row.classList.remove('current');
		  continue;
	  }
	  const initInput = row.querySelector('.initInput');
	  const initValue = parseInt(initInput.value, 10);
	  if (highestInitiative === undefined) {
		highestInitiative = initValue;
		highestInitiativeRow = row;
	  }
	  else {
		  if (initValue > highestInitiative) {
			  highestInitiative = initValue;
			  highestInitiativeRow = row;
		  }
	  }
  }
  if (highestInitiativeRow === undefined) {
	  currentRound = currentRound + 1;
	  for (let row of rows) {
		  row.classList.remove('played');
	  }
  }
  else {
	  highestInitiativeRow.classList.add('current', 'played');
  }
  
   });
   
 