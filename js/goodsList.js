function check1(){
	var oInput=document.getElementsByName("check");
	for(var i=0;i<oInput.length;i++){
		if(document.getElementById("all").checked==true){
			oInput[i].checked=true;
		}else{
			oInput[i].checked=false;
		}
	} 
}
function checkItem(ele){  
    // var root = document.getElementById("checkall");  
    if(!ele.checked){  
        //当在全选状态去除某个非全选复选框时，全选复选框checked属性要设为false  
        all.checked=false; 
    }else{  
        //当在全不选状态时，补全剩下的非全选复选框时，全选复选框checked属性设为true  
        var elem = document.getElementsByName(ele.name);  
        for(var i = 0;i<elem.length;i++){  
            if(!elem[i].checked){  
                return;  
            }  
        }  
        all.checked = true;  
    }  
} 