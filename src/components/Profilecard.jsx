import "./ProfileCard.css";

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <img src="https://i.pravatar.cc/100" />
      <h3>Avanish Gurung</h3>
      <p>Joined 3 months ago</p>

      <div className="stats">
        <div>
          <strong>Rs 8544</strong>
          <span>Total Spent</span>
        </div>
        <div>
          <strong>97</strong>
          <span>Orders</span>
        </div>
      </div>

      <button>Reset Password</button>
    </div>
  );
}
