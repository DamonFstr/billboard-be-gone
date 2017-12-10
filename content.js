function hideAnnoyingBillboard() {
    var billboardMotionDivs = document.evaluate("//div[contains(@class, 'billboard-motion')]", document);
    var billboard = billboardMotionDivs.iterateNext();

    if (billboard !== null) {
        billboard.style.visibility = "hidden";
    } else {
        setTimeout(hideAnnoyingBillboard, 100);
    }
}

hideAnnoyingBillboard();