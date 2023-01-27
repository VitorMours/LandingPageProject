function navMov(){
    var body = document.body
    trigger = body.getElementsByClassName("material-symbols-outlined");

    if (typeof trigger !== undefined){
        trigger.addEventListener("click", function(){
            body.className = (body.className == "menu-activate" ? '' : 'menu-activte')



        });

    };


}