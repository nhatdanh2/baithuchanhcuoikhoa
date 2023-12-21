let dangky = () => {
    if(
        document.getElementsById('userdangky').value === " " || 
        document.getElementsById('passworddangky').value ===" "
    ){
        alert('vui long khong de chong')
    }else{
        let tenDangKy = document.getElementsById('userdangky').value
        let matkhaudangky = document.getElementsById('passworddangky').value
        localStorage.setItem('ten',tenDangKy)
        localStorage.setItem('makhau',matkhaudangky)
    }
}
    