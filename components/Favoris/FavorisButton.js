import React, {useEffect} from 'react';
import useLoggedUser from 'service/hooks/useLoggedUser';
import Router, {useRouter} from "next/router";

export default function FavorisButton(props) {
    const {
        isAuthentificated,
        loggedUser
    } = useLoggedUser();
    const router = useRouter();
    useEffect(() => {

    }, [isAuthentificated, loggedUser]);

    const [isClick, setIsClick] = React.useState(false);

    const style = {
        color: isClick ? '#48bb78' : '#eee',
    }

    const onClickFavoris = (e) => {
        e.preventDefault();

        let payload = {
            "category": props.category,
            "entity_id": props.entity_id
        }
        try{
            if (!isAuthentificated || !loggedUser) {
                Router.push("/auth/login")
            }else{
                props.action(payload);
                setIsClick(true);
            }
        }catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            <button
                className="bg-gray-600 w-8 h-8 rounded-full outline-none focus:outline-none ml-2 mb-1"
                type="button"
                onClick={onClickFavoris}
            >
                <i className="fas fa-bookmark" style={style}> </i>
            </button>
            {isClick ? <span className="text-xs text-gray-500"> Ajoutées</span> : null}
        </>
    );
}
