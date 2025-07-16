function UserProfile(props) {
  return (
    <div style={{
      border: '2px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      margin: '15px 0',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: 'darkblue', 
        borderBottom: '1px solid #eee',
        paddingBottom: '10px'
      }}>
        {props.name}
      </h2>
      <p style={{ fontSize: '18px' }}>
        <span style={{ fontWeight: 'bold' }}>Age:</span> {props.age}
      </p>
      <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
        <span style={{ fontWeight: 'bold' }}>Bio:</span> {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;