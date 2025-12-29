//Quando clicar em assinar, ir para a página assinar-newsletter.html
document.getElementById("subscribeButton").addEventListener("click", function(event) {
    //O formulário já está configurado para enviar para a página assinar-newsletter.html    
    document.getElementById("newsletterForm").submit();     
})



//Quando clicar em cancelar, fecha o modal sem enviar o formulario
document.getElementById("cancelButton").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("newsletterDialog").close();
});