var products=[
    {id: "1",
        title: "Душа грешника Михаила",
        description: "Душа грешника Игоря 24х лет, продается\n" +
        "                            в связи с утратой веры в светлое будущее, как собственно, и в веры в душу.\n" +
        "                            Б\\у, возможен торг. Рассчет можно произвести в чокопаях",
        img: "oleg.jpg",
        price: "4 534",
    },
    {id: "1",
        title: "Душа грешника Михаила",
        description: "Душа грешника Игоря 24х лет, продается\n" +
        "                            в связи с утратой веры в светлое будущее, как собственно, и в веры в душу.\n" +
        "                            Б\\у, возможен торг. Рассчет можно произвести в чокопаях",
        img: "oleg.jpg",
        price: "4 534",
    },
    {id: "1",
        title: "Душа грешника Михаила",
        description: "Душа грешника Игоря 24х лет, продается\n" +
        "                            в связи с утратой веры в светлое будущее, как собственно, и в веры в душу.\n" +
        "                            Б\\у, возможен торг. Рассчет можно произвести в чокопаях",
        img: "oleg.jpg",
        price: "4 534",
    }
];
var bucket = [];
var container = document.getElementById("container");
main();

    function main() {
        for (var i = 0; i< products.length; i++){
            var product = document.createElement("div");
            product.className = "position";
            product.innerHTML = "<div class=\"img\"><img src=\"img/"+ products[i].img +"\"></div><div class=\"other\">\n" +
                "<div class=\"title\">"+ products[i].title +"</div>\n" +
                "<div class=\"description\">"+ products[i].description +"</div>\n" +
                "<div class=\"more\" onclick=\"more("+ i +")\"><p>Подробнее &#10037;</p></div></div><div class=\"buttons\">\n" +
                "<div class=\"cost\">"+ products[i].price +" рублей </div>" +
                "<div class=\"btn\" onclick=\"buy("+ i+")\">Купить</div></div>";
            container.appendChild(product);
        }
    }

    function more(index) {
        container.innerHTML = [];
        var product = document.createElement("div");
        product.className = "productPage";
        product.innerHTML = " <div class=\"title\">"+ products[index].title +"</div>\n" +
            "<div class='image'><img src=\"img/"+products[index].img +"\"></div>"+
            "<div class=\"descript\">"+ products[index].description +"</div>\n" +
            "<div class=\"cost\">"+ products[index].price +" рублей</div>\n" +
            "<div class=\"btn\" onclick=\"buy("+ index +")\">Добавить в корзину</div>";
        container.appendChild(product);
    }

    function buy(index) {
        bucket.push(products[index]);
        alert("Товар \"" + products[index].title + "\" добавлен в корзину");
    }


    function bucketTop() {
        container.innerHTML = [];
       var table = document.createElement("table");
       table.className = "table";
        table.innerHTML = "<tr><td>Название</td><td>Цена</td><td>Удалить из корзины</td></tr>";
        for (var i = 0; i< bucket.length; i++){
            table.innerHTML += "<tr><td>"+ bucket[i].title
                +"</td><td>"+ bucket[i].price
                +"</td><td>&#9766;</td></tr><div class=\"btn sale bucketSale\" onclick=\"sale()\">Оформиить заказ</div>";
        }

        container.appendChild(table);
    }
