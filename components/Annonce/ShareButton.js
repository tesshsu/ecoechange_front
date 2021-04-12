import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";



const ShareButton= ({
						 dispatch,
						 idea,
						 loading,
					   }) => {

  let ideaId = idea?.id;
  const title = "Bonjour, j'ai partagé ces idées sur l’écologie par une plateforme Ecoechange";
  const shareUrl = ideaId ? `https://ecoechange.com/annonce?id=${ideaId}`  : "https://ecoechange.com/" ;
  return (
   <>
        <ul className="flex pl-0 rounded list-none flex-wrap">
		   <li>
		      <FacebookShareButton
					url={shareUrl}
				>
				<FacebookIcon size={32} round />
				</FacebookShareButton>
		   </li>
		   <li>
		      <TwitterShareButton
					title={title}
					url={shareUrl}
				>
				<TwitterIcon size={32} round />
				</TwitterShareButton>
		   </li>
		   <li>
		      <EmailShareButton
					subject={title}
					body={shareUrl}
				>
				<EmailIcon size={32} round />
				</EmailShareButton>
		   </li>
		    <li>
		      <WhatsappShareButton
					title={title}
					url={shareUrl}
				>
				<WhatsappIcon size={32} round />
				</ WhatsappShareButton>
		   </li>
		</ul>

    </>
  );
}

const mapStateToProps = (state) => ({
	loading: state.ideasReducer.loading,
	idea: state.ideasReducer.selectedIdea,
	hasErrors: state.ideasReducer.hasErrors,
})

export default connect(mapStateToProps)(ShareButton)
