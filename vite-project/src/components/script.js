document.addEventListener('DOMContentLoaded', function () {


    const Progressbar = document.getElementById('Progressbar');
    const persentagetext = document.getElementById('persentagetext')
    const percentageInput = document.getElementById('percentageInput');

   const data =  percentageInput.addEventListener('input', function () {
        const input = this.value
        const digit = Number(input);
        if (digit > 0 && digit <= 100) {
            Progressbar.style.width = `${digit}%`;
            persentagetext.innerText = `${digit}%`
        }
        else {
            Progressbar.style.width = `${0}%`;
            persentagetext.innerText = `${0}%`
        }
    })

})