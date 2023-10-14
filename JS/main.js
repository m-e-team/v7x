let sacnButton = document.querySelector(".start");

let body = document.querySelector(".terminal");

sacnButton.onclick = () => {

    let element = document.createElement("h2");

    element.innerText = "Scan Started For Your Device Wait About 10 Second .........";

    element.className = "scan_text";

    let elementTwo = document.createElement("h3");

    elementTwo.innerText = "Sorry Your Device Is Destroyed By V7x Team !!!!!!!!";

    elementTwo.className = "scan_text";

    setTimeout(() => {

        if (body.children[1] == undefined) {

            body.append(element);

            let all_elem = document.querySelectorAll(".scan_text");

            all_elem.forEach(elem => {

                elem.color = "white";

                elem.style.paddingTop = "2vh";

                setTimeout(() => {
    
                    body.append(elementTwo);
    
                    elem.color = "white";

                    elem.style.paddingTop = "2vh";
    
                }, 5000)
            })

        }

    }, 200)

}