"use client"

import { useRouter } from "next/navigation";

import Image from 'next/image'

export default function Home() {

  const router = useRouter()

  const handleSubmit = () => {
    router.push('/contact')
    /*
    useRouter() Methods
    -------------------
    .replace() = remplacer l'ul actuelle sans l'ajouter dans l'historique
    .back() = revenir à la page précédente dans l'historique
    .refresh() = refresh la page
    .prefetch('/contact') = préchargement de la page contact pour navigation plus rapide
    .forward() = Avancer à la prochaine page dans l'historique
    */
  }

  const ImageUrl = "https://cdn.prod.website-files.com/62288d364667ce2eca3a8a44/62288d364667ce20653a8de7_5c20c7a968f8aab5ab22f473ef3b76354ed3d335_07_promote-1-p-1600.png"

  return (
    <>
    <div className='w-full h-screen flex items-center justify-center flex-col'>
        <h1 className='text-3xl font-black uppercase'>
            Welcome here !
        </h1>

        <Image 
          src={ImageUrl} 
          width={800} 
          height={800}
          alt="Image Apllication clients"
          //sizes="(max-width: 500px) 100vw, 600px"
          //quality={80} //Entre 1 et 100 plus élevé meilleure qualité, attention cela peut augmenter le temps de chargement
          //priority={true} // L'image doit être chargée en priorité (images au dessus de ligne de flottaison)
          //placeholder="blur" //empty or blur
          onLoad={()=>{
            console.log("Image chargée")
          }}
          onError={()=>{
            console.log("Chargement interrompu")
          }}
          loading="lazy" //Technique d'optimisation du chargement (viewport only) or =eager Elmements qui doivent être visibles immédiatement
         />

        <button className="p-2 bg-blue-600 rounded-md text-white mt-2" onClick={handleSubmit}>Contactez moi</button>
    </div>
    </>
  );
}
