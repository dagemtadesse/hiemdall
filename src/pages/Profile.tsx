import React from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileItem from "../components/profile/ProfileItem";

const ProfilePage = () => {
  return (
    <>
      {/* banner */}
     <ProfileHeader name="Douglas Bartholomew" role="student" active={true} />
      <div className="max-w-4xl mx-auto">
        <div className="mt-6">
          <ProfileItem field="Email" value="douglasbartholomew@gmail.com"/>  
          <ProfileItem field="Phone" value="0915260951"/>  
          <ProfileItem field="Nationality" value="Ethiopian"/>  
          <ProfileItem field="Date of Birth" value="9/19/2001"/>  
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
