const title = 'Black Fish - Agencia de marketing digital'
const description = "Alavanque sua presença online com a expertise em marketing digital da nossa agência. Aumente sua visibilidade e conversões agora mesmo!"

const SEO = {
  title,
  description,
  canonical: 'https://blackfishdigital.com.br',
  openGraph: {
    type: 'Marketing digital',
    locale: 'pt_BR',
    url: 'https://blackfishdigital.com.br',
    title,
    description,
    images: [{
      url: 'https://blackfishdigital.com.br/og.png',
      alt: title,
      width: 1280,
      height: 720,
    }]
  }
}

export default SEO;