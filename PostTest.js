/////////////////////////   BUTTON 1   /////////////////////////
var par1 = document.getElementsByClassName('p1')[0]
var par2 = document.getElementsByClassName('p2')[0]
var par3 = document.getElementsByClassName('p3')[0]
var par4satu = document.querySelectorAll('#c ul li p')[0]
var par4dua = document.querySelectorAll('#c ul li p')[1]
var par4tiga = document.querySelectorAll('#c ul li p')[2]
var par4empat = document.querySelectorAll('#c ul li p')[3]
var par4lima = document.querySelectorAll('#c ul li p')[4]
var par4enam = document.querySelectorAll('#c ul li p')[5]
var par4tujuh = document.querySelectorAll('#c ul li p')[6]
var par4delapan = document.querySelectorAll('#c ul li p')[7]
var par4sembilan = document.querySelectorAll('#c ul li p')[8]
var par4sepuluh = document.querySelectorAll('#c ul li p')[9]

var Button1 = document.querySelectorAll('#c ul li button')[0]
Button1.addEventListener('click', function(){
    par1.style.backgroundColor = 'YELLOW'
    par2.style.backgroundColor = 'YELLOW'
    par3.style.backgroundColor = 'YELLOW'
    par4satu.style.backgroundColor = 'YELLOW'
    par4dua.style.backgroundColor = 'YELLOW'
    par4tiga.style.backgroundColor = 'YELLOW'
    par4empat.style.backgroundColor = 'YELLOW'
    par4lima.style.backgroundColor = 'YELLOW'
    par4enam.style.backgroundColor = 'YELLOW'
    par4tujuh.style.backgroundColor = 'YELLOW'
    par4delapan.style.backgroundColor = 'YELLOW'
    par4sembilan.style.backgroundColor = 'YELLOW'
    par4sepuluh.style.backgroundColor = 'YELLOW'
})


/////////////////////////   BUTTON 2   /////////////////////////
var Button2 = document.getElementById('buttonDua')
Button2.addEventListener('click', function(){
    Button2.style.backgroundColor= 'Blue'
    Button2.style.color = 'White'
})

/////////////////////////   BUTTON 3   /////////////////////////
var Button3 = document.getElementById('buttonTiga')
Button3.addEventListener('click', function(){
    par1.style.color = 'RED'
    par1.style.fontFamily = 'Times New Roman'

    par2.style.color = 'RED'
    par2.style.fontFamily = 'Times New Roman'

    par3.style.color = 'RED'
    par3.style.fontFamily = 'Times New Roman'

    par4satu.style.color = 'RED'
    par4satu.style.fontFamily = 'Times New Roman'

    par4dua.style.color = 'RED'
    par4dua.style.fontFamily = 'Times New Roman'

    par4tiga.style.color = 'RED'
    par4tiga.style.fontFamily = 'Times New Roman'

    par4empat.style.color = 'RED'
    par4empat.style.fontFamily = 'Times New Roman'

    par4lima.style.color = 'RED'
    par4lima.style.fontFamily = 'Times New Roman'

    par4enam.style.color = 'RED'
    par4enam.style.fontFamily = 'Times New Roman'

    par4tujuh.style.color = 'RED'
    par4tujuh.style.fontFamily = 'Times New Roman'

    par4delapan.style.color = 'RED'
    par4delapan.style.fontFamily = 'Times New Roman'

    par4sembilan.style.color = 'RED'
    par4sembilan.style.fontFamily = 'Times New Roman'

    par4sepuluh.style.color = 'RED'
    par4sepuluh.style.fontFamily = 'Times New Roman'
})

/////////////////////////   BUTTON 4   /////////////////////////
var Button4 = document.getElementById('buttonEmpat')
Button4.addEventListener('click', function(){
    par1.style.fontSize = '30px'
    par2.style.fontSize = '30px'
    par3.style.fontSize = '30px'
    par4satu.style.fontSize = '30px'
    par4dua.style.fontSize = '30px'
    par4tiga.style.fontSize = '30px'
    par4empat.style.fontSize = '30px'
    par4lima.style.fontSize = '30px'
    par4enam.style.fontSize = '30px'
    par4tujuh.style.fontSize = '30px'
    par4delapan.style.fontSize = '30px'
    par4sembilan.style.fontSize = '30px'
    par4sepuluh.style.fontSize = '30px'
})


/////////////////////////   BUTTON 5   /////////////////////////
var Button5 = document.getElementById('buttonLima')
var WarnaContainer = document.getElementById('container')

Button5.addEventListener('click', function(){
    WarnaContainer.style.backgroundColor ='PINK'
})


/////////////////////////   BUTTON 6   /////////////////////////
var Button6 = document.getElementById('buttonEnam')

Button6.addEventListener('click',function(){
    //BUAT ELEMENT BARU (h1)
    var elemenH1 = document.createElement('h1')
    var tulisanH1 = document.createTextNode('TULISAN  & ELEMENT h1 baru DARI JAVA SEKRIP hiew hiew ..')
    elemenH1.appendChild(tulisanH1)

    //LOCATOR ELEMENT YANG AKAN DIGANTI
    var elemenP1 = document.querySelector('#a p')
    var sectionA = document.getElementById('a')
    sectionA.replaceChild(elemenH1,elemenP1)
})

/////////////////////////   BUTTON 7   /////////////////////////
var Button7 = document.getElementById('buttonTujuh')

Button7.addEventListener('click',function(){
    var TambahMentor = document.createElement('li')
    var NamaMentor = document.createTextNode(' MENTOR DARI JAVA SEKRIP.. HIEW HIEW')
    TambahMentor.appendChild(NamaMentor)

    var WadahLi = document.querySelector('#b ul')
    var LiBaru = WadahLi.querySelector('li:nth-child(4)')
    WadahLi.insertBefore(TambahMentor,LiBaru)

    var WadahLiHapus = document.querySelector('#b ul')
    var LokasiHapusMentor = document.querySelector('li:nth-child(1)')
    WadahLiHapus.removeChild(LokasiHapusMentor)
})

/////////////////////////   BUTTON 8   /////////////////////////
var Button8 = document.getElementById('buttonDelapan')
var judul = document.getElementsByTagName('h1')[0]

Button8.addEventListener('click', function(){
    judul.innerHTML = ('POST---- TEST ------ DOJOBOX.ID ----- FELIX')
})

/////////////////////////   BUTTON 9   ////s/////////////////////
var Button9 = document.getElementById('buttonSembilan')
var hapusLink = document.getElementsByTagName('a')[0]

Button9.addEventListener('click',function(){
    hapusLink.removeAttribute('href')
})


/////////////////////////   BUTTON 10   /////////////////////////
var Button10 = document.getElementById('buttonSepuluh')
var TambahLinkGIT = document.getElementsByTagName('a')[0]

Button10.addEventListener('click',function(){
    TambahLinkGIT.setAttribute('href', 'https://github.com/matheusfelix75')
})