if(window.SimpleSlide) {
  new SimpleSlide({ //objeto
    slide: 'quote', // nome do atributo data-slide="principal"
    nav: false, // se deve ou não mostrar a navegação bottoes
    auto: true, // se o slide deve passar automaticamente
    time: 4000, // tempo de transição dos slides 1000 = 1seg
    pauseOnHover: true, // pausa a transição automática
  });

  new SimpleSlide({ //objeto
    slide: 'portfolio',
    nav: true, 
    auto: true, // 
    time: 5000, 
    pauseOnHover: true, 
  });
}

if(window.SimpleAnime) {
new SimpleAnime ();
}
if(window.SimpleForm) {
new SimpleForm({
  form: ".formphp", // seletor do formulário
  button: "#enviar", // seletor do botão
  erro: "<div id='form-erro'> <h2>UM ERRO OCORREU</h2><p>tente para o email gabriel.suldinne@gmail.com.</p></div>", // mensagem de erro
  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve entrarei em contato com você.</p></div>", // mensagem de sucesso
});
}