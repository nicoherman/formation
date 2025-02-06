/* /*Fichier utilisé pour intégrer des outils de surveillance dans votre application
Suivre les performances et comportements de votre app en production
Débuguer des problèmes potentiels
Surveiller les erreurs et leur contexte + Envoyer à des services de surveillance externe

import { type Instrumentation } from "next";

const env = process.env
console.log(env)

// La fonction permet de capturer et de gérer les erreurs côté serveur en envoyant les erreurs a un service de suivi
export const OnRequestError: Instrumentation.onRequestError = async (
    err,// Erreur capturée avec une propriété Digest, 1 id unique pour l'erreur
    request,// Les détails de la requète (chemin, methode, entete)
    context// type de routeur + type de rendu (routerkind, routerpath, routertype, revalidateJson, renderType)
) => {
    await fetch('URL_SERVICE_EXTERNE', {
        method: "POST",
        body: JSON.stringify({
            message: err,
            request,
            context,
        }),
            headers: {
                "Content-Type": "application/json",
            }
    })
}

export function register() {
    if (env.NEXT_RUNTIME === "edge") {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        return require('./register.edge')
    }
    else {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        return require('./register.node')
    }
} */