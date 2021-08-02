import React, {useEffect} from 'react';
import useLoggedUser from 'service/hooks/useLoggedUser';

export default function FavorisButton(props) {
    const {
        isAuthentificated,
        loggedUser
    } = useLoggedUser();

    const [isClick, setIsClick] = React.useState(false);

    const style = {
        color: isClick ? '#48bb78' : '#a0aec0',
    }

    const onClickFavoris = (e) => {
        e.preventDefault();

        let payload = {
            "category": props.category,
            "entity_id": props.entity_id,
            "user_id": props.user_id
        }
        try{
            if (!isAuthentificated || !loggedUser) {
                Router.push("/auth/login")
            }else{
                props.action(payload);
                setIsClick(true);
            }
        }catch (error) {
            console.log(error.message);
        }
    }


    return (
        <>
            <button
                className="outline-none focus:outline-none ml-2 mb-1"
                type="button"
                onClick={onClickFavoris}
            >
                <i className="fas fa-heart text-2xl" style={style}> </i>
            </button>
            {isClick ? <span className="text-xs text-gray-500 p-1"> Ajoutées</span> : null}
        </>
    );
}
