import React from "react";
import doug from "../../assets/avatar.jpg";
import ProfileNavigation from "./ProfileNavigation";

type ProfileHeaderProps = {
  name: string;
  role: "admin" | "student";
  active: boolean;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  role,
  active,
}) => {
  return (
    <>
      <div className="w-full h-[150px] bg-darkBrown p-4">
        {active && (
          <div className="max-w-4xl mx-auto flex flex-row-reverse ">
            <button className="text-white border-2 border-white px-4 py-1 rounded-full text-sm">
              Change Photo
            </button>
          </div>
        )}

        
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-start">
          <div className="w-[120px] h-[120px] border-2 border-white -mt-[60px] rounded-full overflow-hidden">
            <img src={doug} />
          </div>
          <div className="text-sm ml-2">
            <h2 className="font-medium">{name}</h2>
            <p className="text-gray-900 mt-0.5">
              {role === "admin" && (
                <span className="font-mediumd text-base uppercase">Admin</span>
              )}
              {role === "student" && (
                <>
                  <span>Wood Work, level 3</span>{" "}
                  <span className="ml-4">Acadamic Status </span>
                  <span className="font-bold text-green-900">Promoted</span>
                </>
              )}
            </p>
          </div>
          <ProfileNavigation />
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
