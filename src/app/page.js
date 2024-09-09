import Avatar from "./components/Avatar.js";
import Card from "./components/Cards.js"
import NavigationCard from "./components/NavigationCard.js";
import PostFormCard from "./components/PostFormCard.js";

export default function Home() {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      <div className="w-1/3">
          <NavigationCard />
      </div>
      <div className="grow">
        <PostFormCard />
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
      </div>
    </div>
  );
}
