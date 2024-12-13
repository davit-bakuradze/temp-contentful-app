import heroImg from './assets/hero.svg'

const Hero = () => {
   return (
      <section className='hero'>
         <div className='hero-center'>
            <div className='hero-title'>
               <h1>Contentful CMS</h1>
               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, fugit officia voluptate est deleniti maxime recusandae fugiat iusto.
                  Non officiis reiciendis atque maiores quisquam vel nostrum quia voluptatem quos corporis.
               </p>
            </div>
            <div className='img-container'>
               <img src={heroImg} alt='Hero' />
            </div>
         </div>
      </section>
   )
}
export default Hero
