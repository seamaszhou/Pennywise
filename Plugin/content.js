// This code is using for get shopping cart price
// lower chrome version
// chrome.extension.onRequest.addListener(
//     function(request, sender, sendResponse) {
//         if(request.method == "getPrice"){
//             sendResponse({data: document.getElementById("sc-subtotal-amount-activecart").textContent, method: "getPrice"});
//         }
//     }
// );
//
//
// To do : This part need add an error handler to deal no item in cart situation.


chrome.runtime.onMessage.addListener(
    function(Message, sender, sendResponse) {
        if(Message.method === "getPrice"){
            // let Item_price = document.getElementById("J_Total").textContent;
            // let Item_list = document.getElementsByClassName("realPay-price")[0].textContent;
            let Item_price = document.getElementsByClassName("realPay-price")[0].textContent;;
            // for (var i = 1; i < document.getElementsByClassName("J_ItemSum").length; i++) {
            //   Item_price += document.getElementsByClassName("J_ItemSum")[1].textContent;
            // }
            console.log(Item_price);
            sendResponse({data: [Item_price], method: "getPrice"});
        }
    }
);
