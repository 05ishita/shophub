function ProfileCard({ user }) {   /*props*/
  return (
    <div className="card">

      <h1>👤 User Profile</h1>

      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="User"
      />

      <h2>{user.name}</h2>

      <p>📧 {user.email}</p>

      <p>📞 {user.phone}</p>

      <button>Edit Profile</button>

    </div>
  );
}

export default ProfileCard;