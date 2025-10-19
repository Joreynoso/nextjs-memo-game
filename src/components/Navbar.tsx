import { getKindeServerSession, LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'

export default async function Navbar() {

    // get session user
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    // class button
    const className = "bg-neutral-900 px-3 py-2 rounded-lg border border-neutral-700 hover:bg-neutral-800 transition-colors duration-200 ease-in-out cursor-pointer"

    // render return
    return (
        <>
            <nav className='w-full border-b border-neutral-800 px-4 lg:px-0'>
                <div className='w-full max-w-7xl py-5 mx-auto flex justify-between'>

                    {/* logo */}
                    <button
                        className='logo font-bold text-white cursor-pointer'>
                        Memory
                        <span className='font-normal'>
                            Game
                        </span>
                    </button>

                    {/* login & register */}
                    {user ?
                        (
                            <LogoutLink>
                                <button className={className}>Log out</button>
                            </LogoutLink>
                        ) : (
                            <div className='buttons flex gap-3'>
                                <LoginLink>
                                    <button className={className}>Log in</button>
                                </LoginLink>

                                <RegisterLink>
                                    <button className={className}>Register</button>
                                </RegisterLink>
                            </div>
                        )}
                </div >
            </nav >
        </>
    )
}