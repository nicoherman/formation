import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  //Autorisation pour les images
  images:{
    remotePatterns: [ // Cahque objet va représenter un url
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        pathname: "**" // Autorisations de chemin de fichier "**"=tout ce qui vient de ce site
      },
      {
        protocol: 'https',
        hostname: 'images01.nicepage.com',
        pathname: "**" // Autorisations de chemin de fichier "**"=tout ce qui vient de ce site
      }
    ],
    //deviceSizes: [320, 420, 768, 1024, 1200], // Taille de dispositives prises en charge pour le composant Image
    //imageSizes: [16, 32, 48, 64, 96], // Largeur d'image spécifique pour la création des sourcesSet
    //formats: ["image/webp", "image/avif"], // Formats pris en charge
    //minimumCacheTTL: 60, // Durée de vie minimale pour les images optimisées en S
    //disableStaticImages: false, // Désactive l'importation statique des images
    // dangerouslyAllowSVG a ne pas utiliser Potentiellement très dangereux
  }
};

export default nextConfig;
