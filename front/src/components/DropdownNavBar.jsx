import { useRef, useState, useEffect} from "react"



export default function DropdownNavBar({ func: handleLogout }) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null);

    // useEffects
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    return (
        <div ref={dropdownRef}>
            <button
                className="relative"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img className="size-6" src="/button.svg" ></img>

                <ul className={` absolute top-7 -right-3 w-48 ${isOpen ? 'visible' : 'hidden'} bg-[#2a2a30] shadow-lg  text-[#eaeaea]`}>
                    <a className=" block px-2 py-3 w-full transition duration-200 hover:bg-[#34343c]" 
                    href="/MyProfile" >
                    <img  className="inline mr-2 " src="/profile-circle.svg" />
                    My profile</a>
                    <a className={` text-red-500 block px-2 py-2 w-full transition duration-200 hover:bg-[#34343c]`}
                    href="/" >
                    <img  className="inline mr-2 " src="/log-out.svg" />
                    Log out</a>
                </ul>
            </button>

        </div>
    )
}