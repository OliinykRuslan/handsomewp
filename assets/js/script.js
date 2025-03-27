document.addEventListener("DOMContentLoaded", function () {
    //mobile header menu
    const mobMenu = document.querySelector(".mobmenu");
    const siteHeader = document.querySelector(".site-header");
    if (mobMenu && siteHeader) {
        mobMenu.addEventListener("click", function (event) {
            siteHeader.classList.toggle("is-active");
            event.stopPropagation();
        });
        document.addEventListener("click", function (event) {
            if (!siteHeader.contains(event.target) && !mobMenu.contains(event.target)) {
                siteHeader.classList.remove("is-active");
            }
        });
    }

    //plans
    const annuallyBtn = document.getElementById("annuallyBtn");
    const monthlyBtn = document.getElementById("monthlyBtn");
    const planRows = document.querySelectorAll(".plan-row");
    const planAgencyBtn = document.querySelector(".planAgencyBtn");
    const planUpsellsAgencyBtn = document.querySelector(".planUpsellsAgencyBtn");

    
    const prices = document.querySelectorAll(".priceItemJs");
    function updatePrices(planType) {
        prices.forEach(price => {
            const newPrice = price.getAttribute(`data-${planType}`);
            price.textContent = newPrice;
        });
    }

    annuallyBtn.addEventListener("click", function () {
        annuallyBtn.classList.add("active");
        monthlyBtn.classList.remove("active");
        updatePrices("annually");
        
        planRows.forEach(row => {
            row.classList.remove("monthly");
            row.classList.add("annually");
        });

        if(planAgencyBtn) {
            planAgencyBtn.setAttribute("href", "https://handsomewp.com/handsome-checkout/hcc-ua/");
        }
        if(planUpsellsAgencyBtn) {
            planUpsellsAgencyBtn.setAttribute("href", "https://handsomewp.com/handsome-checkout/ocu-ua/");
        }
    });
    monthlyBtn.addEventListener("click", function () {
        monthlyBtn.classList.add("active");
        annuallyBtn.classList.remove("active");
        updatePrices("monthly");
        
        planRows.forEach(row => {
            row.classList.remove("annually");
            row.classList.add("monthly");
        });

        if(planAgencyBtn) {
            planAgencyBtn.setAttribute("href", "https://handsomewp.com/handsome-checkout/hcc-um/");
        }
        if(planUpsellsAgencyBtn) {
            planUpsellsAgencyBtn.setAttribute("href", "https://handsomewp.com/handsome-checkout/ocu-um/");
        }
    });

    //faqs
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
            item.classList.toggle("active");
        });
    });

    //anchor smooth
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const blockID = anchor.getAttribute('href').substr(1)
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
});