function drop() {
    let m = document.getElementById('dropdown')
    if (m.style.display === 'block' || m.style.display === 'flex') {
        m.style.display = 'none'
    }
    else {
        m.style.display = 'block'
        m.style.display = 'flex'
    }
}

function click() {
    let drp = document.getElementById('menu_c')
    if (drp.style.display === 'block') {
        drp.style.display = 'none'
    }
    else {
        drp.style.display = 'block'
    }
}


// PopUp
function pop(pimage, ptext, pprice, pstrike) {
    let p = document.createElement('div')
    let pop = document.createElement('div')
    let pop_svg = document.createElement('div')
    pop_svg.setAttribute('class', 'closeee')
    pop_svg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 320.591 320.591" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" fill="currentColor" opacity="1" data-original="#000000"></path><path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" fill="currentColor" opacity="1" data-original="#000000"></path></g></svg>'
    pop.appendChild(pop_svg)
    pop_svg.addEventListener('click',closeD)  
    let pop_con=document.createElement('div')
    let pop_l = document.createElement('div')
    let pop_l_img = document.createElement('div')
    let pop_l_imgg = document.createElement('img')
    let pop_r = document.createElement('div')
    let pop_tx = document.createElement('div')
    let pop_tx_p = document.createElement('p')
    let pop_pr = document.createElement('div')
    let pop_pr_bt = document.createElement('div')
    let pop_pr_bt1 = document.createElement('button')
    let pop_pr_p = document.createElement('div')
    let pop_pr_bt2 = document.createElement('button')
    let pop_pr_2 = document.createElement('div')
    let pop_prp = document.createElement('div')
    let pop_prp_a1 = document.createElement('a')
    let pop_prp_a3 = document.createElement('a')
    let pop_prp_a2 = document.createElement('a')
    let pop_mrp = document.createElement('div')
    let pop_mrp_a = document.createElement('a')
    let pop_mrp_str = document.createElement('strike')
    let pop_buy = document.createElement('div')
    let pop_buy_bt = document.createElement('button')
    pop_buy_bt.setAttribute('id', 'popUp_Buy_but')
    pop_buy.setAttribute('class', 'popUp_Buy')
    pop_mrp_str.setAttribute('id', 'p_strike')
    pop_mrp.setAttribute('class', 'mrp')
    pop_prp_a1.setAttribute('class', 'dis')
    pop_prp_a2.setAttribute('id', 'p_price')
    pop_prp.setAttribute('class', 'prp')
    pop_pr_2.setAttribute('class', 'popUp_price')
    pop_pr_bt.setAttribute('class', 'popUp_price_but')
    pop_pr_bt1.setAttribute('class', 'popUp_price_butt')
    pop_pr_p.setAttribute('class', 'price-co')
    pop_pr_bt2.setAttribute('class', 'popUp_price_butt')
    pop_pr.setAttribute('class', 'popUP_price')
    pop_tx_p.setAttribute('id', 'p_text')
    pop_tx.setAttribute('class', 'popUp_text')
    pop_r.setAttribute('class', 'popUp_right')
    pop_l_imgg.setAttribute('src', pimage)
    pop_l_img.setAttribute('class', 'popUp_left_img')
    pop_l.setAttribute('class', 'popUp_left')
    pop_con.setAttribute('class','pop_cont')
    pop.setAttribute('class', 'popUp')
    p.setAttribute('class', 'my_div')
    pop.appendChild(pop_con)
    pop_con.appendChild(pop_l)
    pop_l.appendChild(pop_l_img)
    pop_l_img.appendChild(pop_l_imgg)
    pop_con.appendChild(pop_r)
    pop_r.appendChild(pop_tx)
    pop_tx.appendChild(pop_tx_p)
    pop_r.appendChild(pop_pr)
    pop_pr.appendChild(pop_pr_bt)
    pop_pr_bt.appendChild(pop_pr_bt1)
    pop_pr.appendChild(pop_pr_p)
    pop_pr_bt.appendChild(pop_pr_bt2)
    pop_r.appendChild(pop_pr_2)
    pop_pr_2.appendChild(pop_prp)
    pop_prp.appendChild(pop_prp_a1)
    pop_prp.appendChild(pop_prp_a3)
    pop_prp.appendChild(pop_prp_a2)
    pop_pr_2.appendChild(pop_mrp)
    pop_mrp.appendChild(pop_mrp_a)
    pop_mrp.appendChild(pop_mrp_str)
    pop_r.appendChild(pop_buy)
    pop_buy.appendChild(pop_buy_bt)
    p.appendChild(pop)
    document.getElementById('parent_div').appendChild(p)

    // if(p.style.display === 'block' || p.style.display==='flex'){
    //   p.style.display='none'
    // }
    // else{
    //     p.style.display='block'
    //     p.style.display='flex'
    // }

    document.getElementById('p_price').innerHTML = pprice
    document.getElementById('p_text').innerHTML = ptext
    document.getElementById('p_strike').innerHTML = pstrike
    pop_pr_bt1.innerHTML = '-'
    pop_pr_bt2.innerHTML = '+'
    pop_buy_bt.innerHTML = 'Buy Now'
    pop_buy_bt.addEventListener('click', closeD)
    pop_pr_p.innerHTML = '1'
    pop_prp_a1.innerHTML = '-15%'
    pop_prp_a3.innerHTML = '₹'
    pop_pr_bt1.addEventListener('click', decr)
    pop_pr_bt2.addEventListener('click', incr)
    
    let clickk = 1
    function decr() {
        if (clickk > 1) {
            clickk--
            document.getElementsByClassName('price-co')[0].innerHTML = clickk
            document.getElementById('p_price').innerHTML = pprice * clickk
        }
        else {
            document.getElementsByClassName('price-co')[0].innerHTML = 1
            document.getElementById('p_price').innerHTML = pprice * 1
        }
    }
    function incr() {
        clickk++
        document.getElementsByClassName('price-co')[0].innerHTML = clickk
        document.getElementById('p_price').innerHTML = pprice * clickk
    }
    //document.getElementById('p_img').src=pimage
}
function closeD() {
    document.getElementsByClassName('my_div')[0].remove()
}

