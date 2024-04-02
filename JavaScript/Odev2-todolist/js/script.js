// HTML etiketleri
let toDo = document.querySelector("#task");
let toDoList = document.querySelector("#list");
let toDoListElements = document.querySelectorAll("#list > li")

// Yeni Öğe Yaratma
 function createLi() {
    let newList = document.createElement("li");             //yeni li ögesi yaratma
    newList.innerHTML = `${toDo.value}`;                    //yeni li ögesinin içeriğini ekleme
    toDoList.appendChild(newList);                          //yeni li ögesini listeye ekleme
    newList.addEventListener("click", markList);            //yeni li ögesine işaretleme etkinliği ekleme
    let deleteButton = createDeleteButton();                //yeni li ögesi için silme butonu çağırma
    newList.appendChild(deleteButton);                      //yeni li ögesine silme butonu ekleme
 }

// Listeye öge eklemek için fonksiyon
function addElement() {
    if (toDo.value.trim() === "") {                             //boş eleman ve boşluk girilmesini engelleme
        toDo.placeholder = "Lütfen bir görev giriniz!";         //placeholder uyarısı
        toDo.value = "";                                        //input value sıfırlama
        $(".error").toast("show");                              //toast uyarısı
    } else {
        createLi()
        toDo.placeholder = "Başka bir şey yapacak mısın?"       //placeholder uyarlama
        toDo.value = "";                                        //input value sıfırlama
        $(".success").toast("show");                            //toast uyarısı
    }
}

// Liste  ögelerini işaretlemek için fonksiyon
function markList() {
    this.classList.toggle("checked");   //classList.toggle ile checked sınıfını ekleme
}

// Silme butonu ve fonksiyonu oluşturma
function createDeleteButton() {
    let deleteButton = document.createElement("i");         //buton olacak i ögesini yaratma
    deleteButton.classList.add("bi", "bi-x-octagon");       //i ögesine bootstrap icon class'ı ekleme
    deleteButton.style.float = "right";                     //silme butonunu sağa alma
    deleteButton.style.color = "red";                       //silme butonunun kırmızı yapma
    deleteButton.addEventListener("click", deleteItem);     //silme butonuna etkinlik ekleme
    return deleteButton
}
function deleteItem() {         //silme fonksiyonu
    this.parentNode.remove();   //parentNode ile li ögesini silme
}

// Liste ögelerine silme butonu ve işaretleme etkinliği ekleme
toDoListElements.forEach(function(liElements) {
    let deleteButton = createDeleteButton();         //eklenecek silme butonu çağırma
    liElements.appendChild(deleteButton);            //silme butonu ekleme
    liElements.addEventListener("click", markList);  //işaretleme etkinliği ekleme
}
)