document.getElementById("sub-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    
    var inputs = document.getElementsByClassName("modal_data_reg")[0].querySelectorAll("input[type='text'], input[type='password'], input[type='email'], input[type='tel']");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = "blue"; // Изменяем фоновый цвет полей на синий
    }
    
    setTimeout(function() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = ""; // Возвращаем исходный фоновый цвет полей
    }
    alert("Данные отправлены."); // Показываем информационное диалоговое окно
    }, 1000);
    });