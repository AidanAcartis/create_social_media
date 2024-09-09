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
        </Card>
    );
}