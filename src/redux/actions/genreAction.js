import { ActionTypes } from "../actionTypes";
import api from "./../../utils/api";

export const getGenres = () => (dispatch) => {

    dispatch({
        type: ActionTypes.GENRES_LOADING
    });

    const params = {
        region: "TUR",
    }

    api
        .get("/genre/movie/list", { params })
        .then((res) => dispatch({
            type: ActionTypes.GENRES_SUCCESS,
            payload: res.data
        }))
        .catch(err =>
            dispatch({
                type: ActionTypes.GENRES_ERROR,
                payload: err.message
            })
        )

};

