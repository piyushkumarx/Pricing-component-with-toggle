const toggle = document.querySelector('.switch input');
const basic = document.querySelector(".basic");
const professional = document.querySelector(".professional");
const master = document.querySelector(".master");
const slider = document.querySelector(".slider")

toggle.addEventListener('change', function () {
    [basic, professional, master].forEach(price => {
        price.classList.add('hide');
    });

    slider.style.opacity = "0.4";



    setTimeout(() => {
        if (this.checked) {
            basic.innerText = "19.99";
            professional.innerText = "24.99";
            master.innerText = "39.99";
        } else {
            basic.innerText = "199.99";
            professional.innerText = "249.99";
            master.innerText = "399.99";
        }


         slider.style.opacity = "1";
         
        [basic, professional, master].forEach(price => {
            price.classList.remove('hide');
        });
    }, 100);
});
