import Link from 'next/link'

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-center'>
            <p className='mb-4'>The page your are looking for its not found, Please click below to go Home</p>
            <div>
                <Link className="text-blue-500 hover:underline" href='/'>
                   Go Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound