﻿export default async function handler(req, res) {
  const data = [
    {
      palavra: "Preconceito contra Antivax",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8516&tipoprop=p",
      tamanho: 100,
    },
    {
      palavra: "Cristofobia",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8330&tipoprop=p",
      tamanho: 100,
    },
    {
      palavra: "Proíbe propaganda infantil sobre diversidade",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6326&tipoprop=p",
      tamanho: 70,
    },
    {
      palavra: "Proíbe transição de gênero para menores",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=10045&tipoprop=p",
      tamanho: 108,
    },
    {
      palavra: "Proíbe crianças na parada LGBT",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12603&tipoprop=",
      tamanho: 108,
    },
    {
      palavra: "Bíblias nas escolas",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=14205&tipoprop=p",
      tamanho: 70,
    },
    {
      palavra: "Veda instituições de ensino de usar linguagem neutra",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6859&tipoprop=p",
      tamanho: 70,
    },
  ];
  res.status(200).json(data);
}
