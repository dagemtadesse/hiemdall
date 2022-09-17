import React, { ChangeEvent, useContext, useRef } from "react";
import NotificationContext from "../../store/NotificationContext";
import { UserContext } from "../../store/UserContext";

const UploadImage = () => {
  const userCtx = useContext(UserContext);
  const notificationCtx = useContext(NotificationContext);

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const body = formData.append("avatar", event.target.files![0]);

    userCtx.updateUser(body).then((errMsg) => {
      if (errMsg) notificationCtx.setNotification(errMsg, "error");
      else
        notificationCtx.setNotification(
          "Update your profile photo.",
          "success"
        );
    });
  };

  return (
    <>
      <input
        type="file"
        ref={hiddenFileInput}
        className="hidden"
        onChange={handleChange}
      />
      <button
        className="text-white border-2 border-white px-4 py-1 rounded-full text-sm mt-4 md:m-0 mr-2 "
        onClick={() => hiddenFileInput.current!.click()}
      >
        Change Photo
      </button>
    </>
  );
};

export default UploadImage;
