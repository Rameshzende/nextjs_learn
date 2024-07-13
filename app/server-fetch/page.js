import Link from "next/link";

const fetchDetails = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

export default async function ServerFetch() {
    const data = await fetchDetails()
    return(
        <div>
        <p>User name details</p>
        {
            data && data.length > 0 && data.map(el => {
                return (
                    <p>
                        <Link href={`server-fetch/${el.id}`}>{el.name}</Link>
                    </p>
                )
            })
        }
        </div>
    )
}