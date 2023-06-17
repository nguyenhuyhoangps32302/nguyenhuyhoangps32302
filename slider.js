var arr_hinh = [
    "https://file.hstatic.net/1000075078/file/banner_web_moi_-_desktop_e6129f9b28c64e9d90e09debee595df3.jpg",
    "https://file.hstatic.net/1000075078/file/banner_web_desktop_e6e4728358bd45b680ae347ceb7e43a4.jpg",
    "https://file.hstatic.net/1000075078/file/banner_web_moi_-_desktop-2_1a2cc22a62674bbea6d05c86d1048131.jpg",
];
var index = 0;
function prev(){
    index--;
    if(index<-0) index = arr_hinh.length-1;
    document.getElementById("hinh").src=arr_hinh[index];
}
function next(){
    index++;
    if(index==arr_hinh.length) index = 0;
    document.getElementById("hinh").src=arr_hinh[index];
}
setInterval("next()", 3000);