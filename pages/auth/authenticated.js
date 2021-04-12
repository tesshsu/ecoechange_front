import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {authenticated} from "../../service/actions";
import {connect} from "react-redux";


const Authenticated = ({
                           dispatch
                       }) => {
    const router = useRouter();
    useEffect(() => {
        dispatch(authenticated(router.query.token));
        router.push("/");
    }, [dispatch]);

    return (
        <>
        </>
    );
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Authenticated)
