let a = document.getElementById('first')
let c = document.getElementById('choice')
var a1 =[]
a.innerText='0'


function num(numb) {
    if(a.innerText==='0'){
        a.innerText=numb
    }
    else{
        a.innerHTML+=numb
    }
}
function choice(cho) {
    c.innerHTML = cho
    a1.push(Number(a.innerText))
    console.log((a1))
    a.innerText=''
}

function dot(){
    let txt=a.innerText
    if(txt===''){
        a.innerHTML = '0.'
    }
    else if(!(txt.includes('.'))){
        a.innerHTML += '.'
    }
}
function eq() {
    var res;
    a1.push(Number(a.innerText))
    a.innerHTML=''
    
    function add(m,n){
        return m+n
    }
    function sub(m,n){
        return m-n
    }
    function mul(m,n){
        return m*n
    }
    function div(m,n){
        return m/n
    }
    if (c.innerText === '+') {
        res=a1.reduce(add)
        a.innerHTML = res
        numLen()
        c.innerHTML = ''
        a1=[]
    }
    if (c.innerText === '-') {
        res=a1.reduce(sub)
        a.innerHTML = res
        numLen()
        c.innerHTML = ''
        a1=[]
    }
    if (c.innerText === '*') {
        res=a1.reduce(mul)
        a.innerHTML = res
        numLen()
        c.innerHTML = ''
        a1=[]
    }
    if (c.innerText === '/') {
        res=a1.reduce(div)
        a.innerHTML = res
        numLen()
        c.innerHTML = ''
        a1=[]
    }
    
}
function ac() {
    a.innerText = '0'
    c.innerHTML = ''
    a1=[] 
}

function del(){
    let st=a.innerText
    let z=st.slice(0,-1)
    if(z===''){
        a.innerText='0'
    }
    else{
        a.innerText=z
    }
}

function numLen(){
    let txt=a.innerText
    if(txt.length>13){
        a.innerText=txt.substring(0,13)
    }
}