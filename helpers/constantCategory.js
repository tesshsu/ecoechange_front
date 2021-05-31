//page AnnonceSearchForm
export const categoryFilterOptions = [
    {"name": 'Toutes les idées', "code": '', photo: require("assets/img/idea/idee.jpg")},
    {"name": 'Cuisine et Alimentation', "code": 'Cuisine et Alimentation', photo: require("assets/img/idea/cuisine.jpg") },
    {"name": 'Santé et Hygiene', "code": 'Santé et Hygiene', photo: require("assets/img/idea/sante.jpg") },
    {"name": 'Mode', "code": 'Mode', photo: require("assets/img/idea/search.jpg")},
    {"name": 'Beauté', "code": 'Beauté', photo: require("assets/img/idea/beauty.jpg")},
    {"name": 'Salle de bain', "code": 'Salle de bain', photo: require("assets/img/idea/salledebain.jpg")},
    {"name": 'Maison et Jardin', "code": 'Maison et Jardin', photo: require("assets/img/idea/maison.jpg")},
    {"name": 'Evenements et Association', "code": 'Evenements et Association', photo: require("assets/img/idea/association.jpg")},
    {"name": 'Enfants', "code": 'Enfants', photo: require("assets/img/idea/enfant.jpg")},
    {"name": 'Boutique écologique', "code": 'Boutique écologique', photo: require("assets/img/idea/zeroWaste.jpg")},
    {"name": 'Ferme locale', "code": 'Ferme locale', photo: require("assets/img/idea/ferme.jpg")},
    {"name": 'Atelier', "code": 'Atelier', photo: require("assets/img/idea/atlier.jpg")},
    {"name": 'Service', "code": 'Service', photo: require("assets/img/idea/service.jpg")},
	{"name": 'Divers', "code": 'Divers', photo: require("assets/img/idea/diver.jpg")},
];

export const listFilterOptions = {
    "Toutes les idées": [
        "*-- Toutes les idées --*"
    ],
    "Cuisine et Alimentation": [
        "*-- Sélectionnez dans la liste --*", "recettes cuisine", "recettes sans gluten", "recettes vegetarienne", "produit de cuisine", "produit d'alimentation", "Le nettoyant pour les sols", "recettes zéro déchets", "autre"
    ],
    "Santé et Hygiene": [
        "*-- Sélectionnez dans la liste --*", "astuce de bonne santé et de Hygiene", "produit de santé", "produit Hygiene", "recette aromathérapie bien-être", "autre"
    ],
    "Mode": [
        "*-- Sélectionnez dans la liste --*", "astucede manière éco-responsable", "Vendez vos créations de mode", "autre"
    ],
    "Beauté": [
        "*-- Sélectionnez dans la liste --*", "astuce de beauté", "Produits de beauté", "recette maquillage", "autres"
    ],
    "Salle de bain": [
        "*-- Sélectionnez dans la liste --*", "recette soins des cheveux", "recette soins du corps", "recette soins du visage", "astuce zéro déchet salle de bain","produit salle de bain","autres"
    ],
    "Maison et Jardin": [
        "*-- Sélectionnez dans la liste --*", "recette nettoyant maison fait maison",  "produit maison", "produit jardin exterieur", "astuce zéro déchet maison jardin", "autres"
    ],
    "Evenements et Association": [
        "*-- Sélectionnez dans la liste --*", "Association zéro déchets", "Association à l'écologie", "evenement zéro déchets", "evenement à l'écologie", "artisanale ou marchande", "autre"
    ],
    "Enfants": [
        "*-- Sélectionnez dans la liste --*", "recettes enfants bébé", "produit pour enfants bébé", "astuce pour enfants bébé zéro déchet", "autre"
    ],
    "Boutique écologique": [
        "*-- Sélectionnez dans la liste --*", "boutique bio", "boutique Zéro Déchet", "Epicerie vrac", "Magasin de vêtements", "Restaurant bio"
    ],
    "Ferme locale": [
         "*-- Sélectionnez dans la liste --*", "fromages et produits laitiers", "plantes et produits du jardin", "volailles et lapins", "Moutons et chèvre", "atelier de jardinage", "légume-fruit", "Miel", "Vin et spiritueux", "Bovins", "Gibiers", "Poissons", "autre"
    ],
    "Atelier": [
        "*-- Sélectionnez dans la liste --*", "atelier zéro déchets", "atelier de bricolage ", "atelier de cuisine", "atelier bien-être", "atelier de jardinage", "autre"
    ],
    "Service": [
        "*-- Sélectionnez dans la liste --*", "livraison alimentaire à domiciles", "beauté et massage à domicile ", "travaux à domicile", "service de jardinage à domicile", "aide à domicile ménage", "Conseillère zéro déchet à domicile", "autre"
    ],
	"Divers" : [
        "*-- Sélectionnez dans la liste --*", "autre"
    ],
};
