import React from "react";

const UserProfile = () => {
  return (
    <div className="p-2 sm:p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        
        {/* Profile Image */}
        <img
          src="/profile.jpg"
          alt="User profile"
          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover"
        />
        
        {/* User Info */}
        <div>
          <h1 className="text-lg sm:text-xl font-bold">John Doe</h1>
          <p className="text-sm sm:text-base text-gray-600">Software Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
