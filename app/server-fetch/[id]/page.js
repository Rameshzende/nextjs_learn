const fetchDetails = async ({ id }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    return data;
}

const UserDetails = async ({params}) => {
  const userDetails = await fetchDetails(params)
  
  return (
    <div className="text-center mt-40">
        {
            userDetails && (
                <>
                    <p>{userDetails.name}</p>
                    <p>{userDetails.email}</p>
                    <p>{userDetails.phone}</p>
                    <p>{userDetails.website}</p>
                </>
            )
        }
    </div>
  )
}

export default UserDetails