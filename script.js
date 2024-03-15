document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#somar").addEventListener("click", (e) => {
        e.preventDefault();

        let num1 = document.querySelector("#num1");
        let num2 = document.querySelector("#num2");

        if (num1.value && num2.value) {
            let result = sum(num1.value, num2.value);
        
            document.querySelector('#resultado').innerHTML = `Resultado: ${result}`;

            setTimeout(() => {
                num1.value = "";
                num2.value = "";
            }, 56)
            
        } else {
            document.querySelector('#resultado').innerHTML = "Preencha todos os campos";
        }

        
    });

    function sum(a, b) {
        return a + b;
    }
})