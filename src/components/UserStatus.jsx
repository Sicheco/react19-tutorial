export function UserStatus({ loggedIn, isAdmin }) {
  if (loggedIn && isAdmin) {
    return <h1>Welcome Admin</h1>
  }
  else if(loggedIn) {
    return <h1>Welcome User</h1>
  }
}