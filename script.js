document.addEventListener("DOMContentLoaded", () => {
    // تحديد جميع أزرار اللايك والديسلايك في الصفحة
    const buttons = document.querySelectorAll('.like-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // يمنع الصفحة تماماً من الارتفاع لأعلى عند الضغط
        });
    });
});
function toggleLike(btn){
    if(btn.classList.contains("disliked")){
        btn.classList.remove("disliked");
        btn.innerHTML = "👍 Like";
    }else{
        btn.classList.add("disliked");
        btn.innerHTML = "👎 Dislike";
    }
}
