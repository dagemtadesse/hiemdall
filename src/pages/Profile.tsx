import React, { useContext, useEffect, useState } from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileItem from "../components/profile/ProfileItem";
import { ProgressIndicator } from "../components/ui/RequestIndicator";
import useLoadUser from "../hooks/UserLoader";
import NotificationContext from "../store/NotificationContext";
import { UserContext } from "../store/UserContext";
import notEmptyValidator, {
  DOBValidator,
  emailValidator,
  fullNameValidator,
  phoneValidator,
} from "../validators";

const editableProfileItems = [
  {
    field: "email",
    label: "Email",
    validator: emailValidator,
    type: "email",
  },
  {
    field: "phone",
    label: "Telephone",
    validator: phoneValidator,
    type: "tel",
  },
  {
    field: "fullName",
    label: "Full Name",
    validator: fullNameValidator,
    type: "text",
  },
  {
    field: "dateOfBirth",
    label: "Date of Birth",
    validator: DOBValidator,
    type: "date",
  },
  {
    field: "sex",
    label: "Sex",
    validator: notEmptyValidator("Sex"),
    type: "select",
  },
];

const ProfilePage = () => {
  const userCtx = useContext(UserContext);
  const isLoading = useLoadUser();

  return (
    <>
      {userCtx.loggedInUser && (
        <>
          <ProfileHeader user={userCtx.loggedInUser} />
          <div className="max-w-4xl mx-auto">
            <div className="mt-6">
              {editableProfileItems.map((data) => (
                <ProfileItem
                  key={data.field}
                  field={data.label}
                  validator={data.validator}
                  type={data.type}
                  initialValue={userCtx.loggedInUser[data.field]}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {!userCtx.loggedInUser && isLoading && <ProgressIndicator />}
    </>
  );
};

export default ProfilePage;
