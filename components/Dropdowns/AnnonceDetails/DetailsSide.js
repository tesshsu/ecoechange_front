import React, { useEffect, useState } from 'react';
import {isMobile} from 'react-device-detect';
import MondalContact from "components/Mondal/MondalContact.js";
import MondalValide from "components/Mondal/MondalValide.js";
import NoteConfiance from "components/Tabs/NoteConfiance.js";
import {connect} from "react-redux";
import {renderSwitchValue} from 'helpers/constant';
import Link from "next/link";

const DetailsSide = ({ dispatch,
					  loading,
					  idea}) => {
	const [isYoutuber, setIsYoutuber] = React.useState(false)
	const websiteLink = idea?.own_website;
	const videoid = websiteLink?.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
	const youtubeId = videoid!= null ? videoid[1] : null;
	useEffect(() => {
		if(idea?.own_website?.indexOf('youtu') > -1){
			return setIsYoutuber(true);
		}
	}, [dispatch, idea]);

	const address_boutique = idea?.shop_address ? idea?.shop_address : "none";
	const prix_idea = idea?.product_price ? idea?.product_price : "none";
  const basics = [
	  { icon: "fas fa-map-pin", name: "Localisation", value: idea?.postal_code },
	  { icon: "fas fa-mortar-pestle", name: "Idées publiées par", value: idea?.owner_type },
	  { icon: "fas fa-hand-holding-usd", name: "Prix du produit", value: prix_idea },
	  { icon: "fas fa-store", name: "Adresse de la boutique", value: address_boutique }
  ];
  return (
    <>
        <div className="sideDetails w-full lg:w-4/12 px-12 mt-4 py-1">
			<div className="flex flex-wrap font-bold text-green-500 text-xl mt-2">
				{idea?.title}
			</div>
			<div className="flex flex-wrap mt-4">
			   <NoteConfiance />
			</div>
			{idea?.cycle_vie && (
				<div className="flex flex-wrap p-1">
					<div className="w-12/12 flex-1">
						<span className="text-sm block p-3 text-gray-800 rounded-full border border-solid border-gray-200"><i className="fas fa-recycle"></i> Cycle de vie</span>
					</div>
					<div className="w-12/12 flex-1">
						<span className="ideaburant text-md block p-3 text-gray-800">{idea?.cycle_vie}</span>
						<p className="text-md text-gray-800"></p>
					</div>
				</div>
			)}
			{idea?.efficacite_dispo && (
				<div className="flex flex-wrap p-1">
					<div className="w-12/12 flex-1">
						<span className="text-sm block p-3 text-gray-800 rounded-full border border-solid border-gray-200"><i className="fas fa-vial"></i> Efficacite comparaison</span>
					</div>
					<div className="w-12/12 flex-1">
						<span className="ideaburant text-md block p-3 text-gray-800">{idea?.efficacite_dispo}</span>
						<p className="text-md text-gray-800"></p>
					</div>
				</div>
			)}
			{idea?.composants_local == 1 && (
				<div className="flex flex-wrap p-1">
					<div className="w-12/12 flex-1">
						<span className="text-sm block p-3 text-gray-800 rounded-full border border-solid border-gray-200"><i className="fas fa-tree"></i> Composants local</span>
					</div>
					<div className="w-12/12 flex-1">
						<span className="ideaburant text-md block p-3 text-gray-800">oui</span>
					</div>
				</div>
			)}
			{idea?.transparence_info == 1 && (
				<div className="flex flex-wrap p-1">
					<div className="w-12/12 flex-1">
						<span className="text-sm block p-3 text-gray-800 rounded-full border border-solid border-gray-200"><i className="fas fa-box-open"></i> Transparent Local</span>
					</div>
					<div className="w-12/12 flex-1">
						<span className="ideaburant text-md block p-3 text-gray-800">oui</span>
					</div>
				</div>
			)}
			{idea?.innocuite_env == 1 && (
				<div className="flex flex-wrap p-1">
					<div className="w-12/12 flex-1">
						<span className="text-sm block p-3 text-gray-800 rounded-full border border-solid border-gray-200"><i className="fas fa-atom"></i> Répercussion sur l'environnement</span>
					</div>
					<div className="w-12/12 flex-1">
						<span className="ideaburant text-md block p-3 text-gray-800">oui</span>
					</div>
				</div>
			)}
			{idea?.product_label && (
				<div className="flex flex-wrap p-1">
					<div className="w-12/12 flex-1">
						<span className="text-sm block p-3 text-gray-800 rounded-full border border-solid border-gray-200"><i className="fas fa-medal"></i> Product Label</span>
					</div>
					<div className="w-12/12 flex-1">
						<span className="ideaburant text-md block p-3 text-gray-800">{idea?.product_label}</span>
						<p className="text-md text-gray-800"></p>
					</div>
				</div>
			)}

			{ idea?.efficacite_dispo?.length > 0 || idea?.cycle_vie?.length > 0 ? (
				<div className="flex flex-wrap mt-2">
					<div className="flex flex-wrap content-center items-center justify-center mr-auto h-full">
						<button
							className="bg-green-500 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-4 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
						>
							<i className="fas fa-store-alt"></i> <span className="noteConfiance text-md">Info Basic </span>
						</button>
					</div>
				</div>
			) :(null) }

			{basics.map(basic => (
				<div className="flex flex-wrap p-1">
					<div className="w-12/12 flex-1">
						<span className="text-sm block p-3 text-gray-800 rounded-full border border-solid border-gray-200"><i className={basic.icon}></i> {basic.name}</span>
					</div>
					<div className="w-12/12 flex-1">
					  <span className="ideaburant text-md block p-3 text-gray-800">{renderSwitchValue(basic.value)}</span>
					</div>
				</div>
			))}
			{idea?.own_website &&(
				<div className="flex flex-wrap p-1">
					<div className="w-12/12 flex-1">
						<span className="text-sm block p-3 text-gray-800 rounded-full border border-solid border-gray-200"><i
							className="fas fa-link"></i> Site internet</span>
					</div>
					<div className="w-12/12 flex-1">
						<span className="ideaburant text-md block p-3 text-green-500">
							<a href={idea?.own_website}
							   target="_blank"
							   >
							{idea?.own_website}
							</a>
						</span>
					</div>
					{isYoutuber &&(
						<div className="mr-auto text-center">
							<p className="text-sm text-gray-600">Video Youtube de cette idée</p>
							{isMobile ? (
								<iframe width="260" height="280" src={'https://www.youtube.com/embed/'+youtubeId}
										title="Ecoechange YouTuber video" frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen></iframe>
							):(
								<iframe width="300" height="280" src={'https://www.youtube.com/embed/'+youtubeId}
										title="Ecoechange YouTuber video" frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen></iframe>
							)}
						</div>
					)}
				</div>
			)}

			<div className="flex flex-wrap mt-2">
				<div className="flex flex-wrap content-center items-center text-center justify-center h-full">
					{idea?.accord_contact == 1 && (
						<MondalContact transparent />
					)}
                </div>
			</div>

			<div className="flex flex-wrap mt-2">
				<div className="flex flex-wrap content-center items-center text-center justify-center h-full">
					{idea?.note >= 2 && (
						<div>
						<div className="flex flex-wrap content-center items-center justify-center mr-auto h-full">
							<button
								className="bg-green-500 text-white active:bg-gray-600 font-bold uppercase animate-bounce text-sm px-6 py-4 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"><i className="fas fa-vote-yea"></i> <span className="noteConfiance text-md"> LA COMMUNAUTÉ VALIDE </span>
							</button>
						</div>
						<MondalValide transparent />
						</div>
					)}
				</div>
			</div>

			<div className="flex flex-wrap mt-2">
				<div className="flex flex-wrap content-center items-center justify-center mr-auto h-full">
					<button
						className="bg-green-500 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-4 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
					>
						<i className="fas fa-ad"></i> <span className="noteConfiance text-md"> Coin publicitaire </span>
					</button>
				</div>
			</div>
			<div className="flex flex-wrap mt-2">
				<div className="flex flex-wrap content-center items-center justify-center mr-auto h-full">
					<p className="text-gray-400 text-sm">Vous pouvez publier une annonce publicitaire de votre boutique / atelier / ferme 100% gratuituitement ici, veuillez nous contacter directement. Nous adapterons les publicités pour vous</p>
					<Link href="/footer/contact">
						<a
							href="http://blog.creative-tim.com?ref=twnjs-footer-small"
							className="bg-gray-300 mt-2 text-white hover:text-gray-500 text-sm font-semibold block py-1 px-3"
						>
							cliquez ici pour nous contacter
						</a>
					</Link>
				</div>
			</div>
			<div className="flex flex-wrap mt-2">
				<div className="flex flex-wrap content-center items-center justify-center mr-auto h-full">
					<a href="https://www.potagers-compagnie.fr/" target="_blank">
						<img
							alt="ecoechange pubImg"
							src={require("assets/img/pub/potagers.png")}
							className="pubImage shadow-lg mx-auto rounded-lg"
						/>
					</a>
					<a href="https://thenakedshop.fr/" target="_blank">
						<img
							alt="ecoechange pubImg"
							src={require("assets/img/pub/naked.png")}
							className="pubImage shadow-lg mx-auto rounded-lg mt-4"
						/>
					</a>
				</div>
			</div>
        </div>
    </>
  );
};

const mapStateToProps = (state) => ({
	loading: state.ideasReducer.loading,
	idea: state.ideasReducer.selectedIdea,
	hasErrors: state.ideasReducer.hasErrors,
})

export default connect(mapStateToProps)(DetailsSide)
