const book = {
    title: "",
    author: "",
    pages: 0,
    print: () => {
        var s = title + "|" + author + "|" + pages;
        return s;
    }
}

const titleI = document.getElementById("titleI");
const authorI = document.getElementById("authorI");
const pagesI = document.getElementById("pagesI");
const submit = document.getElementById("submit");
const text = document.getElementById("text");
var books = [];

function isValid() {
    if (titleI.value == "" || authorI.value == "" || pagesI.value == "") {
        alert("no");
        return false;
    }
    else {
        return true;
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (isValid()) {
        const b = Object.create(book);
        b.title = titleI.value;
        b.author = authorI.value;
        b.pages = pagesI.value;
        books.push(b);
        var s = "title: " + b.title + "|  author: " + b.author + "|  pages: " + b.pages + "\n";
        text.innerText = s;
        b.title = "";
        b.author = "";
        b.pages = "";
        // مسیر فایل JSON
        const filePath = 'file.json';

        // ارایه جدید

        // بارگیری فایل JSON
        fetch(filePath)
            .then(response => response.json())
            .then(jsonContent => {
                // افزودن ارایه به ویژگی‌های فایل JSON
                jsonContent.books = books;

                // تبدیل محتوای JSON به رشته
                const updatedJson = JSON.stringify(jsonContent);

                // ذخیره تغییرات در فایل JSON
                const blob = new Blob([updatedJson], { type: 'application/json' });
                saveAs(blob, filePath);
                console.log('اطلاعات به فایل JSON با موفقیت اضافه شد.');
            })
            .catch(err => {
                console.error(err);
            });
    }
})
