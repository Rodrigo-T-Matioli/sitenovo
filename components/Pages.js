import { NextSeo } from 'next-seo';
function PagesHead({ title, description, path, children }) {
  const url = `https://blackfishdigital.com.br${path}`
  return (<div>
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={
        {
          url,
          title,
        }
      }
    />
    {children}
  </div>);
}

export default PagesHead;