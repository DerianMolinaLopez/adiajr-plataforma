import noticia1 from '../../assets/img/noticia1.png';
import bannerVariamte from '../../assets/img/banerVariante.png';
import bannerVariamte2 from '../../assets/img/bannerVariante2.png';

export const Noticias = () => {
  return (
    <>
      <h3 className='px-20 text-5xl font-black text-white mt-20 text-center py-10 bg-blue-950'>Últimas noticias</h3>
      <article className='flex justify-center my-10'>
        <picture>
          <img src={bannerVariamte} className='object-cover w-full h-auto' alt="Imagen de noticia" />
        </picture>
      </article>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10'>
        <article className='flex flex-col'>
          <picture>
            <img src={noticia1} className='object-cover w-full h-auto' alt="Imagen de noticia" />
          </picture>
        </article>
        <article className='flex flex-col'>
          <picture>
            <img src={bannerVariamte2} className='object-cover w-full h-auto' alt="Imagen de noticia" />
          </picture>
        </article>
      </section>
    </>
  );
};

export default Noticias;
/*
 <section className='grid grid-cols-1'>
      <article className='flex justify-center'>
        <picture>
          <img src={noticia1} className='objerct-' alt="Imagen de noticia" />
        </picture>
      </article>
      <article>

      </article>
    </section>
*/