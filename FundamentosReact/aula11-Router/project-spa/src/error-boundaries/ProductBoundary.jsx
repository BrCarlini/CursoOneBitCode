import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ProductBoundary(){
    const error = useRouteError()

    if(isRouteErrorResponse(error)){
        switch(error.status){
            case 404:
                return <h2>Ooops...</h2>
        }
    }
}