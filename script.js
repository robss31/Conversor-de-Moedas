const butConverte = document.querySelector(".but-converte"); //button
const selecionarmoedas = document.querySelector(".selecionar-moedas"); //primeiro select
const escolhermoeda = document.querySelector(".escolher-moeda"); //Segundo select

function converteValor() {
  const inputValorDigitado = document.querySelector(".input-valor").value;
  const valoraconverter = document.querySelector(".valor-a-converter");
  const valorconvertido = document.querySelector(".valor-convertido");

  fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL"
  )
    .then((response) => {
      return response.json();
    })
    .then((abacate) => {
      // em relação ao Real
      const dolarAtual = abacate.USDBRL.bid;
      const euroAtual = abacate.EURBRL.bid;
      const libraAtual = abacate.GBPBRL.bid;
      const bitcoinAtual = abacate.BTCBRL.bid;

      if (escolhermoeda.value == "dolar") {
        //Se escolher Dolar entre aqui
        valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(inputValorDigitado / dolarAtual);
      }

      if (escolhermoeda.value == "euro") {
        //Se escolher Euro entre aqui
        valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(inputValorDigitado / euroAtual);
      }

      if (escolhermoeda.value == "libra") {
        //Se escolher libra entre aqui
        valorconvertido.innerHTML = new Intl.NumberFormat("lb-UK", {
          style: "currency",
          currency: "GBP",
        }).format(inputValorDigitado / libraAtual);
      }

      if (escolhermoeda.value == "bitcoin") {
        //Se escolher bitcoin entre aqui
        valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "BTC",
        }).format(inputValorDigitado / bitcoinAtual);
      }

      valoraconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        //Valor digitado em Real
        style: "currency",
        currency: "BRL",
      }).format(inputValorDigitado);
    });
}

function selecionarMoeda() {
  const inputvalor = document.querySelector(".input-valor");

  if (selecionarmoedas.value == "dolar") {
    inputvalor.innerHTML = "US$ 10.000,00";
    console.log(selecionarmoedas.value);
    console.log(inputvalor.value);
  }
}

function trocaMoeda() {
  const nomedamoeda = document.querySelector(".nome-da-moeda");
  const imagematual = document.querySelector(".imagem-atual");

  if (escolhermoeda.value == "dolar") {
    nomedamoeda.innerHTML = "Dolar Americano";
    imagematual.src = "./assets/dolar.png";
  }

  if (escolhermoeda.value == "euro") {
    nomedamoeda.innerHTML = "Euro";
    imagematual.src = "./assets/euro.png";
  }

  if (escolhermoeda.value == "libra") {
    nomedamoeda.innerHTML = "Libra";
    imagematual.src = "./assets/libra.png";
  }

  if (escolhermoeda.value == "bitcoin") {
    nomedamoeda.innerHTML = "Bitcoin";
    imagematual.src = "./assets/bitcoin.png";
  }

  converteValor();
}

selecionarmoedas.addEventListener("change", selecionarMoeda);
escolhermoeda.addEventListener("change", trocaMoeda);
butConverte.addEventListener("click", converteValor);
