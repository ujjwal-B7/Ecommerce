import React from "react";
import { useState } from "react";
const Notifications = ({ notifications, setNotifications }) => {
  const [click, setClick] = useState(true);

  return (
    <section className="text-gray-900 cart relative z-50">
      <p className="text-3xl font-semibold py-5 text-center">Notifications</p>
      <div
        className="absolute lg:hidden top-5 right-4  text-center text-3xl"
        onClick={() => setClick(!click)}
      >
        <ion-icon name="close"></ion-icon>
      </div>
      <p className="text-center pt-32  text-gray-500 text-">
        No notifications yet.
      </p>
    </section>
  );
};

export default Notifications;
