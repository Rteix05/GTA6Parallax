import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Lucia = () => {
  useGSAP(() => {
    gsap.set('.lucia-life', { marginTop: '-80vh'});

    gsap.timeline({
      scrollTrigger: {
        trigger: '.lucia-life',
        start: 'top 80%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.second-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to('.lucia-life .img-box', {
      scrollTrigger: {
        trigger: '.lucia-life',
        start: 'top center',
        end: '80% center',
        scrub: 2
      }, y: -200, duration: 1, ease: 'power1.inOut'
    }, '<')
  });

  return (
    <section className="lucia-life">
      <div className="flex flex-col gap-5 items-end img-box lg:1/2 ps-10 mt-96">
        <div className="lucia-1">
          <img src="/images/lucia-1.webp" />
        </div>
        <div className="lucia-3">
          <img src="/images/lucia-3.webp" />
        </div>
      </div>

      <div className="lg:w-1/2 lucia-life-content">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1>Lucia Caminos</h1>
          <h2>Le père de Lucia lui a appris à se battre dès qu'elle a su marcher.</h2>
          <p>La vie lui tombe dessus à coups de poing depuis toujours. Se battre pour sa famille l'a envoyée à la pénitentiaire de Leonida. Un pur hasard l'en a sortie. Lucia a retenu la leçon — à partir d'ici, seules les décisions intelligentes comptent.</p>
        </div>

        <div className="lucia-2">
          <img src="/images/lucia-2.webp" />
        </div>

        <p className="max-w-xl lg:ps-32 ps-10">Plus que tout, Lucia veut la belle vie dont sa mère rêve depuis leurs jours à Liberty City — mais au lieu de fantasmes à moitié cuits, Lucia est prête à remettre les choses entre ses mains.</p>
      </div>
    </section>
  )
}

export default Lucia