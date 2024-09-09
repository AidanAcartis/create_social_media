import Card from "./components/Cards.js"
import NavigationCard from "./components/NavigationCard.js";
import PostCard from "./components/PostCard.js";
import PostFormCard from "./components/PostFormCard.js";

export default function Home() {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      <div className="w-3/12">
          <NavigationCard />
      </div>
      <div className="w-9/12">
        <PostFormCard />
        <PostCard />
      </div>
    </div>
  );
}
