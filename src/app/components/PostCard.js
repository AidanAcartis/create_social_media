import Card from "./Cards"
import Avatar from "./Avatar"

export default function PostCard() {
    return (
        <Card>
          <div className="flex gap-3">
            <div>
              <Avatar />
            </div>
            <div>
              <p><a className="font-semibold">Nekota Tsutomu</a> share a <a className="text-socialBlue">album</a></p>
              <p className="text-gray-500 text-sm">2 hours ago</p>
            </div>
          </div>
          <div>
            <p className="my-3 text-sm">L'informatique est un domaine vaste et en constante évolution qui touche de nombreux aspects de notre vie quotidienne. Des ordinateurs aux smartphones, en passant par les systèmes embarqués dans les voitures et les appareils électroménagers, l'informatique joue un rôle crucial dans la façon dont nous interagissons avec le monde.</p>
            <div className="rounded-md overflow-hidden">
                <img src="https://crawforduniversity.edu.ng/conas/wp-content/uploads/2020/06/computer-science-header-1024x370.jpg" alt="photos"/>
            </div>
          </div>
          <div className="mt-5">
            <button className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                72
            </button>
          </div>
        </Card>
    );
}