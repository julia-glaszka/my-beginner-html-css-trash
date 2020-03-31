function navbar() {
            var a = document.getElementById("optionmenu");
            if (a.className === "option-menu") {
                a.className += " responsive-in";
            } else if (a.className === "option-menu responsive-in") {
                a.className = "option-menu responsive-out";
            } else if (a.className === "option-menu responsive-out") {
                a.className = "option-menu responsive-in";
            }
        }