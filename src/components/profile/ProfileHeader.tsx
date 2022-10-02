import classNames from "classnames";
import React from "react";
import doug from "../../assets/avatar.jpg";
import { User } from "../../store/UserContext";
import UploadImage from "../inputs/UploadImage";
import ProfileNavigation from "./ProfileNavigation";

type ProfileHeaderProps = {
  user: User;
  active?: boolean;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  const statusStyle = classNames({
    "font-bold capitalize": true,
    "text-green-900": user.academicStatus === "promoted",
    "text-red-900": user.academicStatus === "failed",
    "text-gray-700": user.academicStatus === "unknown",
  });
  return (
    <>
      <div className="w-full h-[150px] bg-darkBrown ">
        <div className="max-w-4xl mx-auto flex  flex-col-reverse md:flex-col justify-end md:justify-between h-full items-end p-0 md:p-4">
          <UploadImage />
          {user.role === "admin" && <ProfileNavigation />}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-2">
        <div className="md:flex">
          <div className="w-[120px] h-[120px] border-2 border-white -mt-[60px] rounded-full overflow-hidden">
            <img src={user.avatar || doug} />
          </div>
          <div className="text-sm m-2  ml-1 md:mt-0">
            <h2 className="font-medium">{user.fullName}</h2>
            <p className="text-gray-900 mt-0.5">
              {user.role === "admin" && (
                <span className="font-mediumd text-sm font-bold uppercase">
                  Admin
                </span>
              )}
              {user.role === "student" && (
                <>
                  <span>
                    {user.department}, level {user.level}
                  </span>{" "}
                  <span className="ml-4">Acadamic Status </span>
                  <span className={statusStyle}>
                    {user.academicStatus || "unknown"}
                  </span>
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
