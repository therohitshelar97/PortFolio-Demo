function FormValidation(){
    fname = document.form.fname.value;
    mname = document.form.mname.value
    lname = document.form.lname.value
    email = document.form.email.value
    con = document.form.con.value

    if(fname==null || fname==""){
        document.getElementById('f').innerText = "First Name Is Mandatory Field..."
    }

    else if(mname==null || mname==""){
        document.getElementById('m').innerText = "Middle Name Is Mandatory Field..."
    }

    else if(lname==null || lname==""){
       document.getElementById('l').innerText = "Last Name Is Mandatory Field..." 
    }

    else if(email==null || email==""){
        document.getElementById('e').innerText = "Email Is Mandatory Field..."
    }
    else if(con==null || con=="" || con.length!=10){
        document.getElementById('c').innerText = "Contact Number Is Mandatory Field..."
        // alert(con.length)
    }
    else{
        alert("Form submitted Successfully...")
    }
}

i=0
j=0
var data = ['My Name Is Smith', 'I Am A Full Stack Developer'];
function Introduction() {
    
    if(data[i][j] != " "){
        document.getElementById('intro').innerHTML += data[i][j] 
    }
    else{
        document.getElementById('intro').innerHTML += "&nbsp"
    }
    
    
    
    j+=1

    if(data[i].length<=j){
        j=0
        i++
        document.getElementById('intro').innerText = ""
    }

    if(i>=data.length){
        document.getElementById('intro').innerText = ""
        i=0
    }

    }

setInterval(Introduction, 200);