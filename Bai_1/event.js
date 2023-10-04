function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text"); //get id target
    let ele_src = document.getElementById(data); //get element from source
    let ele_des = document.getElementById(event.target.id);
    if(ele_des.draggable == true){
        let ele_des_parent = ele_des.parentElement;
        ele_des_parent.removeChild(ele_des);
        ele_des_parent.appendChild(ele_src);
    }
    else{
        ele_des.appendChild(ele_src);
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function dragging(event) {
}

function dragStart(event)  {
    event.dataTransfer.setData("text", event.target.id);
}