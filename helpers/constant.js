//page questions part
export const renderSwitchNoteEco = (param) => {
    switch (param) {
        case 4:
            return <h2><i className="fas fa-leaf"></i></h2>;
        case 5:
            return <h2><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i></h2>;
        case 6:
            return <h2><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i></h2>;
        case 7:
            return <span><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i></span>;
        case 8:
            return <span><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i></span>;
        case 9:
            return <span><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i></span>;
        case 10:
            return <span><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i><i className="fas fa-leaf"></i></span>;
        default:
            return param;
    }
}

export const renderSwitchValue = (param) => {
    switch (param) {
        case 'pro':
            return 'professionnel';
        case 'sell':
            return 'A Vendre / service';
        case 'share':
            return 'A partager';
        case 'meet':
            return 'Rencontrer';
        case 'other':
            return 'Autre';
        case 'private':
            return 'particulier';
        case 'all_life':
            return 'Tout dans la vie';
        case 'over_five_year':
            return 'Moyenn';
        case 'starter':
            return 'Debutant';
        default:
            return param;
    }
}

export const renderSwitchTag = (param) => {
    switch (param) {
        case 'recettes bio special':
            return 'assets/img/tag_bio.png';
        case 'recette nettoyant maison':
            return 'assets/img/tag_maison.png';
        case 'recette soins du visage':
            return 'assets/img/tag_maison.png';
        default:
            return param;
    }
}

export const mapToObject= function(m){
    return Object.entries(m).map(([value, name]) => {
        return {name: name, value: value};
    });
}

export const useOptions = [
    {note: 0, label: '*-- Sélectionnez dans la liste --*', value: ''},
	{note: 0, label: 'A vendre / service', value: 'sell'},
    {note: 0, label: 'A partager', value: 'share'},
    {note: 0, label: 'Rencontrer', value: 'meet'},
    {note: 0, label: 'Autre', value: 'Autre'}
];

export const statuVendeurOptions = [
    {label: '*-- Sélectionnez dans la liste --*', value: ''},
    {label: 'particulier', value: 'private'},
    {label: 'professionnel', value: 'pro'},
    {label: 'blogger', value: 'blogger'},
    {label: 'youtuber', value: 'youtuber'},
	{label: 'Instagram', value: 'Instagram'},
    {label: 'propriétaire de la page Facebook', value: 'fb'}
]

export const durationEcos = [
    {label: '*-- Sélectionnez dans la liste --*', value: ''},
    {label: 'Pas important', value: 'pas important'},
    {label: 'Indifférent', value: 'Indifférent'},
    {label: 'Occasionnellement', value: 'Occasionnellement'},
    {label: 'Important', value: 'Important'},
    {label: 'Indispensable', value: 'Indispensable'}
]

export const OuiOptions = [
    {note: 0, label: '*-- Sélectionnez dans la liste --*', value: ''},
    {note: 1, label: 'Oui', value: true},
    {note: 0, label: 'Non', value: false}
]

export const NonOptions = [
    {note: 0, label: '', value: ''},
    {note: 1, label: 'Non', value: false},
    {note: 0, label: 'Oui', value: true}
]

export const premium_options_display = (premium_opt, res) => {
    return premium_opt?.displayFunction(res);
}

export const premium_options_display_yes_no = (res) => {
    return res ? 'Oui' : 'Non'
}

export const premium_options_display_next_maintenance = (res) => {
    return res ? 'Moins de 5000km' : 'Plus de 5000km'
}

export const premuim_options = {
    "Under_warranty": "Sous garantie",
    "had_accident": "Ayant déjà subit 1 accident",
    "defects": "Des défauts griffes, coups, usures",
    "km_certificate": "Justifier le parcours kilometrique",
    "technical_check_ok": "Contrôle technique ok",
    "periodic_maintenance": "Respect des entretiens périodiques",
    "next_maintenance_under_5000km": "Prochain entretien dans moins de 5000km",
    "purchase_invoice": "Facture d'achat",
    "gray_idead": "Carte grise",
    "maintenance_log": "Possède le ideanet d'entretien",
}

export const listsNoteEcos = [
    {note: require("assets/img/note/1.png") , name:"+1 Leaf", detail: "Publication d’une idée"},
    {note: require("assets/img/note/2.png"), name:"+2 Leaves", detail: "Nous laisser un avis"},
    {note: require("assets/img/note/3.png"),name:"+3 Leaves", detail: "Pour chaque idée mise en favori"},
    {note: require("assets/img/note/4.png"), name:"+4 Leaves", detail: "Pour chaque idée mise en favori"}
];

export const listsPartenaires = [
    {photo:"https://www.provence7.com/wp-content/uploads/2016/11/St-Vallier-2-Fotolia_758874.jpg", name:"Saint vallier de thiey", region:"ALPES MARITIMES", detail: "Saint-Vallier-de-Thiey est une commune française située dans le département des Alpes-Maritimes en région Provence-Alpes-Côte d'Azur. ", url:"https://saintvallierdethiey.com/", location:"https://www.google.com/maps?q=Saint+vallier+de+thiey&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiny5emjdrvAhUnz4UKHUGdCKoQ_AUoAXoECAEQAw"},
    {photo:"https://www.provence7.com/wp-content/uploads/2015/02/Mougins-1B-Fotolia_38058220.jpg", name:"publiez votre idée/astuce", region:"ALPES MARITIMES", detail: "La commune, historiquement paysanne spécialisée dans la cueillette de jasmin, est aujourd'hui massivement urbanisée par une abondance de villas de style néo-provençal du fait de l'étalement urbain, qui lui vaut son surnom de ville-jardin. ", url:"https://saintvallierdethiey.com/", location:"https://www.google.com/maps?q=Saint+vallier+de+thiey&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiny5emjdrvAhUnz4UKHUGdCKoQ_AUoAXoECAEQAw"},
    {photo:"https://media.lesechos.com/api/v1/images/view/5c764de03e454663ee21482a/1280x720-webp/060771859341-web-tete.webp",name:"vendez vos produits ZD et locaux", region:"ALPES MARITIMES", detail: "Cannes, ville balnéaire de la Côte d'Azur, est célèbre pour son festival international du film. La Croisette, boulevard qui longe la côte, est bordée de plages de sable fin, de boutiques de luxe et de palaces. ", url:"https://saintvallierdethiey.com/", location:"https://www.google.com/maps?q=Saint+vallier+de+thiey&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiny5emjdrvAhUnz4UKHUGdCKoQ_AUoAXoECAEQAw"},
    {photo:"https://temana.fr/wp-content/uploads/vendome-nice-slider3-min.jpg", name:"Achetez des produits ZD et locaux", region:"ALPES MARITIMES", detail: "Nice est la capitale du département des Alpes-Maritimes sur la Côte d'Azur. Elle est située sur le littoral de galets de la baie des Anges. Fondée par les Grecs puis prisée par l'élite européenne au XIXe siècle", url:"https://saintvallierdethiey.com/", location:"https://www.google.com/maps?q=Saint+vallier+de+thiey&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiny5emjdrvAhUnz4UKHUGdCKoQ_AUoAXoECAEQAw"}
];

export const listsAboutPageEquipes = [
    {photo: require("assets/img/team/tess.jpg"), name:"Yating", line:"https://vacha-design.com/", },
    {photo: require("assets/img/team/alex.jpg"), name:"Alex", line:"https://vacha-design.com/"},
    {photo: require("assets/img/team/damien.jpg"),name:"Damien", line:"https://www.linkedin.com/in/damien-baud-74385a6a/"},
    {photo: require("assets/img/team/fanny.jpg"), name:"Fanny", line:"https://www.linkedin.com/in/fanny-mabillon-b4a202199/"},
	{photo: require("assets/img/team/julien.jpg"), name:"Julien", line:"https://www.linkedin.com/in/julien-darmanthe/"},
    {photo: require("assets/img/team/Chanelle.jpg"), name:"Chanelle", line:"https://ecoechange.com/"},
    {photo: require("assets/img/team/THEODORE.jpg"), name:"Theodore", line:"https://www.linkedin.com/in/theodorentongo/"}
];


export const listsHomePageCategoriesButtons = [
    {photo: require("assets/img/idea/search.jpg"), name:"trouvez une idée /astuce", link:"/annonces"},
    {photo: require("assets/img/idea/publish.jpg"), name:"publiez votre idée/astuce", link:"/vendre"},
    {photo: require("assets/img/idea/zeroWaste.jpg"),name:"vendez vos produits zero déchet et locaux ", link:"/vendre"},
    {photo: require("assets/img/idea/local.jpg"), name:"Achetez des produits zero déchet et locaux", link:"/annonces"},
];

export const lists = [
    {detail: "1. ecoechange ne peut toutefois pas garantir de manière absolue l'exactitude et l'exhaustivité de l'ensemble de ces informations."},
    {detail: "2. ecoechange s'engage dans le cadre de l'accès et de l'utilisation du Site, à traiter les données à ideaactère personnel des personnes physiques, dans le respect de la règlementation française et européenne en matière de protection des données personnelles."},
    {detail: "3. ecoechange ne saurait donc être tenue pour responsable d'un quelconque dommage que tout internaute pourrait subir à la suite d'une telle utilisation"}
];

//pub part
export const pubs = [
    {icon: "fas fa-hands-helping", name: "Un intermédiaire de confiance"},
    {icon: "fas fa-clipboard-check", name: "Sécuriser au maximum l'achat de son idée"},
    {icon: "far fa-paper-plane", name: "ACHETER FACILEMENT VOTRE idée"}
];

export const listPubs = [
    {icon: "far fa-smile text-lg mr-1", title: "Faciliter la vie eco"},
    {icon: "fas fa-unlock-alt text-lg mr-1", title: "Sécuriser au maximum"},
    {icon: "far fa-thumbs-up text-lg mr-1", title: "protèger notre planète"}
];

export const basics = [
    {icon: "fas fa-hands-helping", name: "Découvrir celle des autres"},
    {icon: "fas fa-clipboard-check", name: "D'échanger pour les améliorer"},
    {icon: "fas fa-shopping-basket", name: "La vente de produits locaux"},
    {icon: "far fa-paper-plane", name: "Modifier à tout moment les idées"},
    {icon: "fas fa-database", name: "Faire des propositions locales"},
    {icon: "fas fa-award", name: "Collaborative pour mettre en commun ses idées locales"},
    {icon: "fas fa-globe-europe", name: "Pour sauver la planète"}
];

export const pubIconlists = [
    {icon: "far fa-smile text-lg mr-1", name: "Notez les idées"},
    {icon: "fas fa-comments text-lg mr-1", name: "Communicate avec les autres"},
    {icon: "fas fa-certificate text-lg mr-1", name: "Partagez facilement"}
];

//price page part
export const classics = [
    {list: "Annonce pré-remplie"},
    {list: "Annonce gratuite"},
	{list: "10 photos gratuites"}
];
export const premiums = [
    {list: "Rassurer l'acheteur grâce notre questionnaires"},
    {list: "Tête de liste, grande visibilité"},
    {list: "Logo qualité garantie"},
    {list: "Modifier à tout moment le prix du idée"},
    {list: "Estimation du idée par des professionnels qualifiés"},
	{list: "10 photos gratuites"},
    {list: "Vente rapide garantie"}
];
export const pubTransparents = [
    {icon: "fas fa-database", width: {width: '15%'}, name: "Récupération des données 15%"},
    {icon: "fas fa-money-check-alt", width: {width: '21%'}, name: "Salaires 21%"},
    {icon: "fas fa-server", width: {width: '21%'}, name: "Hébergement 21%"},
    {icon: "fas fa-wallet", width: {width: '15%'}, name: "Dépenses 15%"},
    {icon: "fas fa-cash-register", width: {width: '15%'}, name: "Frais 15%"},
    {icon: "fas fa-users", width: {width: '17%'}, name: "Bénéfices 17%"}
];

