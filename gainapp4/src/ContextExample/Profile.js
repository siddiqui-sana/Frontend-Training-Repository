import CompanyContext from './companycontext';
import {useContext} from "react";
const Profile = ()=> {
    const companyOb = useContext(CompanyContext);
    console.log(companyOb);
    return (
        <div>
            <h2>this is profile component</h2>
            <div>
                COmpany Name: {companyOb.name}
                <br/>
                COmpany City: {companyOb.city}
                <br/>
            </div>
        </div>
    );
};
export default Profile;
