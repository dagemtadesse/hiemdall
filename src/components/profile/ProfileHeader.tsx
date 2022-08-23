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
      <div className="w-full h-[150px] bg-darkBrown ">
        {/* {active && ( */}
          <div className="max-w-4xl mx-auto flex  flex-col-reverse md:flex-col justify-end md:justify-between h-full items-end p-0 md:p-4">
            <button className="text-white border-2 border-white px-4 py-1 rounded-full text-sm mt-4 md:m-0 mr-2 ">
              Change Photo
            </button>

            <ProfileNavigation />
          </div>
        {/* )} */}
      </div>

      <div className="max-w-4xl mx-auto px-2">
        <div className="md:flex">
          <div className="w-[120px] h-[120px] border-2 border-white -mt-[60px] rounded-full overflow-hidden">
            <img src={doug} />
          </div>
          <div className="text-sm m-2  ml-0 md:mt-0">
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
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
