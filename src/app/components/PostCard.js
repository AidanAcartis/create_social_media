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
        </Card>
    );
}