// BAR HOVER INTERACTION

const bars = document.querySelectorAll(".bar");

bars.forEach(bar => {

    bar.addEventListener("click", () => {

        bars.forEach(item => {
            item.classList.remove("highlight");
        });

        bar.classList.add("highlight");

    });

});


// TRANSACTION HOVER

const transactions = document.querySelectorAll(".transaction");

transactions.forEach(transaction => {

    transaction.addEventListener("mouseenter", () => {
        transaction.style.background = "#fafafa";
    });

    transaction.addEventListener("mouseleave", () => {
        transaction.style.background = "transparent";
    });

});