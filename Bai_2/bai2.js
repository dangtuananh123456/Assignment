var input1 = document.getElementById("input1");
var input2 = document.getElementById('input2');
var result = document.getElementById("result");
var notify = document.getElementById("notify");
var add = document.getElementById("add");
var minus = document.getElementById("minus");
var times = document.getElementById("times");
var devide = document.getElementById("devide");
var button = document.getElementById("calculate");
const notify1 = "Ô thứ 1 phải nhập số";
const notify2 = "Ô thứ 2 phải nhấp số";
notify.classList.add('invalid');

//kiểm tra một chuổi toàn kí tự số
function onlyLettersAndNumbers(str) {
    return Boolean(str.match(/^[0-9. ]*$/));
}


//thêm sư kiên cho ô thứ nhất
input1.addEventListener("keyup", function(){
    if(!onlyLettersAndNumbers(input1.value)){
        notify.innerHTML = notify1;
        result.value = "";
    }
    else{
        notify.innerHTML = "";
    }
});

//thêm sự kiện cho ô thứ hai
input2.addEventListener("keyup", function() {
    if(!onlyLettersAndNumbers(input2.value)){
        notify.innerHTML = notify2;
        result.value = ""
    }
    else{
        notify.innerHTML = "";
    }
});

//xét sự kiện cho radio

function checkedRadio(object) { 
    console.log(notify.textContent);
    if(object.checked && notify.textContent === "Chưa chọn phép tính"){
        notify.innerHTML = "";
    }
}

add.addEventListener("click", checkedRadio(add));

minus.addEventListener("click", checkedRadio(minus));

times.addEventListener("click", checkedRadio(times));

devide.addEventListener("click", checkedRadio(devide));



//kiểm tra một chuỗi có chưa kí tụ khác số
function invalidString(stringChecked, object, position){
    if(!onlyLettersAndNumbers(stringChecked)){
        object.stringNotify += "Ô thứ " + position + " phải nhập số \n";
        return true;
    }
    return false;
}

//kiểm tra chuổi rỗng;
function checkedEmptyString(stringChecked, object, position){
    var checked = false;
    if(stringChecked === null){
        checked = true;
    }
    else if(stringChecked.trim() == ""){
        checked = true;
    }
    if(checked == true){
        object.stringNotify += "Ô thứ " + position + " chưa nhập số \n";
    }
    return checked;
}




button.addEventListener("click", function() {
    //kiểm tra điều kiện trước khi tính toán
    var checkedForNotify = false;
    const object = {
        stringNotify :""
    }
    var valueInput1 = input1.value;
    var valueInput2 = input2.value;
    if(checkedEmptyString(valueInput1, object, 1) || checkedEmptyString(valueInput2, object, 2)){
        notify.innerHTML = object.stringNotify;
        checkedForNotify = true;
    }
    else if (invalidString(valueInput1, object, 1) || invalidString(valueInput2, object, 2)){
        notify.innerHTML = object.stringNotify;
        checkedForNotify = true;
    }
    else {
        var checked = false;
        var floatInput1 = parseFloat(valueInput1);
        var floatInput2 = parseFloat(valueInput2);
        if(times.checked){
            result.value = floatInput1 * floatInput2;
            checked = true;
        }
        if(devide.checked){
            result.value = floatInput1 / floatInput2;
            checked = true;
        }
        if(add.checked){
            result.value = floatInput1 + floatInput2;
            checked = true;
        }
        if(minus.checked) {
            result.value = floatInput1 - floatInput2;
            checked = true;
        }
        if(!checked){
            notify.innerHTML = "Chưa chọn phép tính";
            checkedForNotify = true;
        }
    }
    if(!checkedForNotify){
        notify.innerHTML = "";
    }
    else {
        result.value = "";
    }
});

