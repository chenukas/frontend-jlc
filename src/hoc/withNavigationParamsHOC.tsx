import { useParams, useNavigate } from "react-router-dom";


const withNavigationParamsHOC = (Component: any) => {
    return (props: any) => <Component {...props} params={useParams()} navigate={useNavigate()} />;
}

export default withNavigationParamsHOC;