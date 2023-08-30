import React from 'react';
import Comment from './Comment';
import Profile from './Profile';
import CompanyContext from "./companycontext";
const Blog=()=>{
    const companyOb = {
    name: "Skillcone",
    city: "Bangalore",
    };
return(
    <div>
        <CompanyContext.Provider value={ companyOb }>
            <Profile/>
            <Comment/>
        </CompanyContext.Provider>
    </div>
);
};
export default Blog;
