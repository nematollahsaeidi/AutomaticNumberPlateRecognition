function loadFile(output) {
  var output = document.getElementById(output);
  output.src = URL.createObjectURL(event.target.files[0]);
};

//function set_date() {
//    var date = new Date();
//    var day = date.getDate();
//    var month = date.getMonth() + 1;
//    var year = date.getFullYear();
//    if (month < 10) month = "0" + month;
//    if (day < 10) day = "0" + day;
//    var today = year + "-" + month + "-" + day;
//    document.getElementById("start_date").value = today;
//}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

function alert1() {
  alert("درخواست شما فرستاده شد. لطفا شکیبا باشید...");
  this.form.reset();
}

function alert2() {
    var theForm = document.getElementById("form_register");
    var hiddenField1 = document.createElement('input');
    var hiddenField2 = document.createElement('input');
    var hiddenField3 = document.createElement('input');
    var hiddenField4 = document.createElement('input');
	hiddenField1.type = 'hidden';
	hiddenField2.type = 'hidden';
	hiddenField3.type = 'hidden';
	hiddenField4.type = 'hidden';
	hiddenField1.name = 'plate_in_form1';
	hiddenField2.name = 'plate_in_form2';
	hiddenField3.name = 'plate_in_form3';
	hiddenField4.name = 'plate_in_form4';
	hiddenField1.value = document.getElementById("plate_in1").value;
	hiddenField2.value = document.getElementById("plate_in2").value;
	hiddenField3.value = document.getElementById("plate_in3").value;
	hiddenField4.value = document.getElementById("plate_in4").value;
	hiddenField1.id = 'plate_in_form1';
	hiddenField2.id = 'plate_in_form2';
	hiddenField3.id = 'plate_in_form3';
	hiddenField4.id = 'plate_in_form4';
	theForm.appendChild(hiddenField1);
	theForm.appendChild(hiddenField2);
	theForm.appendChild(hiddenField3);
	theForm.appendChild(hiddenField4);
	document.body.appendChild(theForm);
	theForm.submit();
}